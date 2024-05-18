import { NextFunction, Request, Response } from "express";
import { ResponseUser } from "../interfaces/user.interface";
import { RequestExt } from "../utils/typesGlobal";
import clientModel from "../model/client.model";

export const validatorClient = async(req: Request, res: Response, next: NextFunction) => {
    try {
        let _req = req as RequestExt
        const id = _req.user
        const ClientFound: ResponseUser = await clientModel.findById(id) as any
        if(!ClientFound) return res.status(401).json({message: 'Not authorized'})
        next()
        return
    } catch (error) {
        res.status(500).json(error)
        return 
    }
}