import React from 'react';
import { Character } from '../types';
import { User } from 'lucide-react';

interface Props {
  characters: Character[];
  onSelect: (character: Character) => void;
  selectedCharacters: Character[];
  currentPlayer: 1 | 2;
}

export function CharacterSelect({ characters, onSelect, selectedCharacters, currentPlayer }: Props) {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 mb-8">
        <User className="w-6 h-6" />
        <h2 className="text-2xl font-bold text-center">
          Player {currentPlayer}, Choose Your Character!
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {characters.map((character) => {
          const isSelected = selectedCharacters.some(c => c.id === character.id);
          return (
            <div
              key={character.id}
              className={`
                relative rounded-lg overflow-hidden cursor-pointer transform transition
                ${isSelected ? 'ring-4 ring-blue-500 scale-105' : 'hover:scale-105'}
                ${isSelected && !selectedCharacters.some(c => c.id === character.id) ? 'opacity-50' : ''}
              `}
              onClick={() => !isSelected && onSelect(character)}
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
                <h3 className="text-white text-xl font-bold">{character.name}</h3>
                <p className="text-gray-300">HP: {character.maxHp}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}