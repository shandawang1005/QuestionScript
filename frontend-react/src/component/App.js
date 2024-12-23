import React, { useState, useEffect } from "react";

export const App = () => {

    const [state, setState] = useState({ questions: [] })
    useEffect(() => {
        const fetchQuestion = async () => {
            const response = await fetch("/api/questions")
            const data = await response.json()
            setState({ questions: data })
        }
        fetchQuestion()
    }, [])
    const submitQuestion = async (question) => {
        const response = await fetch("/api/questions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(question)

        })
        if (!response.ok) throw new Error("Failed to submit question")
        const newQuestion = await response.json()
        setState((preState) => ({
            ...preState,
            questions: [...preState, newQuestion]
        }))
    }
    const deleteQuestion = async (_id) => {
        const response = await fetch(`/api/questions/${_id}`, {
            method: "DELETE",
        })
        if (!response.ok) throw new Error("Failed to delete question")

        setState((preState) => ({
            ...preState,
            questions: preState.questions.filter((question) => question._id !== _id),
        }))
    }



    return (<div>
        <h1>
            Questions
        </h1>
        <ul>
            {state.questions.map((question) => (
                <li key={question._id}>
                    {question.name}{" "}
                    <button onClick={() => deleteQuestion(question._id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>)
}