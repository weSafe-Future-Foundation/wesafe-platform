import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IsEmail, IsString, IsOptional, MinLength, MaxLength } from 'class-validator';
import { ContactService } from './contact.service';

class CreateContactDto {
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(5)
  @MaxLength(200)
  subject: string;

  @IsString()
  @MinLength(10)
  message: string;

  @IsOptional()
  phone?: string;
}

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  /**
   * Submit contact form
   */
  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Submit contact inquiry' })
  @ApiResponse({
    status: 201,
    description: 'Contact inquiry submitted successfully',
    schema: {
      example: {
        id: 'contact-id',
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Inquiry',
        message: 'Contact message',
        createdAt: '2024-01-01T00:00:00Z',
      },
    },
  })
  async submitContact(@Body() dto: CreateContactDto) {
    return this.contactService.createContactInquiry(dto);
  }
}
