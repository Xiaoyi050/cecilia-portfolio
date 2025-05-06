'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  // Two truths and a lie
  const facts = [
    { text: "I have run a marathon before.", isLie: false },
    { text: "I can speak five languages fluently.", isLie: true },
    { text: "My favorite food is sushi 🍣.", isLie: false }
  ];

  const [bgColor, setBgColor] = useState('#ffffff');
  const [score, setScore] = useState(0);

  const handleGuess = (isLie) => {
    console.log('button clicked, isLie=', isLie);
    if (isLie) {
      setBgColor('#ffc0cb');
      setScore(s => s + 1);
    } else {
      setBgColor('#cccccc');
    }
  };

  return (
    <main
      style={{
        backgroundColor: bgColor,
        minHeight: '100vh',
        padding: '2rem',
        transition: 'background-color 0.5s ease'
      }}
    >
      {/* Top link back to Home */}
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/">
          <button style={{ padding: '10px 20px', fontSize: '14px', cursor: 'pointer' }}>
            Back to Home
          </button>
        </Link>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        {/* Left: About Text + Game */}
        <div style={{ flex: 1, minWidth: '300px', padding: '2rem' }}>
          <h1>About Me</h1>
          <p>Hello, I'm Cecilia.</p>
          <p>Welcome to my first portfolio, developed using GitHub and React.</p>
          <p>It's currently under construction — thank you so much for visiting!</p>

          {/* Game Section */}
          <h2 style={{ marginTop: '3rem' }}>Two Truths and a Lie</h2>
          <p>Can you spot the lie?</p>

          {facts.map((fact, index) => (
            <button
              key={index}
              onClick={() => handleGuess(fact.isLie)}
              style={{
                display: 'block',
                width: '100%',
                margin: '10px 0',
                padding: '12px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ccc',
                borderRadius: '8px',
                textAlign: 'left'
              }}
            >
              {fact.text}
            </button>
          ))}

          {/* Score */}
          <p style={{ marginTop: '20px', fontSize: '18px' }}>
            Correct Guesses: {score}
          </p>
        </div>

        {/* Right: Your Picture */}
        <div style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
          <img
            src="/me.jpg"
            alt="Photo of Cecilia"
            width={300}
            height={300}
            style={{ borderRadius: '8px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </main>
  );
}
