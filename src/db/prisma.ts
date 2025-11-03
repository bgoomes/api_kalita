import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  errorFormat: 'pretty',
});

export async function connectDatabase(): Promise<void> {
  try {
    await prisma.$connect();
    console.log('Conectado ao MongoDB via Prisma');
    
    await healthCheck();
    console.log(' Health check do banco passou');
  } catch (error) {
    console.error('Erro ao conectar com MongoDB:', error);
    throw error;
  }
}

export async function disconnectDatabase(): Promise<void> {
  try {
    await prisma.$disconnect();
    console.log('Conexão com MongoDB fechada');
  } catch (error) {
    console.error('Erro ao desconectar do MongoDB:', error);
    throw error;
  }
}

async function healthCheck(): Promise<boolean> {
  try {
    await prisma.serviceForm.count();
    return true;
  } catch (error) {
    console.error('Health check falhou:', error);
    throw error;
  }
}

export async function databaseHealthCheck(): Promise<boolean> {
  try {
    await healthCheck();
    return true;
  } catch {
    return false;
  }
}

export { prisma };