import { useState } from "react";
import generateRandomNumber from "../utils/generateRandomNumber";

function RandomNumber({ maxNumber }) {
  const [randomNumber, setRandomNumber] = useState(
    generateRandomNumber(maxNumber)
  );
  const changeRandomNumber = () => {
    setRandomNumber(generateRandomNumber(maxNumber));
  };

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button onClick={changeRandomNumber}>Generate new random number</button>
    </div>
  );
}

export default RandomNumber;
