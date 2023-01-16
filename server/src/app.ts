import cors from 'cors';
import express, { json } from 'express';
import morgan from 'morgan';

const app = express();

// middleware
app.use(cors());
app.use(json());
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is healthy', url: req.headers.host });
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello World', url: req.headers.host });
});

export default app;
