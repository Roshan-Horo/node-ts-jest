import express,{ Application, Request, Response, } from 'express'
import { validatePassword } from './password'

const app: Application = express()
app.use(express.json())


app.post('/user', (req: Request, res: Response,) => {
     const {username, password} = req.body

     if(!username || !password){
         res.status(400)
     }
     let validate = false
     validate = validatePassword(password)

     if(validate){
         res.status(200).send({"status": "ok", "userId": "47599345"})
     }else{
         res.status(400).send({"status": "false"})
     }
})

export default app