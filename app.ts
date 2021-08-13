import express,{ Application, Request, Response, } from 'express'
import { validatePassword } from './password'


export default function(database: any /* here, pass the default function connectDB() */){
    
const app: Application = express()
app.use(express.json())

app.post('/user', (req: Request, res: Response,) => {
     const {username, password} = req.body

     if(!username || !password){
         res.status(400)
     }
     let validate = false
     validate = validatePassword(password)

     try {
         
     if(validate){
         // save to the db and return with userId
         database.createUser(username, password)
         res.status(200).send({"status": "ok", "userId": "47599345"})
     }else{
         res.status(400).send({"status": "false"})
     }

     } catch (error) {
        console.log('Error: ', error)    
     }
})

return  app
}

