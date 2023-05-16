const request = require('supertest');
const express = require('express')
const app = express(); // Import your Express app
const InnovationsSup = require('../models/supportInnovationModel'); // Import the Innovations model
const { getSupportInnovation } = require('../controllers/supportInnovationController.js');
app.get('/user/supportInnovation',getSupportInnovation );




//get all innovation data test case
describe('GET /user/supportInnovation', () => {
  it('should return all innovation supports', async () => {
   // Mock the response from the Innovations.find() function
    const mockedInnovationsup = [
      { suppotorName : 'Innovation 1' },
      { suppotorName : 'Innovation 2' }
    ];
    InnovationsSup.find = jest.fn().mockResolvedValue(mockedInnovationsup);

    // Make a request to the endpoint
    const response = await request(app).get('/user/supportInnovation');

    // Check the response
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockedInnovationsup);
  });
});

