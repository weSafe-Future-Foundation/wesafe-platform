import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { IsOptional, IsString, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { LeaderboardService } from './leaderboard.service';

class GetLeaderboardQueryDto {
  @IsOptional()
  @IsString()
  region?: string;

  @IsOptional()
  @IsString()
  metric?: string; // 'points' (default), 'events', 'certificates', 'donations'

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(500)
  limit?: number = 50;
}

@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  /**
   * Get leaderboard rankings
   */
  @Get()
  @ApiOperation({ summary: 'Get leaderboard rankings' })
  @ApiQuery({ name: 'region', required: false, type: String })
  @ApiQuery({
    name: 'metric',
    required: false,
    type: String,
    enum: ['points', 'events', 'certificates', 'donations'],
    example: 'points',
  })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 50 })
  @ApiResponse({
    status: 200,
    description: 'Leaderboard rankings',
    schema: {
      example: {
        metric: 'points',
        region: 'North',
        data: [
          {
            rank: 1,
            studentId: 'student-1',
            name: 'Student Name',
            email: 'student@example.com',
            region: 'North',
            score: 1000,
            eventCount: 5,
            certificateCount: 3,
            totalDonations: 5000,
          },
        ],
        timestamp: '2024-01-01T00:00:00Z',
      },
    },
  })
  async getLeaderboard(@Query() query: GetLeaderboardQueryDto) {
    return this.leaderboardService.getLeaderboard(query.region, query.metric, query.limit);
  }
}
