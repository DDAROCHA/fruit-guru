import React, { useState } from 'react';
import { askFruitGuru } from '../services/backend';
import { Spinner } from '../Components/Spinner/Spinner';
import { Input } from '../Components/Input/Input';
import DOMPurify from 'dompurify';
import './Home.css';

export function Home() {
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async question => {
    if (!question.trim()) {
      alert('Please enter a question.');
      return;
    }

    setLoading(true);
    setAnswer('');

    try {
      const result = await askFruitGuru(question);

      setAnswer(result); // 👈 ya viene HTML listo
    } catch (err) {
      console.error('Error calling API:', err.message);
      setAnswer('There was an error getting the response');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page1-container">
      {/* Frutas animadas de fondo */}
      <div className="fruit">🍎</div>
      <div className="fruit">🍌</div>
      <div className="fruit">🍇</div>
      <div className="fruit">🍊</div>
      <div className="fruit">🍓</div>
      <div className="fruit">🍍</div>
      <div className="fruit">🥝</div>
      <div className="fruit">🍑</div>
      <div className="fruit">🍉</div>
      <div className="fruit">🍒</div>
      <div className="fruit">🍋</div>
      <div className="fruit">🍐</div>
      <div className="fruit">🍈</div>
      <div className="fruit">🥭</div>
      <div className="fruit">🍏</div>

      <h4>Ask me anything about fruits</h4>

      {/* Input para la pregunta */}
      <Input onSubmit={handleAsk} />

      {/* Recuadro de respuesta */}
      <div className="page1-block">
        {loading ? (
          <Spinner text="Thinking..." />
        ) : (
          <div
            className="page1-line"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(answer),
            }}
          />
        )}
      </div>
    </div>
  );
}
