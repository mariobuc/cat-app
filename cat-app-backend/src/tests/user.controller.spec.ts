import request from 'supertest';
import app from '../src/app';
import mongoose from 'mongoose';
import { connectDB } from '../src/config/db';

beforeAll(async () => {
  process.env.MONGO_URI = 'mongodb://localhost:27017/testdb';
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('User Registration and Login', () => {
  const testUser = { username: 'test', password: '123456' };

  it('should register a new user', async () => {
    const res = await request(app).post('/api/users/register').send(testUser);
    expect(res.statusCode).toEqual(201);
    expect(res.body.username).toEqual(testUser.username);
  });

  it('should login the user', async () => {
    const res = await request(app)
      .get('/api/users/login')
      .query(testUser);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});
