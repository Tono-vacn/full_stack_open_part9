import express from 'express';
const app = express();
import { calculateBmiOut } from './bmiCalculator';

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  try {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
    if (isNaN(height) || isNaN(weight)) {
      throw new Error('malformatted parameters');
    }
    const bmi = calculateBmiOut(height, weight);
    res.json({
      weight,
      height,
      bmi
    });
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).json({ error: e.message });
    } else {
      res.status(400).json({ error: 'malformatted parameters' });
    }
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}`);
});