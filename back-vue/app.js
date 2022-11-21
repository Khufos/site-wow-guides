import express from 'express'
const app = express()
app.use(express.json())

import { AllUser, IdUser, CreateUser } from './database.js'

app.get("/user",async (req, res)=>{
    const users = await AllUser()
    res.send(users)
})

app.get("/user/:id", async (req,res)=>{
    const id = req.params.id
    const UserId = await IdUser(id)
    res.send(UserId)
})

app.post("/CreateUser", async(req, res)=>{
    const {nome,raca,classe,talents,modalidade,build,damage } = req.body
    const create = await CreateUser(nome,raca,classe,talents,modalidade,build,damage)
    res.send(create)

})


app.use((err,req, res, next)=>{
    console.error(err.stack)
    res.status(500).send("Url está quebrada!!");
})


app.listen(8080,()=>{
    console.log('Server is running on port  8080')

})