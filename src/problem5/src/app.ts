import express from 'express';
import cors from 'cors';
import postRoutes from './routes/post.routes';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server ready at: http://localhost:${PORT}`);
});