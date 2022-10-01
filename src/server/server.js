import express from "express";
import cors from "cors";
import sitesRoutes from "./sites/sites.routes";
import oilRigsRoutes from "./oil-rigs/oil-rigs.routes";

const server = express();
const port = process.env.port || 3000;
const router = express.Router();

server.use(cors());

// Wire up routes
server.get("/", (req, res) => {
  res.send("Oliasoft Hiring Test Server says: Make some magic");
});
server.get("/zupa", (req, res) => {
  res.send("Oliasoft Hiring Test Server says: zupaupa");
});
sitesRoutes(server);
oilRigsRoutes(server);

server.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
