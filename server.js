const express = require("express")
const cors = require("cors")
const dotenv=require("dotenv")
// const portfolioRoute=require("./routes/portfolioRoute");

//.dotenv config
dotenv.config()
//rest object
const app=express()

//midlewares
app.use(cors({
  origin:[
    "http://localhost:3000",
    "https://resume-sandy-alpha.vercel.app/"
],

  methods:["GET","POST"],
  credentials:true,
}));
app.use(express.json())

//routes
// app.get("/",(req,res)=>{
//   res.send(`<h1>Welcome to my Portfolio API</h1>`)
// })

app.get("/",(req,res)=>{
  res.send(`<h1>Welcome to my Portfolio API</h1>`)
});
app.use("/api/v1/portfolio",require("./routes/portfolioRoute"));


//port
const PORT=process.env.PORT||8080

//listen
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
})