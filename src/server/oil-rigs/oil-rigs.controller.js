import { oilRigs } from "./oil-rigs.db";

// this is our global "db"
let oilRigsList = oilRigs.slice();

export default class EmployeesController {
  constructor() {}

  getOilRigs = (req, res) => {
    res.json(oilRigsList);
  };

  addOilRig = (req, res) => {
    // TODO: Add to employee
  };

  getOilRig = (req, res) => {
    console.log(req.params.id);
    const result = oilRigsList.find((oilRig) => oilRig.id === req.params.id);
    //res.send("oil rig will be there" + req.params.id);
    res.json(result);
  };
}
