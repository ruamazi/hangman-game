const HEAD: JSX.Element = <div className="p-head" />;
const BODY: JSX.Element = <div className="p-body" />;
const RIGHT_ARM: JSX.Element = <div className="r-arm" />;
const LEFT_ARM: JSX.Element = <div className="l-arm" />;
const RIGHT_LEG: JSX.Element = <div className="r-leg" />;
const LEFT_LEG: JSX.Element = <div className="l-leg" />;
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const Drawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className="drawing-wrapper">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="top-bar" />
      <div className="mini-bar" />
      <div className="middle-bar" />
      <div className="bottom-bar" />
    </div>
  );
};

export default Drawing;
