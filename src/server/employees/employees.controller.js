import {employees} from './employees.db';

// this is our global "db"
let oliasoftEmployees = employees.slice();

export default class EmployeesController {
  constructor() {

  };

  getEmployees = (req, res) => {
    res.json(oliasoftEmployees);
  };

  addEmployee = (req, res) => {
    // TODO: Add to employee
  };
};