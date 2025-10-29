import express from 'express';
import { PrismaClient } from '@prisma/client';

export const app = express();
const prisma = new PrismaClient();
app.use(express.json());


app.get('/api', (req, res) => {
  res.send('Hello, World!');
});