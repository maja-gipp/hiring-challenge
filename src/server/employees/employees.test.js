import express from 'express';
import request from 'supertest';
import {employees} from './employees.db';
import employeeRoutes from './employees.routes';

const server = express();
employeeRoutes(server);

describe('Employee Controller Tests', () => {
  describe('GET:', () => {
    it('should get a list of Oliasoft employees', async () => {
      const result = await request(server).get('/api/employees');
      expect(result.statusCode).toEqual(200);
      expect(result.body).toEqual(employees);
    });
  })
});