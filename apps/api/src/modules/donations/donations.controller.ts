import { Controller, Post, Get, Param, Body, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IsNumber, IsEmail, IsString, IsOptional, IsUUID, Min } from 'class-validator';
import { DonationsService } from './donations.service';

class CreateDonationOrderDto {
  @IsNumber()
  @Min(1)
  amount: number;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsOptional()
  @IsUUID()
  studentId?: string;

  @IsString()
  donorName: string;

  @IsEmail()
  donorEmail: string;
}

class VerifyDonationPaymentDto {
  @IsString()
  @IsUUID()
  orderId: string;

  @IsString()
  paymentId: string;

  @IsString()
  razorpaySignature: string;
}

@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  /**
   * Create a donation order (Razorpay)
   */
  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create donation order' })
  @ApiResponse({
    status: 201,
    description: 'Donation order created',
    schema: {
      example: {
        orderId: 'order-id',
        amount: 1000,
        currency: 'INR',
      },
    },
  })
  async createDonationOrder(@Body() dto: CreateDonationOrderDto) {
    return this.donationsService.createDonationOrder(dto);
  }

  /**
   * Verify Razorpay payment
   */
  @Post('verify')
  @HttpCode(200)
  @ApiOperation({ summary: 'Verify donation payment' })
  @ApiResponse({
    status: 200,
    description: 'Payment verified successfully',
    schema: {
      example: {
        id: 'donation-id',
        amount: 1000,
        status: 'COMPLETED',
      },
    },
  })
  async verifyDonationPayment(@Body() dto: VerifyDonationPaymentDto) {
    return this.donationsService.verifyDonationPayment(dto);
  }

  /**
   * Get donation history for a student
   */
  @Get('student/:studentId')
  @ApiOperation({ summary: 'Get donation history' })
  @ApiResponse({
    status: 200,
    description: 'Donation history',
    schema: {
      example: [
        {
          id: 'donation-id',
          amount: 1000,
          currency: 'INR',
          status: 'COMPLETED',
          createdAt: '2024-01-01T00:00:00Z',
        },
      ],
    },
  })
  async getDonationHistory(@Param('studentId') studentId: string) {
    return this.donationsService.getDonationHistory(studentId);
  }
}
