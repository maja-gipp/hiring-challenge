import express from 'express';
import employeeRoutes from './employees/employees.routes';

const server = express();
const port = process.env.port || 3000;
const router = express.Router();

// Wire up routes
server.get('/', (req, res) => {
  res.send('Oliasoft Hiring Test Server says: Make some magic');
});

employeeRoutes(server);


server.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});