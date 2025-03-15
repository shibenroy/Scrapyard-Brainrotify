import React, { useState } from 'react';
import { Character, BattleState, Player } from './types';
import { characters } from './data/characters';
import { CharacterSelect } from './components/CharacterSelect';
import { BattleScene } from './components/BattleScene';
import { Swords, Trophy, User } from 'lucide-react';

function App() {
  const [battleState, setBattleState] = useState<BattleState>('selection');
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
  const [winner, setWinner] = useState<Player | null>(null);

  const currentPlayer = (selectedCharacters.length + 1) as 1 | 2;

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacters(prev => [...prev, character]);
  };

  const handleBattleEnd = (winner: Player) => {
    setWinner(winner);
    setBattleState('finished');
  };

  const resetGame = () => {
    setSelectedCharacters([]);
    setWinner(null);
    setBattleState('selection');
  };

  const players: [Player, Player] | undefined = selectedCharacters.length === 2
    ? [
        { number: 1, character: selectedCharacters[0] },
        { number: 2, character: selectedCharacters[1] }
      ]
    : undefined;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-6">
        <h1 className="text-3xl font-bold text-center flex items-center justify-center gap-2">
          <Swords className="w-8 h-8" />
          Two-Player Battle Arena
        </h1>
      </header>

      <main className="container mx-auto py-8">
        {battleState === 'selection' && (
          <div>
            <CharacterSelect
              characters={characters}
              onSelect={handleCharacterSelect}
              selectedCharacters={selectedCharacters}
              currentPlayer={currentPlayer}
            />
            {selectedCharacters.length === 2 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setBattleState('battle')}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg
                           transition transform hover:scale-105"
                >
                  Start Battle!
                </button>
              </div>
            )}
          </div>
        )}

        {battleState === 'battle' && players && (
          <BattleScene
            players={players}
            onBattleEnd={handleBattleEnd}
          />
        )}

        {battleState === 'finished' && winner && (
          <div className="text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
              <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <div className="flex items-center justify-center gap-2 mb-4">
                <User className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Player {winner.number} Wins!</h2>
              </div>
              <p className="text-xl mb-6">
                Using {winner.character.name}
              </p>
              <button
                onClick={resetGame}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg
                         transition transform hover:scale-105"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;