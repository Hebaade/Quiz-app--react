import { useState } from "react";
import { Data } from "./Data";

export default function MainCard() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [disable, setDisable] = useState(false);
  const [start, setStart] = useState(0);
  const checkAnswer = (e) => {
    let res = result;
    if (e === Data[number].validAnswer) {
      setResult(res + 1);
    }
  };
  const changeQuestion = () => {
    let num = number;
    if (number < 6) {
      num = num + 1;
      setNumber(num);
    } else {
      setDisable(true);
    }
  };
  const restart = () => {
    setDisable(false);
    setNumber(0);
    setResult(0);
    setStart(0);
  };
  return (
    <div>
      {!start ? (
        <div className="content">
          <h1 style={{ marginTop: "25px",fontSize:"55px" }}>Start Quiz</h1>
          <button className="next" onClick={() => setStart(1)}>
            Start
          </button>
        </div>
      ) : (
        <>
          <p className="NumberOfQue">
            {number}/{Data.length } Question
          </p>
          <section>
            {!disable ? (
              <div className="content">
                <h1 className="question">{Data[number].question}</h1>
                <div className="btnS">
                  {Data[number].answer.map((e, index) => (
                    <button key={index} onClick={() => checkAnswer(e)}>
                      {e}
                    </button>
                  ))}
                </div>
                <button onClick={() => changeQuestion()} className="next">
                  Next
                </button>
              </div>
            ) : (
              <div className="content">
                <div>
                  <h1>Your result is:</h1>
                  <h2 className="result">
                    {result}/{Data.length }
                  </h2>
                </div>
                <button className="reset" onClick={() => restart()}>
                  Restart
                </button>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}
