import { Dispatch, SetStateAction } from "react";

type SetW = {
  setWordToGuess: Dispatch<SetStateAction<string>>;
};

const PlayAgain = ({ setWordToGuess }: SetW) => {
  const refresh = () => {
    window.location.reload();
    setWordToGuess((prev) => prev);
  };
  return (
    <button onClick={refresh} className="play-again">
      Play Again
    </button>
  );
};

export default PlayAgain;
