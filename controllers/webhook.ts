import { Request, Response } from "express";

const eventListener = (req: Request, res: Response) => {
  const payload = req.body;

  console.log(payload.event.data.metadata);

  res.sendStatus(200);
};

export { eventListener };
