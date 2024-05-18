import { NextFunction,  Request,  Response } from "express";
import { validatorToken } from "../utils/jwt";
import { RequestExt } from "../utils/typesGlobal";

export const AuthVerify = async( req: Request, res: Response, next: NextFunction) => {
    try{
       let _req = req as RequestExt
       const {token} = _req.headers
       if(!token) return res.status(401).json('No authentication')
       await validatorToken(_req, res , next)
       return
    } catch (error) {
        return res.status(401).json('No authentication')
    }
}