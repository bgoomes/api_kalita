import express from 'express';
import { prisma } from './db/prisma'

export const app = express();

app.use(express.json());
