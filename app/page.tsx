//Jeruzel Carpio, February 2025

'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, HeartCrack, Stars } from "lucide-react";

interface HeartType {
  id: number;
  left: number;
  top: number;
  scale: number;
  delay: number;
  rotation: number;
}

export default function ValentinePage() {
  const [yesSize, setYesSize] = useState(50);
  const [noTextIndex, setNoTextIndex] = useState(0);
  const [noSize, setNoSize] = useState(50);
  const [isYesClicked, setIsYesClicked] = useState(false);
  const [hearts, setHearts] = useState<HeartType[]>([]);
  const [isBrokenHeart, setIsBrokenHeart] = useState(false);

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      scale: 0.5 + Math.random(),
      delay: Math.random() * 5,
      rotation: Math.random() * 30 - 15
    }));
    setHearts(newHearts);
  }, []);

  const handleYesClick = () => {
    setIsYesClicked(true);
    setIsBrokenHeart(false);
  };

  const handleNoClick = () => {
    setNoSize((prev) => Math.max(prev - 5, 0));
    setNoTextIndex((prev) => (prev + 1) % noTexts.length);
    setYesSize((prev) => Math.min(prev + 10, 100));
    setIsBrokenHeart(true);
  };

  const noTexts = [
    "No", 
    "Are you sure?", 
    "Really?", 
    "Think again!", 
    "Last chance...", 
    "Come on, just say yes!", 
    "Don't break my heart 💔"
  ];

  const HeartIcon = isBrokenHeart ? HeartCrack : Heart;

  const getExpressionGif = () => {
    if (isYesClicked) {
      return "/happy.gif";
    }
    if (isBrokenHeart) {
      return "/sad.gif";
    }
    return "/hopeful.gif";
  };

  const getExpressionAlt = () => {
    if (isYesClicked) return "Happy excited expression";
    if (isBrokenHeart) return "Sad pleading expression";
    return "Hopeful cute expression";
  };

  const getYesButtonScale = () => {
    const scale = yesSize / 50;
    return Math.min(scale, 2);
  };

  return (
    <div className="valentine-container flex flex-col items-center justify-center min-h-screen p-4 text-center relative overflow-hidden">
      <div className="mb-6 rounded-full overflow-hidden shadow-lg border-4 border-pink-200">
        <Image
          src={getExpressionGif()}
          alt={getExpressionAlt()}
          width={128}
          height={128}
          className="w-32 h-32 object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((heart) => (
          <HeartIcon
            key={heart.id}
            className="absolute animate-float opacity-50 transition-all duration-500"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              animationDelay: `${heart.delay}s`,
              transform: `scale(${heart.scale}) rotate(${heart.rotation}deg)`,
              color: isBrokenHeart ? '#ef4444' : 'var(--pink-gradient-to)',
            }}
            size={24}
          />
        ))}
      </div>

      <div className={`valentine-card relative z-10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border 
        ${isBrokenHeart ? 'border-red-200 shadow-red-100' : 'border-pink-200 shadow-pink-100'}
        transition-colors duration-500 max-w-md w-full`}>
        <Stars 
          className="absolute -top-6 left-1/2 -translate-x-1/2" 
          style={{ color: isBrokenHeart ? '#ef4444' : 'var(--pink-gradient-to)' }} 
          size={48} 
        />
        
        <h1 className="text-2xl md:text-3xl font-bold mb-8 flex flex-col items-center justify-center">
          {isYesClicked ? (
            <div className="animate-bounce inline-flex items-center justify-center w-full">
              YAYY! SEE YOU SOON! 🎉💖
            </div>
          ) : (
            <div className="space-y-2 w-full">
              <div>Will you be my</div>
              <div className="text-4xl md:text-5xl" 
                   style={{ color: isBrokenHeart ? '#ef4444' : 'var(--pink-gradient-to)' }}>
                Valentine?
              </div>
            </div>
          )}
        </h1>

        {!isYesClicked && (
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <button
              onClick={handleYesClick}
              className="bg-gradient-to-r from-pink-400 to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-pink-300/50 transition-all duration-300 hover:-translate-y-1"
              style={{ transform: `scale(${getYesButtonScale()})` }}
            >
              Yes ❤️
            </button>
            <button
              onClick={handleNoClick}
              className={`bg-gradient-to-r ${isBrokenHeart ? 'from-red-400 to-red-500' : 'from-gray-400 to-gray-500'} 
                text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-gray-300/50 transition-all duration-300`}
              style={{ 
                transform: `scale(${noSize / 50})`,
                opacity: Math.max(noSize / 50, 0.5)
              }}
            >
              {noTexts[noTextIndex]}
            </button>
          </div>
        )}
      </div>

      <HeartIcon 
        className="absolute bottom-4 left-4 animate-pulse" 
        style={{ color: isBrokenHeart ? '#ef4444' : 'var(--pink-gradient-to)' }} 
        size={32} 
      />
      <HeartIcon 
        className="absolute top-4 right-4 animate-pulse" 
        style={{ color: isBrokenHeart ? '#ef4444' : 'var(--pink-gradient-to)' }} 
        size={32} 
      />
    </div>
  );
}