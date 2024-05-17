import { sign , verify} from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config/config'
import { NextFunction, Response } from 'express'

export const createToken = (payload: object) => {
    return new Promise((res, rej) => {
        sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: '1d'
            },
            (err, token)=>{
                if(err) rej(err)
                res(token)
            }
        )
    })
}

interface RequestExt extends Request{
    cookies?: any
    user: string
 }



export const validatorToken = async(req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const {token} = req.cookies
        if(!token){
            return res.status(401).json({message: 'token invalido'})
        }

        verify(token, TOKEN_SECRET, (err : any, user: any)=>{
            if(err) return res.status(401).json({message: 'token invalido'})
            req.user = user 
            next()
            return
        })
    } catch (e) {
        return console.log(e)
    }
}
