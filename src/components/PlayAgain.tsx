import { Dispatch, SetStateAction } from "react";
import words from "../wordList.json";

type SetW = {
  setWordToGuess: Dispatch<SetStateAction<string>>;
};

const PlayAgain = ({ setWordToGuess }: SetW) => {
  const randomWord = Math.floor(Math.random() * words.length);
  const refresh = () => {
    window.location.reload();
    setWordToGuess(words[randomWord]);
  };
  return (
    <button onClick={refresh} className="play-again">
      Play Again
    </button>
  );
};

export default PlayAgain;
