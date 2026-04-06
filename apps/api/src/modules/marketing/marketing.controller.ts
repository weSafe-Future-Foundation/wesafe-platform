import { Controller, Get, Post, Body, Query, UseGuards, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { IsString, IsOptional, IsISO8601, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { RolesGuard, Roles } from '@/guards/roles.guard';
import { JwtGuard } from '@/guards/jwt.guard';
import { MarketingService } from './marketing.service';

class CreateCampaignDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsISO8601()
  startDate: string;

  @IsISO8601()
  endDate: string;

  @IsOptional()
  @IsString()
  targetRegion?: string;
}

class GetContactsQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number = 20;
}

@Controller('marketing')
@UseGuards(JwtGuard, RolesGuard)
export class MarketingController {
  constructor(private readonly marketingService: MarketingService) {}

  /**
   * Get marketing analytics (admin only)
   */
  @Get('analytics')
  @Roles(['admin'])
  @ApiBearerAuth('jwt')
  @ApiOperation({ summary: 'Get marketing analytics' })
  @ApiResponse({
    status: 200,
    description: 'Marketing analytics data',
    schema: {
      example: {
        totalContacts: 150,
        totalCampaigns: 5,
        recentContacts: [],
        timestamp: '2024-01-01T00:00:00Z',
      },
    },
  })
  async getAnalytics() {
    return this.marketingService.getAnalytics();
  }

  /**
   * Create a marketing campaign (admin only)
   */
  @Post('campaigns')
  @Roles(['admin'])
  @HttpCode(201)
  @ApiBearerAuth('jwt')
  @ApiOperation({ summary: 'Create marketing campaign' })
  @ApiResponse({
    status: 201,
    description: 'Campaign created successfully',
  })
  async createCampaign(@Body() dto: CreateCampaignDto) {
    return this.marketingService.createCampaign({
      ...dto,
      startDate: new Date(dto.startDate),
      endDate: new Date(dto.endDate),
    });
  }

  /**
   * Get all contacts (admin only)
   */
  @Get('contacts')
  @Roles(['admin'])
  @ApiBearerAuth('jwt')
  @ApiOperation({ summary: 'Get all contacts' })
  @ApiResponse({
    status: 200,
    description: 'List of contacts',
    schema: {
      example: {
        data: [
          {
            id: 'contact-id',
            name: 'John Doe',
            email: 'john@example.com',
            createdAt: '2024-01-01T00:00:00Z',
          },
        ],
        pagination: {
          total: 150,
          page: 1,
          limit: 20,
          pages: 8,
        },
      },
    },
  })
  async getContacts(@Query() query: GetContactsQueryDto) {
    return this.marketingService.getAllContacts(query.page, query.limit);
  }
}
