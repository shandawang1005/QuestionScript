import express from "express"
import { questions } from "./routes/questions.js"



const app = express();   //提取node module里面的express

app.use(express.json())


app.use("/api/questions", questions)  //extension前缀

//这里如果没有用use， 直接get post delete edit 也可以
const port = process.env.PORT || 5001  //看port 是不是已经被预设了， 没有的话local的5001

app.listen(port, () => console.log(`Server is live on port ${port}`))




