import { Controller, Post, Get, Patch, Param, Body, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IsEmail, IsString, IsOptional, IsPhoneNumber } from 'class-validator';
import { StudentsService } from './students.service';

class RegisterStudentDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsPhoneNumber()
  phone?: string;

  @IsOptional()
  @IsString()
  region?: string;
}

class UpdateStudentProfileDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsPhoneNumber()
  phone?: string;

  @IsOptional()
  @IsString()
  region?: string;
}

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  /**
   * Register a new student
   */
  @Post('register')
  @HttpCode(201)
  @ApiOperation({ summary: 'Register a new student' })
  @ApiResponse({
    status: 201,
    description: 'Student registered successfully',
    schema: {
      example: {
        id: 'student-id',
        email: 'student@example.com',
        name: 'Student Name',
        createdAt: '2024-01-01T00:00:00Z',
      },
    },
  })
  async registerStudent(@Body() dto: RegisterStudentDto) {
    return this.studentsService.registerStudent(dto);
  }

  /**
   * Get student dashboard
   */
  @Get(':id/dashboard')
  @ApiOperation({ summary: 'Get student dashboard data' })
  @ApiResponse({
    status: 200,
    description: 'Student dashboard',
    schema: {
      example: {
        profile: {
          id: 'student-id',
          email: 'student@example.com',
          name: 'Student Name',
        },
        eventCount: 5,
        certificateCount: 2,
        totalDonations: 1000,
      },
    },
  })
  async getStudentDashboard(@Param('id') studentId: string) {
    return this.studentsService.getStudentDashboard(studentId);
  }

  /**
   * Update student profile
   */
  @Patch(':id/profile')
  @ApiOperation({ summary: 'Update student profile' })
  @ApiResponse({
    status: 200,
    description: 'Profile updated successfully',
  })
  async updateStudentProfile(@Param('id') studentId: string, @Body() dto: UpdateStudentProfileDto) {
    return this.studentsService.updateStudentProfile(studentId, dto);
  }

  /**
   * Get student certificates
   */
  @Get(':id/certificates')
  @ApiOperation({ summary: 'Get student certificates' })
  @ApiResponse({
    status: 200,
    description: 'List of certificates',
    schema: {
      example: [
        {
          id: 'cert-1',
          title: 'Certificate Title',
          issuedAt: '2024-01-01T00:00:00Z',
        },
      ],
    },
  })
  async getStudentCertificates(@Param('id') studentId: string) {
    return this.studentsService.getStudentCertificates(studentId);
  }
}
