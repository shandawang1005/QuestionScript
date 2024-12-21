//这个文件之所以是单数是因为这个model里面只看最小单元单位，一个问题


import mongoose from "mongoose";


const Schema = mongoose.Schema

const QuestionSchema = Schema({
    name: {
        type: String,
        required: true

    },//ID Mongoose 会直接给你
    content: {
        type: String,
        required: true
    },
    isAnswered: {
        type: Boolean,
        default: false
    },
    link: {
        type: String,

    }
}, { timestamp: true })  //第一个{}是基础内容，第二个{}是额外增加的内容

export const Question = mongoose.model("Question", QuestionSchema)

//把Schema从Schema转化可实用模型，这样才可以在CRUD时读取，这个是MongoDB