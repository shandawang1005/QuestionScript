import express from "express"




const app = express();   //提取node module里面的express

const port = process.env.PORT || 5001  //看port 是不是已经被预设了， 没有的话local的5001

app.listen(port, () => console.log(`Server is live on port ${port}`))




