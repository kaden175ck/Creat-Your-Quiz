import { useState, useContext } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Contexts";

export const Quiz =()=>{
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const { score, setScore, setGameState } = useContext(QuizContext);

    const handleNextQuestion = () => {
        if (optionChosen === Questions[currentQuestion].answer) {
            setScore( score + 1);
        }
        // alert(score);
        setCurrentQuestion(currentQuestion + 1);
    }

    const finishQuiz = () => {
        if (optionChosen === Questions[currentQuestion].answer) {
            setScore( score + 1);
        }
        setGameState("endScreen");
    }

    return(
        <div className="Quiz"> 
            <h1>
                {Questions[currentQuestion].prompt}
            </h1>
            <div className="options">
                <button onClick={()=>{setOptionChosen("optionA")}}>{Questions[currentQuestion].optionA}</button>
                <button onClick={()=>{setOptionChosen("optionB")}}>{Questions[currentQuestion].optionB}</button>
                <button onClick={()=>{setOptionChosen("optionC")}}>{Questions[currentQuestion].optionC}</button>
                <button onClick={()=>{setOptionChosen("optionD")}}>{Questions[currentQuestion].optionD}</button>   
            </div>

            {currentQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                <button onClick={handleNextQuestion}>Next Question</button>
            )}
        </div>
    )
}