type HangmanDrawingProps = {
  gussedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const Word = ({ gussedLetters, wordToGuess, reveal }: HangmanDrawingProps) => {
  return (
    <div className="word-wrapper">
      {wordToGuess.split("").map((letter, i) => (
        <p key={i + letter} className="letter">
          <span
            className={
              gussedLetters.includes(letter) || reveal
                ? "v-visible"
                : "v-hidden"
            }
            style={{
              color:
                !gussedLetters.includes(letter) && reveal
                  ? "#a03939"
                  : "inherit",
            }}
          >
            {letter}
          </span>
        </p>
      ))}
    </div>
  );
};

export default Word;
