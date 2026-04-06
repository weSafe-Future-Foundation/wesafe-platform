import { Injectable } from '@nestjs/common';
import { prisma } from '@wesafe/database';

@Injectable()
export class MarketingService {
  /**
   * Get marketing analytics
   * Returns statistics about campaigns, contacts, engagement
   */
  async getAnalytics() {
    const [totalContacts, totalCampaigns, recentContacts] = await Promise.all([
      prisma.contact.count(),
      prisma.marketingCampaign.count(),
      prisma.contact.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    return {
      totalContacts,
      totalCampaigns,
      recentContacts,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Create a marketing campaign
   */
  async createCampaign(data: {
    name: string;
    description?: string;
    startDate: Date;
    endDate: Date;
    targetRegion?: string;
  }) {
    return prisma.marketingCampaign.create({
      data: {
        name: data.name,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        targetRegion: data.targetRegion,
      },
    });
  }

  /**
   * Get all contacts for marketing purposes
   */
  async getAllContacts(page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;

    const [contacts, total] = await Promise.all([
      prisma.contact.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.contact.count(),
    ]);

    return {
      data: contacts,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    };
  }
}
