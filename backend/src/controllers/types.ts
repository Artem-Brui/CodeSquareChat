import { Locals, Request, response, Response } from "express";
import { ParsedQs } from "qs";

export type RequestCallback = (
  req: Request<{}, any, any, ParsedQs, Record<string, any>>,
  res: Response<{}, Locals>
) => Promise<any>;

export type UserType = {
  _id?: string;
  userName: string;
  displayName: string;
  email: string;
  password: string;
  birthDate: string;
  isAdult: boolean;
  isAcceptRules: boolean;
  creatingDate: string;
  updatingDate: string;
};

export type RoomParams = {
  _id?: string;
  id: string;
}