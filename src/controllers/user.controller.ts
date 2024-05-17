import { Request, Response } from "express";
import { getAllClients, getAllUsers, postNewStore } from "../services/user/basicRequest/basicRequests";
import { responseGlobal } from "../utils/typesGlobal";

// BASIC REQUEST
// GETS

export const AllUsers = async( _ : Request , res:Response) => {
    const response: responseGlobal = await getAllUsers()
    res.status(response.status).json(response.data)
}

export const AllClients = async( _ : Request , res:Response) => {
    const response: responseGlobal = await getAllClients()
    res.status(response.status).json(response.data)
}

// POSTS

export const NewProduct = async(req : Request , res:Response) => {
    const Data = req.body
    const response: responseGlobal = await postNewStore(Data)
    res.status(response.status).json(response.data)
}