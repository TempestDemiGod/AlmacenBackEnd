import { Router } from "express";
import {readdirSync} from 'fs'

const PATH_ROUTER = `${__dirname}`

const router = Router()

const clearName = (pathName: string , filter: string) => {
    const file = pathName.split(filter).shift()
    return file
}

readdirSync(PATH_ROUTER).filter( pathName => {
    
    const cleanName = clearName(pathName, '.ts')
    const routeName = clearName(pathName, '.')
    if(cleanName !== 'main.route'){
        import(`./${cleanName}`).then( moduleRouter => {
            router.use(`/${routeName}` , moduleRouter.router)
        })
        
    }
    
})

export default router