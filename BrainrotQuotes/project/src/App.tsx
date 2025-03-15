import React, { useState } from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const quotes = [
  "Life is what happens while you're busy making other plans. - John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Be the change you wish to see in the world. - Mahatma Gandhi",
  "Everything you've ever wanted is on the other side of fear. - George Addair",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar"
];

function App() {
  const [quote, setQuote] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomQuote = () => {
    setIsAnimating(true);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl w-full mx-4 border-8 border-yellow-500 relative cartoon-border">
        <div className="flex items-center justify-center mb-8 relative">
          <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <Quote className="w-12 h-12 text-yellow-500 mr-3 drop-shadow-lg" />
          </motion.div>
          <h1 className="text-5xl font-extrabold text-gray-800 text-center flex items-center cartoon-text">
            🎉 Quote-o-matic! 🎉
          </h1>
        </div>

        <motion.div 
          className="bg-yellow-100 rounded-3xl p-8 min-h-[170px] flex items-center justify-center mb-6 border-4 border-yellow-600 shadow-lg cartoon-box"
          animate={{ scale: isAnimating ? 0.9 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-2xl text-gray-800 text-center font-bold cartoon-text">
            {quote || "Press the big button to reveal wisdom!"}
          </p>
        </motion.div>

        <motion.button
          onClick={getRandomQuote}
          className="w-full bg-yellow-500 text-white font-extrabold py-4 px-8 rounded-full border-4 border-yellow-600 text-2xl cartoon-button
                     transform transition duration-200 hover:scale-110 hover:shadow-xl active:scale-95"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          🚀 Get a Quote!
        </motion.button>
      </div>

      <style jsx>{`
        .cartoon-border {
          border-width: 8px;
          border-style: solid;
          border-color: #ffcc00;
          box-shadow: 5px 5px 0px #ff9900;
        }

        .cartoon-text {
          font-family: 'Comic Sans MS', cursive, sans-serif;
          text-shadow: 2px 2px #ff9900;
        }

        .cartoon-box {
          border-radius: 20px;
          background: #ffeb99;
          border: 5px solid #ff9900;
          box-shadow: 5px 5px 0px #ff6600;
        }

        .cartoon-button {
          background: linear-gradient(90deg, #ffcc00, #ff6600);
          border-radius: 50px;
          border: 5px solid #ff9900;
          box-shadow: 5px 5px 0px #ff3300;
          text-shadow: 2px 2px #ff6600;
        }
      `}</style>
    </div>
  );
}

export default App;
