const express= require("express")
const app= express()

app.get("/",(req,res)=>{
    res.send("Hi This is server")
})

app.listen(3000,()=>{
    console.log('listening the port 8000')
})