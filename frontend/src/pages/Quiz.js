import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Core Programming Topics
import * as html from "../data/html";
import * as css from "../data/css";
import * as javascript from "../data/javascript";
import * as java from "../data/java";
import * as python from "../data/python";
import * as c from "../data/c";
import * as cpp from "../data/cpp";
import * as data_structures from "../data/data_structures";

// Math Subtopics
import * as math_arithmetic from "../data/math_arithmetic";
import * as math_algebra from "../data/math_algebra";
import * as math_geometry from "../data/math_geometry";
import * as math_trigonometry from "../data/math_trigonometry";
import * as math_probability from "../data/math_probability";
import * as math_calculus from "../data/math_calculus";
import * as math_numbers from "../data/math_numbers";
import * as math_matrices from "../data/math_matrices";

// Logical & Aptitude
import * as logical_reasoning from "../data/logical_reasoning";
import * as quantitative_aptitude from "../data/quantitative_aptitude";
import * as verbal_reasoning from "../data/verbal_reasoning";
import * as puzzles from "../data/puzzles";

// Language Skills
import * as english_grammar from "../data/english_grammar";
import * as spoken_english from "../data/spoken_english";
import * as comprehension from "../data/comprehension";
import * as vocabulary from "../data/vocabulary";

import "./Quiz.css";

// ✅ All topics mapped by key
const topicsMap = {
  html,
  css,
  javascript,
  java,
  python,
  c,
  cpp,
  data_structures,
  math_arithmetic,
  math_algebra,
  math_geometry,
  math_trigonometry,
  math_probability,
  math_calculus,
  math_numbers,
  math_matrices,
  logical_reasoning,
  quantitative_aptitude,
  verbal_reasoning,
  puzzles,
  english_grammar,
  spoken_english,
  comprehension,
  vocabulary,
};

const Quiz = () => {
  const { topic, difficulty } = useParams();
  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    const topicSet = topicsMap[topic];
    if (topicSet && topicSet[difficulty]) {
      setQuestions(topicSet[difficulty]);
    } else {
      setQuestions([]);
    }

    setStep(0);
    setSelected("");
    setShowResult(false);
    setShowAnswer(false);
    setQuizScore(0);
  }, [topic, difficulty]);

  const handleOptionClick = (option) => {
    if (!showAnswer) {
      setSelected(option);
    }
  };

  const handleNext = () => {
    if (!showAnswer) {
      setShowAnswer(true);
      if (selected === questions[step].answer) {
        setQuizScore((prev) => prev + 10);
      }
    } else {
      if (step + 1 < questions.length) {
        setStep(step + 1);
        setSelected("");
        setShowAnswer(false);
      } else {
        // ✅ Save current quiz score directly
        const topicKey = `score_${topic}`;
        const prev = parseInt(localStorage.getItem(topicKey)) || 0;
        const newScore = quizScore;

        // Always ADD score (not max)
        localStorage.setItem(topicKey, prev + newScore);

        // ✅ Recalculate totalCoins from all topics
        let total = 0;
        Object.keys(topicsMap).forEach((t) => {
          const val = parseInt(localStorage.getItem(`score_${t}`));
          total += isNaN(val) ? 0 : val;
        });

        localStorage.setItem("totalCoins", total);
        window.dispatchEvent(new Event("storage")); // notify header

        setScore(total);
        setShowResult(true);
      }
    }
  };

  const handleRestart = () => {
    setStep(0);
    setSelected("");
    setShowAnswer(false);
    setShowResult(false);
    setQuizScore(0);
  };

  if (questions.length === 0) {
    return (
      <div className="quiz-container">
        No quiz found for "<strong>{topic}</strong>" ({difficulty})
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="quiz-container">
        <h2>🎉 Quiz Completed!</h2>
        <p className="score">
          You scored <strong>{quizScore} Coins 🪙</strong> in this quiz.
        </p>
        <p>Total Coins (All Quizzes): <strong>{score}</strong></p>
        <button className="next-btn" onClick={handleRestart}>
          Restart Quiz
        </button>
      </div>
    );
  }

  const isCorrect = selected === questions[step].answer;

  return (
    <div className="quiz-container">
      <h2>
        🧠 {topic.replaceAll("_", " ").toUpperCase()} Quiz (
        {difficulty.toUpperCase()})
      </h2>
      <p>
        <strong>
          Question {step + 1} of {questions.length}
        </strong>
      </p>
      <h2 className="question">{questions[step].question}</h2>

      <div className="options">
        {questions[step].options.map((opt) => {
          let className = "";
          if (showAnswer) {
            if (opt === questions[step].answer) {
              className = "correct";
            } else if (opt === selected) {
              className = "wrong";
            }
          } else {
            className = selected === opt ? "selected" : "";
          }

          return (
            <button
              key={opt}
              className={className}
              onClick={() => handleOptionClick(opt)}
              disabled={showAnswer}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {showAnswer && (
        <div className="feedback">
          {isCorrect ? (
            <p className="correct-text">✅ Correct!</p>
          ) : (
            <p className="wrong-text">
              ❌ Wrong! Correct answer:{" "}
              <strong>{questions[step].answer}</strong>
            </p>
          )}
        </div>
      )}

      <button
        className="next-btn"
        onClick={handleNext}
        disabled={!selected && !showAnswer}
      >
        {showAnswer
          ? step + 1 === questions.length
            ? "Finish Quiz"
            : "Continue"
          : "Submit Answer"}
      </button>
    </div>
  );
};

export default Quiz;
