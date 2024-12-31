import { NextFunction, Request, Response } from "express";

const notfoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(404).send(`Route ${req.url} Not Found! `);
};

export default notfoundMiddleware;
