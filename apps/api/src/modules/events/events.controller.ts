import { Controller, Get, Post, Param, Query, Body, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { EventsService } from './events.service';

class GetEventsQueryDto {
  @IsOptional()
  @IsString()
  region?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number = 10;
}

class RegisterForEventDto {
  @IsString()
  userId: string;
}

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  /**
   * Get all events with optional filtering
   */
  @Get()
  @ApiOperation({ summary: 'Get all events' })
  @ApiQuery({ name: 'region', required: false, type: String })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiResponse({
    status: 200,
    description: 'List of events',
    schema: {
      example: {
        data: [
          {
            id: 'event-1',
            title: 'Event Title',
            slug: 'event-title',
            region: 'North',
            createdAt: '2024-01-01T00:00:00Z',
          },
        ],
        pagination: {
          total: 1,
          page: 1,
          limit: 10,
          pages: 1,
        },
      },
    },
  })
  async getEvents(@Query() query: GetEventsQueryDto) {
    return this.eventsService.getAllEvents(query.region, query.page, query.limit);
  }

  /**
   * Get event by slug
   */
  @Get(':slug')
  @ApiOperation({ summary: 'Get event by slug' })
  @ApiResponse({
    status: 200,
    description: 'Event details',
    schema: {
      example: {
        id: 'event-1',
        title: 'Event Title',
        slug: 'event-title',
        description: 'Event description',
        region: 'North',
        registrations: [],
      },
    },
  })
  async getEventBySlug(@Param('slug') slug: string) {
    return this.eventsService.getEventBySlug(slug);
  }

  /**
   * Register a student for an event
   */
  @Post(':id/register')
  @HttpCode(201)
  @ApiOperation({ summary: 'Register for event' })
  @ApiResponse({
    status: 201,
    description: 'Registration created',
  })
  async registerForEvent(@Param('id') eventId: string, @Body() dto: RegisterForEventDto) {
    return this.eventsService.registerForEvent(eventId, dto.userId);
  }
}
