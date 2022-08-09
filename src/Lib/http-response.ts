import { Response } from "express";

export interface IBody {
    statusCode: number;
    message: string;
    data: string | number | Record<string,any>[] | Record<string,any>;
    success : boolean
}

const response = (res: Response, body: IBody) => {
    return res.status(body.statusCode).json(body);
};

export default response;
