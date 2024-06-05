import request from 'supertest'
import app from '../app/app'
import { connectDB } from '../dbConnect/connect'
import mongoose from 'mongoose';

const api = request(app);

beforeAll(async()=>{
    await connectDB()
})

afterAll(async()=>{
    mongoose.connection.close()
})

describe('proyect store routes', () =>{
    
    describe('public routes',()=>{
        
        test('get todos los productos',async()=>{
            const response = await api.get('/api/v1/public/allProducts').send()
            // expect(response.body)
            console.log(response.body);
        })

        test('get productos de un almacen',async()=>{
            const idStore = ''
            const response = await api.get(`/api/v1/public/allProducts/${idStore}`).send()
            expect(response.body).not.toBeNull()
            
        })

        test('get info de un producto',async()=>{
            const idProduct = ''
            const response = await api.get(`/api/v1/public/infoProduct/${idProduct}`).send()
            expect(response.body).not.toBeNull()
        })

        test('get info de un almacen',async()=>{
            const idStore = ''
            const response = await api.get(`/api/v1/public/infoStore/${idStore}`).send()
            expect(response.body).not.toBeNull()
        })

        test('get de todos los almacenes',async()=>{
            const response = await api.get(`/api/v1/public/allstores`).send()
            expect(response.body).not.toBeNull()
        })

        test('get /allNameStores',async()=>{
            const response = await api.get(`/api/v1/public/allNameStores`).send()
            expect(response.body).not.toBeNull()
        })
    })
    describe('user routes',()=>{
        let token = ''
        beforeEach(async()=>{
            const response = await request(app).post('/api/v1/auth/login').send({
                email: 'tempest@gmail.com',
                password: '12345678'
            })
            token = response.body
        })
        test('get /allusers',async()=>{
            const response = await api.get('/api/v1/user/allusers').set('token',token).send()
            expect(response.body).not.toBeNull()
        })

        test('get /allclients',async()=>{
            const response = await api.get(`/api/v1/user/allclients`).set('token',token).send()
            expect(response.body).not.toBeNull()
            
        })

        test('post /store',async()=>{
            const response = await api.post(`/api/v1/user/store`).set('token',token).send({
                
            })
            expect(response.body).not.toBeNull()
        })
    })
})

// /api/v1/public/allProducts
// let token
//     describe('login',async()=>{
//         const response = await request(app).post('/api/v1/auth/login').send({
            
//         }) 
//     })
