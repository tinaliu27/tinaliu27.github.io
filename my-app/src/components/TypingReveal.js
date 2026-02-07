import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TypingReveal() {
  const navigate = useNavigate();
  const targetText = "Tina and Liu";
  const [typedText, setTypedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [colors, setColors] = useState([]);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Generate random colors for each character
    const newColors = targetText.split('').map(() => ({
      hue: Math.random() * 360,
      saturation: 70 + Math.random() * 30,
      lightness: 50 + Math.random() * 20
    }));
    setColors(newColors);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isComplete) return;
      
      // Ignore special keys
      if (e.key.length > 1 && e.key !== 'Backspace') return;
      
      if (e.key === 'Backspace') {
        setTypedText(prev => prev.slice(0, -1));
      } else {
        const nextChar = targetText[typedText.length];
        if (nextChar && e.key.toLowerCase() === nextChar.toLowerCase()) {
          const newTypedText = typedText + nextChar;
          setTypedText(newTypedText);
          
          if (newTypedText === targetText) {
            setIsComplete(true);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [typedText, isComplete, targetText]);

  const goToHome = () => {
    navigate('/home');
  };

  const handleSkip = () => {
    setTypedText(targetText);
    setIsComplete(true);
  };

  const handleHint = () => {
    setShowHint(true);
    setTimeout(() => setShowHint(false), 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Main typing area */}
      <div className="text-center">
        <div className="text-8xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
          {targetText.split('').map((char, index) => {
            const isTyped = index < typedText.length;
            const color = colors[index] || { hue: 0, saturation: 0, lightness: 50 };
            
            return (
              <span
                key={index}
                className="inline-block transition-all duration-300"
                style={{
                  color: isTyped 
                    ? `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`
                    : 'transparent',
                  textShadow: isTyped 
                    ? `0 0 20px hsla(${color.hue}, ${color.saturation}%, ${color.lightness}%, 0.5)`
                    : 'none',
                  transform: isTyped ? 'scale(1)' : 'scale(0.8)',
                  opacity: isTyped ? 1 : 0.1
                }}
              >
                {char}
              </span>
            );
          })}
        </div>

        {/* Hint text */}
        {!isComplete && typedText.length === 0 && (
          <p className="text-gray-600 text-lg mt-8 animate-pulse">
            Start typing to reveal...
          </p>
        )}

        {/* Skip and Hint buttons */}
        {!isComplete && (
          <div className="flex gap-4 justify-center mt-8">
            <button
              onClick={handleHint}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Hint
            </button>
            <button
              onClick={handleSkip}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
              Skip
            </button>
          </div>
        )}

        {/* Progress indicator */}
        {typedText.length > 0 && !isComplete && (
          <div className="mt-8 w-96 mx-auto">
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-300"
                style={{ width: `${(typedText.length / targetText.length) * 100}%` }}
              />
            </div>
            <p className="text-gray-500 text-sm mt-2">
              {typedText.length} / {targetText.length}
            </p>
          </div>
        )}

        {/* Complete state */}
        {isComplete && (
          <div className="mt-12 animate-fadeIn">
            <button
              onClick={goToHome}
              className="px-10 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-xl font-semibold rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110 animate-bounce"
            >
              Enter Home Page →
            </button>
          </div>
        )}
      </div>

      {/* Particle effects */}
      {isComplete && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Current character hint */}
      {!isComplete && typedText.length > 0 && showHint && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800 px-6 py-3 rounded-lg animate-fadeIn">
          <p className="text-gray-400 text-sm mb-1">Next character:</p>
          <span className="text-white font-mono text-3xl font-bold">{targetText[typedText.length]}</span>
        </div>
      )}
      
      {!isComplete && typedText.length === 0 && showHint && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800 px-6 py-3 rounded-lg animate-fadeIn">
          <p className="text-gray-400 text-sm mb-1">Start with:</p>
          <span className="text-white font-mono text-3xl font-bold">{targetText[0]}</span>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? '' : '-'}50px);
            opacity: 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
