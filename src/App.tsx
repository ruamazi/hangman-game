import { useCallback, useEffect, useState } from "react";
import words from "../public/wordList.json";
import Drawing from "./components/Drawing";
import Word from "./components/Word";
import Keys from "./components/Keys";
import PlayAgain from "./components/PlayAgain";

function App() {
  const randomWord = Math.floor(Math.random() * words.length);
  const [wordToGuess, setWordToGuess] = useState<string>(words[randomWord]);

  const [gussedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = gussedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => gussedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (gussedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((currentL) => [...currentL, letter]);
    },
    [gussedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [gussedLetters]);

  return (
    <div className="app">
      <div className="win-lose-placeh">
        <div className="">
          {isWinner && (
            <div className="win-lose">
              You Win! <PlayAgain />
            </div>
          )}
          {isLoser && (
            <div className="win-lose">
              You lose! <PlayAgain />
            </div>
          )}
        </div>
      </div>

      <Drawing numberOfGuesses={incorrectLetters.length} />
      <Word
        gussedLetters={gussedLetters}
        wordToGuess={wordToGuess}
        reveal={isLoser}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keys
          activeLetters={gussedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          disabled={isWinner || isLoser}
        />
      </div>
    </div>
  );
}

export default App;
