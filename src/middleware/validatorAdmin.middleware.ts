import { NextFunction, Request, Response } from "express";
import { ResponseUser } from "../interfaces/user.interface";
import userModel from "../model/user.model";
import { RequestExt } from "../utils/typesGlobal";

export const validatorAdmin = async(req: Request, res: Response, next: NextFunction) => {
    try {
        let _req = req as RequestExt
        const id = _req.user
        const UseFound: ResponseUser = await userModel.findById(id) as any
        if(!UseFound) return res.status(401).json({message: 'Not authorized'})
        next()
        return
    } catch (error) {
        res.status(500).json(error)
        return 
    }
}