const request = require('supertest');
const express = require('express');

// Dummy app for testing if we don't want to start the whole server with DB
const app = express();
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

describe('Basic API Health Check', () => {
    it('should return 200 OK for /health', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('status', 'ok');
    });
});
