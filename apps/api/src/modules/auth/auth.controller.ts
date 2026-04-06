import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtGuard } from '@/guards/jwt.guard';

@Controller('auth')
export class AuthController {
  /**
   * Get current authenticated user
   * @returns Current user profile information
   */
  @Get('me')
  @UseGuards(JwtGuard)
  @ApiBearerAuth('jwt')
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiResponse({
    status: 200,
    description: 'Current user profile',
    schema: {
      example: {
        id: 'user-id',
        email: 'user@example.com',
        name: 'User Name',
        roles: ['student'],
      },
    },
  })
  async getCurrentUser() {
    // TODO: Implement to fetch current user from JWT claims
    return {
      id: 'user-id',
      email: 'user@example.com',
      name: 'User Name',
      roles: ['student'],
    };
  }
}
