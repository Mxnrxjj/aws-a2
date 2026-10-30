'use strict';

const request = require('supertest');
const app = require('../app');

describe('GET /health', () => {
  test('returns ok and a version', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });
});

describe('GET /calc/:operation', () => {
  test('adds via the API', async () => {
    const response = await request(app).get('/calc/add?a=4&b=6');
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(10);
  });

  test('rejects an unknown operation', async () => {
    const response = await request(app).get('/calc/modulo?a=4&b=6');
    expect(response.status).toBe(400);
  });

  test('rejects division by zero', async () => {
    const response = await request(app).get('/calc/divide?a=4&b=0');
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Cannot divide by zero');
  });
});