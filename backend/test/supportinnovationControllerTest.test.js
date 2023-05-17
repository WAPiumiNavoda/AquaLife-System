const request = require('supertest');
const express = require('express')
const app = express(); // Import your Express app
const InnovationsSup = require('../models/supportInnovationModel.js'); // Import the Innovations model
const { getSupportInnovation, createSupportInnovation } = require('../controllers/supportInnovationController.js');
app.get('/user/supportInnovation',getSupportInnovation );
app.post('/user/supportInnovation/create',createSupportInnovation)




//get all innovation support data test case
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

//
describe('createSupportInnovation', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should create a new support innovation', async () => {
    const req = {
      body: {
        suppotorName: "John Doe",
        suppotorEmail: "john@example.com",
        supportorPhone: "1234567890",
        price: 100
      }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    const mockSupportInnovationsSave = jest.fn().mockResolvedValueOnce(req.body);
    const mockSupportInnovations = jest.fn().mockReturnValueOnce({
      save: mockSupportInnovationsSave
    });

    jest.mock('../models/supportInnovationModel.js', () => mockSupportInnovations);

    await createSupportInnovation(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(req.body);
    expect(mockSupportInnovationsSave).toHaveBeenCalledTimes(1);
  }, 10000);

  // it('should return an error if any field is missing', async () => {
  //   const req = {
  //     body: {}
  //   };

  //   const res = {
  //     status: jest.fn().mockReturnThis(),
  //     json: jest.fn()
  //   };

  //   await createSupportInnovation(req, res);

  //   expect(res.status).toHaveBeenCalledWith(400);
  //   expect(res.json).toHaveBeenCalledWith({ error: 'Please Fill all the fields' });
  // },40000);
});