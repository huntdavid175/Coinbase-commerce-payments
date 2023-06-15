import express, { Express } from "express";
import "dotenv/config";

import ChargeRoutes from "./routes/charge";
import WebhookRoute from "./routes/webook";

const app: Express = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/payment", ChargeRoutes);

app.use("/webhook", WebhookRoute);

app.listen(port, () => {
  console.log("Server running");
});
