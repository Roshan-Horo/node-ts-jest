import app from './app'
import request from 'supertest'

describe("POST /users", () => {

    describe("given a username and password", () => {
      // shoult save the username and password in the database
      // should respond with a 200 status code
      test("should respond with a 200 status code", async () => {
          const response = await request(app).post("/user").send({
              username: "username",
              password: "pass123"
          })
          expect(response.statusCode).toBe(200)
      })
      // should specify json in the content type header
      test("should specify json in the content type header", async () => {
          const response = await request(app).post("/user").send({
              username: "username",
              password: "pass123"
          })
          expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"))
      })

      // should respond with a json object containg the userId
      test("response with userId", async () => {
          const res = await request(app).post("/user").send({
              username: "username",
              password: "pass123"
          })
          expect(res.body.userId).toBeDefined()
      })
    })

    describe("when the username and password is missing", () => {
       // should respond with a status code of 400
       test("should respond with a status code of 400", async () => {
            const bodyData = [
                {username: "username"},
                {password: "password"},
                {}
            ]
            for(const body of bodyData){

                const res = await request(app).post("/user").send({
                    username: "username"
                })
                expect(res.statusCode).toBe(400)
            }
       

       })
    })
})