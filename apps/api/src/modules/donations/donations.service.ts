import { Injectable } from '@nestjs/common';
import { prisma } from '@wesafe/database';

/**
 * Donations Service
 * Handles donation creation and Razorpay payment verification
 * TODO: Implement Razorpay integration with actual payment processing
 */
@Injectable()
export class DonationsService {
  /**
   * Create a donation order (Razorpay)
   * Returns order details that should be used to initialize Razorpay payment
   */
  async createDonationOrder(data: {
    amount: number;
    currency?: string;
    studentId?: string;
    donorName: string;
    donorEmail: string;
  }) {
    // TODO: Call Razorpay API to create order
    // For now, create a placeholder donation record
    const donation = await prisma.donation.create({
      data: {
        amount: data.amount,
        currency: data.currency || 'INR',
        status: 'PENDING',
        donorName: data.donorName,
        donorEmail: data.donorEmail,
        studentId: data.studentId,
      },
    });

    // TODO: Return Razorpay order details
    return {
      orderId: donation.id,
      amount: donation.amount,
      currency: donation.currency,
      // razorpayOrderId: order.id, // From Razorpay API
    };
  }

  /**
   * Verify Razorpay payment
   * Called after successful payment from client
   */
  async verifyDonationPayment(data: {
    orderId: string;
    paymentId: string;
    razorpaySignature: string;
  }) {
    // TODO: Verify Razorpay signature using HMAC SHA256
    // const isValidSignature = this.verifyRazorpaySignature(data);
    // if (!isValidSignature) {
    //   throw new BadRequestException('Invalid payment signature');
    // }

    // Update donation status to completed
    const donation = await prisma.donation.update({
      where: { id: data.orderId },
      data: {
        status: 'COMPLETED',
        paymentId: data.paymentId,
      },
    });

    return donation;
  }

  /**
   * Get donation history for a student
   */
  async getDonationHistory(studentId: string) {
    return prisma.donation.findMany({
      where: { studentId },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * TODO: Implement Razorpay signature verification
   * Uses HMAC SHA256 to verify payment signature
   */
  private verifyRazorpaySignature(data: {
    orderId: string;
    paymentId: string;
    razorpaySignature: string;
  }): boolean {
    // Placeholder for signature verification
    // const crypto = require('crypto');
    // const body = `${data.orderId}|${data.paymentId}`;
    // const generated_signature = crypto
    //   .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    //   .update(body)
    //   .digest('hex');
    // return generated_signature === data.razorpaySignature;
    return true;
  }
}
