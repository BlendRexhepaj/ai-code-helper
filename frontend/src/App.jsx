import { useState } from 'react';
import './App.css';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    // Këtu simulojmë një përgjigje derisa të lidhim Inteligjencën Artificiale në javët në vazhdim
    setAnswer("Kjo është një përgjigje testuese nga AI Code Helper. Për momentin ndërfaqja (UI) funksionon në mënyrë perfekte! Pyetja juaj ishte: " + question);
    setQuestion('');
  };

  return (
    <div className="app-container">
      {/* 1. Navbar */}
      <nav className="navbar">
        <div className="logo">🤖 AI Code Helper</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Rreth Projektit</a></li>
        </ul>
      </nav>

      {/* 2. Home Page */}
      <main className="main-content">
        <header className="hero">
          <h1>Si mund t'ju ndihmoj me kodin sot?</h1>
          <p>Shkruani pyetjen ose kodin tuaj më poshtë dhe merrni asistencë në kohë reale.</p>
        </header>

        {/* 3. Box për përgjigje (Shfaqet vetëm kur ka përgjigje) */}
        <div className="chat-container">
          {answer && (
            <div className="answer-box">
              <strong>Përgjigjja nga AI:</strong>
              <p>{answer}</p>
            </div>
          )}
        </div>

        {/* 4. Input për pyetje */}
        <form className="input-form" onSubmit={handleSubmit}>
          <textarea
            className="question-input"
            placeholder="Shkruaj pyetjen tënde këtu..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows="4"
          ></textarea>
          <button type="submit" className="submit-btn">Dërgo Pyetjen</button>
        </form>
      </main>
    </div>
  );
}

export default App;