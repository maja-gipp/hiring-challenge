import EmployeesController from './employees.controller';

export default (server) => {
  const employeesController = new EmployeesController();
  server.get('/api/employees', employeesController.getEmployees);
  server.post('/api/employees', employeesController.addEmployee);
};