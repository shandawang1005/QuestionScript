

const render = () => {
    const state = {
        questions: [{
            _id:1,
            name: "Alice",
            link: "https://aliceportfolio.com",
            content: "我怎样才能让我的网站在移动设备上显示更好？",
            isAnswered: false
        },
        {
            _id:2,
            name: "Bob",
            link: "https://github.com/bob-projects",
            content: "有没有简单的方法来实现用户登录和权限管理？",
            isAnswered: false
        },
        {
            _id:3,
            name: "Charlie",
            link: "https://charliestudios.com",
            content: "如何在 JavaScript 中处理异步请求并且保证代码简洁？",
            isAnswered: false
        },
        {
            _id:4,
            name: "Diana",
            link: "https://diana-designs.com",
            content: "如何在前端优化图片的加载速度？",
            isAnswered: false
        },
        {
            _id:5,
            name: "Eric",
            link: "https://ericwritesblog.com",
            content: "我是否应该使用 CSS 框架（Bootstrap、Tailwind 等），还是自己写原生 CSS 更好？",
            isAnswered: false
        }]
    }


    const App = document.createElement("div")
    App.innerText = "Hello World (now with 100% more JavaScript)"

    const submitQuestion = question => {
        state.questions.push(question)
        generateQuestionList()
    }
    const deleteQuestion = _id => {
        state.questions = state.questions.filter(question => _id != question._id)
        generateQuestionList()
    }


    const QuestionForm = document.createElement("form")

    const h1 = document.createElement("h1")
    h1.innerText = "Ask a Question"


    const name = document.createElement("input")
    name.name = "name"
    name.type = "text"
    name.placeholder = "Name"

    const link = document.createElement("input")
    link.name = "link"
    link.type = "text"
    link.placeholder = "Link"


    const content = document.createElement("textarea")
    content.rows = 3
    content.name = "content"
    content.type = "text"
    content.placeholder = "Ask here..."



    const submit = document.createElement("button")
    submit.type = "submit"
    submit.innerText = "Submit"

    const root = document.getElementById("root")

    QuestionForm.append(h1, name, content, link, submit)

    QuestionForm.addEventListener("submit", (e) => {
        e.preventDefault()
        if (content.value === "") return content.placeholder = "You must Submit a question"
        let data = {
            _id: Math.floor(Math.random() * 1000),
            content: content.value.trim(),
            name: name.value.trim(),
            link: link.value.trim(),
            isAnswered: false

        }
        submitQuestion(data)
        name.value = ""
        content.value = ""
        content.placeholder = "Ask Question..."
        link.value = ""

    })



    const Questions = document.createElement("div")

    const generateQuestionList = () => {
        if (!state.questions.length) return Questions.innerText = "No Questions Yet!"


        Questions.innerHTML = null

        state.questions.reverse().map((question, i) => {

            const formattedQuestion = document.createElement("div")
            formattedQuestion.key = i
            const content = document.createElement("h3") //Content
            content.innerText = question.content
            const name = document.createElement("span")  //asker name
            name.innerText = question.name

            const link = document.createElement("a")
            link.innerText = question.link
            const isAnswered = document.createElement("button")
            isAnswered.innerText = question.isAnswered ? "Answered" : "Mark Answered"
            const deleteButton = document.createElement("button")
            deleteButton.innerText = "Delete"
            deleteButton.onclick = () => { deleteQuestion(question._id) }
            formattedQuestion.append(content, name, link, isAnswered, deleteButton)
            Questions.appendChild(formattedQuestion)
        })

    }


    App.append(QuestionForm, Questions)

    root.append(App)
    generateQuestionList()
}
document.addEventListener("DOMContentLoaded", () => {
    render()
})



