const HEAD: JSX.Element = <div key={"1"} className="p-head" />;
const BODY: JSX.Element = <div key={"2"} className="p-body" />;
const RIGHT_ARM: JSX.Element = <div key={"3"} className="r-arm" />;
const LEFT_ARM: JSX.Element = <div key={"4"} className="l-arm" />;
const RIGHT_LEG: JSX.Element = <div key={"5"} className="r-leg" />;
const LEFT_LEG: JSX.Element = <div key={"6"} className="l-leg" />;
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
