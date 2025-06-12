import request from 'supertest';
import app from '../src/app';

describe('CatsController', () => {
  it('GET /breeds should return 200', async () => {
    const res = await request(app).get('/breeds');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
