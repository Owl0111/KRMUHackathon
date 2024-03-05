const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const User = require('../models/User');
describe('User router', () => {
    // Test case for creating a new user
    test('POST /users should create a new user and return 201 status', async () => {
      // Create a mock user object
      const mockUser = {
        username: 'testuser',
        password: 'testpass',
        name: 'Test User',
      };
  
      // Send a post request to the user router with the mock user object
      const response = await api.post('/api/users').send(mockUser);
  
      // Expect the response status to be 201
      expect(response.status).toBe(201);
  
      // Expect the response body to have the same username and name as the mock user
      expect(response.body.username).toBe(mockUser.username);
      expect(response.body.name).toBe(mockUser.name);
  
      // Expect the response body to have a password hash that is not the same as the mock password
      expect(response.body.passwordHash).not.toBe(mockUser.password);
      expect(response.body.passwordHash).toHaveLength(60);
    });}
)