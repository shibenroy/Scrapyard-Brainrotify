import React, { useState } from 'react';
import { Character, Move, Player } from '../types';
import { Swords, User } from 'lucide-react';

interface Props {
  players: [Player, Player];
  onBattleEnd: (winner: Player) => void;
}

export function BattleScene({ players, onBattleEnd }: Props) {
  const [currentTurn, setCurrentTurn] = useState<1 | 2>(1);
  const [player1Char, setPlayer1Char] = useState({ ...players[0].character });
  const [player2Char, setPlayer2Char] = useState({ ...players[1].character });
  const [battleLog, setBattleLog] = useState<string[]>([]);
  const [animatingMove, setAnimatingMove] = useState<Move | null>(null);
  const [isAttacking, setIsAttacking] = useState(false);

  const handleMove = async (move: Move) => {
    if (isAttacking) return;
    
    setIsAttacking(true);
    setAnimatingMove(move);
    
    const attacker = currentTurn === 1 ? player1Char : player2Char;
    const defender = currentTurn === 1 ? player2Char : player1Char;
    
    const newHp = Math.max(0, defender.hp - move.damage);
    const log = `Player ${currentTurn}'s ${attacker.name} used ${move.name}! Dealt ${move.damage} damage!`;
    
    setBattleLog(prev => [log, ...prev].slice(0, 5));
    
    // Wait for animation to complete
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (currentTurn === 1) {
      setPlayer2Char({ ...player2Char, hp: newHp });
      if (newHp === 0) onBattleEnd(players[0]);
    } else {
      setPlayer1Char({ ...player1Char, hp: newHp });
      if (newHp === 0) onBattleEnd(players[1]);
    }
    
    setCurrentTurn(current => current === 1 ? 2 : 1);
    setAnimatingMove(null);
    setIsAttacking(false);
  };

  const HealthBar = ({ character }: { character: Character }) => (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-green-500 rounded-full h-4 transition-all duration-500"
        style={{
          width: `${(character.hp / character.maxHp) * 100}%`,
        }}
      />
    </div>
  );

  const getCharacterAnimation = (char: Character, player: number) => {
    if (!animatingMove) return '';
    
    if (currentTurn === player) {
      // Attacker animation
      return `animate-attack-${player === 1 ? 'right' : 'left'}`;
    } else {
      // Defender animation
      return `animate-${animatingMove.animation}`;
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 p-6">
      <div className="flex justify-between w-full max-w-4xl">
        {[
          { char: player1Char, player: 1 },
          { char: player2Char, player: 2 }
        ].map(({ char, player }) => (
          <div 
            key={char.id} 
            className={`
              w-64 relative
              ${currentTurn === player ? 'ring-4 ring-yellow-400 rounded-lg p-4' : ''}
            `}
          >
            <div className="flex items-center gap-2 mb-4">
              <User className="w-6 h-6" />
              <span className="font-bold">Player {player}</span>
            </div>
            <div className={getCharacterAnimation(char, player)}>
              <img
                src={char.image}
                alt={char.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{char.name}</h3>
            <HealthBar character={char} />
            <p className="mt-2">
              HP: {char.hp}/{char.maxHp}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <User className="w-8 h-8" />
        <h2 className="text-2xl font-bold">
          Player {currentTurn}'s Turn
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {(currentTurn === 1 ? player1Char : player2Char).moves.map((move) => (
          <button
            key={move.name}
            onClick={() => handleMove(move)}
            disabled={isAttacking}
            className={`
              bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg
              transition transform hover:scale-105
              ${isAttacking ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            {move.name}
          </button>
        ))}
      </div>

      <div className="w-full max-w-md bg-gray-100 rounded-lg p-4 mt-4">
        <h3 className="font-bold mb-2">Battle Log:</h3>
        {battleLog.map((log, idx) => (
          <p key={idx} className="text-sm text-gray-700">{log}</p>
        ))}
      </div>
    </div>
  );
}