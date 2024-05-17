import { NextFunction, Request, Response } from "express"

export const validateCourseSchema = (schema: any) => (req: Request, res: Response, next: NextFunction) =>{
    try {
        schema.parse(req.body)
        next()
        return
    } catch (error: any) {
        return res.status(400).json( error.errors.map((error: any) => error.message) )
    }
}

