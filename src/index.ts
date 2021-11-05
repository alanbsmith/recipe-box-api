import dotenv from "dotenv";
import { PrismaClient } from '@prisma/client';
import express from 'express';

dotenv.config();

const port = process.env.PORT;

const prisma = new PrismaClient();
const app = express();

app.get('/recipes', async (req, res) => {
  const posts = await prisma.recipe.findMany();
  res.json(posts)
});

app.listen(port, () => (
  console.log(`Server started at http://localhost:${port}.`)
));
