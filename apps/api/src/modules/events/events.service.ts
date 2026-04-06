import { Injectable } from '@nestjs/common';
import { prisma } from '@wesafe/database';

@Injectable()
export class EventsService {
  /**
   * Get all events with optional filtering by region and pagination
   */
  async getAllEvents(region?: string, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const where = region ? { region } : {};

    const [events, total] = await Promise.all([
      prisma.event.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.event.count({ where }),
    ]);

    return {
      data: events,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Get event by slug
   */
  async getEventBySlug(slug: string) {
    return prisma.event.findUnique({
      where: { slug },
      include: {
        registrations: {
          select: {
            id: true,
            userId: true,
            createdAt: true,
          },
        },
      },
    });
  }

  /**
   * Register a student for an event
   */
  async registerForEvent(eventId: string, userId: string) {
    return prisma.eventRegistration.create({
      data: {
        eventId,
        userId,
      },
    });
  }
}
