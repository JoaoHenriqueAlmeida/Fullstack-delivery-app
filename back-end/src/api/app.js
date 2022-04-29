import express from 'express';
import routes from '../routes/routes';

const app = express();

app.use(express.json);
app.use(routes);

app.get('/coffee', (_req, res) => res.status(418).end());

export default app;
