import { Injectable } from '@nestjs/common';
import { prisma } from '@wesafe/database';

@Injectable()
export class LeaderboardService {
  /**
   * Get leaderboard rankings
   * Rankings based on event participation, donations, or certificates
   */
  async getLeaderboard(region?: string, metric: string = 'points', limit: number = 50) {
    const where = region ? { region } : {};

    // Fetch students with their engagement metrics
    const students = await prisma.student.findMany({
      where,
      include: {
        eventRegistrations: true,
        certificates: true,
        donations: true,
      },
      take: limit,
    });

    // Calculate scores based on selected metric
    const leaderboard = students
      .map((student) => {
        let score = 0;

        switch (metric) {
          case 'events':
            score = student.eventRegistrations.length;
            break;
          case 'certificates':
            score = student.certificates.length;
            break;
          case 'donations':
            score = student.donations.reduce((sum, d) => sum + (d.amount || 0), 0);
            break;
          case 'points':
          default:
            // Combined score
            score =
              student.eventRegistrations.length * 10 +
              student.certificates.length * 20 +
              (student.donations.reduce((sum, d) => sum + (d.amount || 0), 0) || 0);
            break;
        }

        return {
          rank: 0, // Will be set after sorting
          studentId: student.id,
          name: student.name,
          email: student.email,
          region: student.region,
          score,
          eventCount: student.eventRegistrations.length,
          certificateCount: student.certificates.length,
          totalDonations: student.donations.reduce((sum, d) => sum + (d.amount || 0), 0),
        };
      })
      .sort((a, b) => b.score - a.score)
      .map((entry, index) => ({
        ...entry,
        rank: index + 1,
      }));

    return {
      metric,
      region: region || 'All',
      data: leaderboard,
      timestamp: new Date().toISOString(),
    };
  }
}
