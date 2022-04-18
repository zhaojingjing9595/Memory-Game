import express from "express";
import cors from "cors";
import "dotenv/config";
import knex from "knex";
import knexConfig from "./data/knexfile.js";
import authRoutes from "./routes/authRoutes.js";

const PORT = process.env.PORT;
const appDB = knex(knexConfig);
const app = new express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to the server!");
});

app.use("/auth", authRoutes);

appDB.migrate
  .latest()
  .then((migration) => {
    console.log("connected to DB", migration);
    app.listen(PORT, () => {
      console.log(`server is listening at port ${PORT}...`);
    });
  })
  .catch((err) => console.log(err));

export { appDB };
