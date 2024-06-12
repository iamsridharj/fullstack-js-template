import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'GYG Backend API',
      version: '1.0.0',
      description: 'API for managing activities - creating, retrieving, and filtering activities.',
    },
    servers: [
      {
        url: 'http://localhost:8000/api',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Activity: {
          type: 'object',
          required: ['title', 'price', 'currency', 'supplier_name', 'location'],
          properties: {
            id: {
              type: 'integer',
              example: 1,
            },
            title: {
              type: 'string',
              example: 'Mountain Hiking Adventure',
            },
            price: {
              type: 'number',
              format: 'float',
              example: 150.0,
            },
            currency: {
              type: 'string',
              example: 'USD',
            },
            rating: {
              type: 'number',
              format: 'float',
              example: 4.8,
            },
            special_offer: {
              type: 'boolean',
              example: true,
            },
            supplier_name: {
              type: 'string',
              example: 'Adventure Co.',
            },
            location: {
              type: 'string',
              example: 'Rocky Mountains',
            },
          },
        },
        HealthCheck: {
          type: 'object',
        }
      },
    },
  },
  apis: ['./src/routes/**/*.ts'],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

export default swaggerSpec;
