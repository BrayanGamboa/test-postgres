const app = require('../index')
const request = require('supertest');

describe('GET actor', () => {

    test("Retorna Hello World", async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello World!');
        expect()
    });

    test("Consulta a los actores registrados", async () => {
        const response = await request(app).get('/actores')
        expect(response.statusCode).toBe(200)
    })

    test("Consultar a los actores por el id", async ()=>{
        const response = await request(app).get('/actor/:id')
        expect(response.statusCode).toBe(200)
    })
})

describe('GET escuelas', () => {

    test("Retorna todas la escuelas", async () => {
        const response = await request(app).get('/instituciones-educativas')
        expect(response.statusCode).toBe(200)
    });

})