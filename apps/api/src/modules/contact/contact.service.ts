import { Injectable } from '@nestjs/common';
import { prisma } from '@wesafe/database';

@Injectable()
export class ContactService {
  /**
   * Create a contact inquiry
   */
  async createContactInquiry(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
    phone?: string;
  }) {
    return prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        phone: data.phone,
      },
    });
  }
}
