import { useEffect, useState } from 'react';

const SnowfallEffect = () => {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    const totalFlakes = 80; // Больше снежинок = плотнее снег
    const newFlakes = Array.from({ length: totalFlakes }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 5,
      fontSize: Math.random() * 16 + 10, // Размер снежинки от 10px до 26px
      duration: Math.random() * 8 + 4, // От 4 до 12 секунд падения
    }));
    setFlakes(newFlakes);
  }, []);

  return (
    <div className="absolute pointer-events-none  inset-0 z-50 overflow-hidden">
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.animationDelay}s`,
            animationDuration: `${flake.duration}s`,
            fontSize: `${flake.fontSize}px`,
          }}
        >
          ❄
        </div>
      ))}

      <style jsx>{`
        .snowflake {
          position: absolute;
          top: -10px;
          color: #fff;
          opacity: 0.8;
          animation-name: fall-snowflake;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          user-select: none;
        }

        @keyframes fall-snowflake {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SnowfallEffect;
