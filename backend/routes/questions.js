import express from "express"
import { Question } from "../models/question.js"
const router = express.Router()

router.get("/", (_req, res) => {
    Question.find().then(questions => res.json(questions))
        .catch(err => res.status(404).json(err))

})


router.post("/", (req, res) => {
    const newQuestion = new Question({
        name: req.body.name,
        content: req.body.content,
        link: req.body.link
    })
    newQuestion.save()
        .then(question => res.json(question))
        .catch(err => res.status(422).json(err))

})

router.patch("/:question_id", (req, res) => {
    const _id = req.params.question_id
    const isAnswered = req.body.isAnswered
    console.log(req)
    Question.findOneAndUpdate({ _id: _id }, { isAnswered: isAnswered }, {
        new: true
    })
        .then(question => res.json(question))
        .catch(err => res.status(404).json(err))
})


router.delete("/:question_id", (req, res) => {
    const id = req.params.question_id
    // res.json(id) //reason for this delete当FE发过来请求的时候起码能在response里面找到这个ID 用这个ID去delete
    //从db delete
    Question.findOneAndDelete({ _id: id })
        .then(question => res.json({ _id: question._id }))
        .catch(err => res.status(404).json(err))  //not finding ID 404
})



// const data = fetch("")
// //data manipulation after fetching data from database

// module.exports = router  或者下面那个
export const questions = router