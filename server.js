const express=require('express')
const app=express()
const connectDB=require('./config/connectDB')

app.use(express.json())
connectDB()
app.use('/api/user',require('./routes/user'))
app.use('/api/auth',require('./routes/auth'))


app.listen(5000)