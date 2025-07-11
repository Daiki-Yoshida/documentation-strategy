// Example test file for demonstration
import request from 'supertest';
import app from '../src/app';

describe('Authentication', () => {
  it('should login with valid credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'Test123!'
      });
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('access_token');
  });
});