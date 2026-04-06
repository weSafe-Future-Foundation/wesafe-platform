import { Injectable } from '@nestjs/common';
import { prisma } from '@wesafe/database';

@Injectable()
export class StudentsService {
  /**
   * Register a new student
   */
  async registerStudent(data: {
    email: string;
    name: string;
    phone?: string;
    region?: string;
  }) {
    return prisma.student.create({
      data: {
        email: data.email,
        name: data.name,
        phone: data.phone,
        region: data.region,
      },
    });
  }

  /**
   * Get student dashboard data
   */
  async getStudentDashboard(studentId: string) {
    const student = await prisma.student.findUnique({
      where: { id: studentId },
      include: {
        eventRegistrations: {
          include: {
            event: true,
          },
        },
        certificates: true,
        donations: true,
      },
    });

    if (!student) {
      return null;
    }

    return {
      profile: student,
      eventCount: student.eventRegistrations.length,
      certificateCount: student.certificates.length,
      totalDonations: student.donations.reduce((sum, d) => sum + (d.amount || 0), 0),
    };
  }

  /**
   * Update student profile
   */
  async updateStudentProfile(
    studentId: string,
    data: {
      name?: string;
      email?: string;
      phone?: string;
      region?: string;
    },
  ) {
    return prisma.student.update({
      where: { id: studentId },
      data,
    });
  }

  /**
   * Get student certificates
   */
  async getStudentCertificates(studentId: string) {
    return prisma.certificate.findMany({
      where: { studentId },
      orderBy: { issuedAt: 'desc' },
    });
  }
}
