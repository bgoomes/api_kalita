import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "API Kalita Fotografia",
      version: "1.0.0",
      description: "API para gerenciamento de solicitações de serviço fotográfico.",
      contact: {
        name: "Kalita Fotografia",
        email: "contato@kalitafotografia.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local",
      },
    ],
  },
  apis: ["./src/routes/v1/*.ts"], 
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
