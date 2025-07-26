import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Quizzes.css";

// ✅ Grouped topics
const topicSections = [
  {
    title: "🖥️ Programming",
    topics: [
      { name: "Python", emoji: "🐍", path: "python" },
      { name: "HTML", emoji: "🌐", path: "html" },
      { name: "CSS", emoji: "🎨", path: "css" },
      { name: "JavaScript", emoji: "📜", path: "javascript" },
      { name: "Java", emoji: "☕", path: "java" },
      { name: "C", emoji: "🔣", path: "c" },
      { name: "C++", emoji: "➕", path: "cpp" },
      { name: "Data Structures", emoji: "🗂️", path: "data_structures" }, // NEW
    ],
  },
  {
    title: "📐 Mathematics",
    topics: [
      { name: "Arithmetic", emoji: "➗", path: "math_arithmetic" },
      { name: "Algebra", emoji: "📐", path: "math_algebra" },
      { name: "Geometry", emoji: "📏", path: "math_geometry" },
      { name: "Trigonometry", emoji: "📊", path: "math_trigonometry" },
      { name: "Probability", emoji: "🎲", path: "math_probability" },
      { name: "Calculus", emoji: "📈", path: "math_calculus" },
      { name: "Numbers", emoji: "🔢", path: "math_numbers" },
      { name: "Matrices", emoji: "🧮", path: "math_matrices" },
    ],
  },
  {
    title: "🧠 Logical & Aptitude",
    topics: [
      { name: "Logical Reasoning", emoji: "🧠", path: "logical_reasoning" },
      { name: "Quantitative Aptitude", emoji: "📘", path: "quantitative_aptitude" },
      { name: "Verbal Reasoning", emoji: "🗣️", path: "verbal_reasoning" }, // NEW
      { name: "Puzzles", emoji: "🧩", path: "puzzles" }, // NEW
    ],
  },
  {
    title: "📘 Language Skills",
    topics: [
      { name: "English Grammar", emoji: "📚", path: "english_grammar" },
      { name: "Vocabulary", emoji: "📝", path: "vocabulary" }, // NEW
      { name: "Comprehension", emoji: "📖", path: "comprehension" }, // NEW
      { name: "Spoken English", emoji: "🎤", path: "spoken_english" }, // NEW
    ],
  },
];

const Quizzes = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const navigate = useNavigate();

  const handleDifficultySelect = (difficulty) => {
    if (selectedTopic) {
      navigate(`/quiz/${selectedTopic}/${difficulty}`);
    }
  };

  return (
    <div className="home-container">
      <h2>📚 Choose a Quiz Topic</h2>

      {!selectedTopic ? (
        <>
          {topicSections.map((section) => (
            <div key={section.title}>
              <h3 style={{ marginTop: "30px" }}>{section.title}</h3>
              <div className="quiz-grid">
                {section.topics.map((topic) => (
                  <button
                    key={topic.path}
                    className="quiz-card"
                    onClick={() => setSelectedTopic(topic.path)}
                  >
                    <span className="emoji">{topic.emoji}</span>
                    <span>{topic.name}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>
          <h3>
            Choose Difficulty Level for {selectedTopic.replaceAll("_", " ").toUpperCase()}
          </h3>
          <div className="quiz-grid">
            {["easy", "medium", "hard"].map((level) => (
              <button
                key={level}
                className="quiz-card"
                onClick={() => handleDifficultySelect(level)}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
          <button
            className="next-btn"
            onClick={() => setSelectedTopic(null)}
            style={{ marginTop: "20px" }}
          >
            🔙 Back to Topics
          </button>
        </div>
      )}
    </div>
  );
};

export default Quizzes;
