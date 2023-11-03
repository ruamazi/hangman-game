const PlayAgain = () => {
  const refresh = () => {
    window.location.reload();
  };
  return (
    <button onClick={refresh} className="play-again">
      Play Again
    </button>
  );
};

export default PlayAgain;
