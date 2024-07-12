import React, { useState } from "react";
import "../BMI/bmi.css";

function BMI() {
  const [click, setClick] = useState(false);
  const [units, setUnits] = useState(true);
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [age, setAge] = useState("");
  const [bmi, setBmi] = useState("");
  const [gender, setGender] = useState("");

  const calculateBMIInKg = () => {
    setClick(true);
    if (!gender || !height || !weight || !age) {
      setClick(false);
    } else {
      let bmi = weight / Math.pow(height, 2);
      setBmi(bmi.toFixed(2));
    }
  };
  const calculateBMIInPounds = () => {
    setClick(true);
    if (!gender || !height || !weight || !age) {
      setClick(false);
    } else {
      const heightInMeters = height * 0.01;
      const weightInKg = weight * 0.453592;
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    }
  };
  const clear = () => {
    window.location.reload();
  };
  const clearl = () => {
    setUnits(false);
    setClick(false);
  };
  const changeUnits = () => {
    setUnits(false);
    setBmi("");
    setClick(false);
  };
  const chnage = () => {
    setUnits(true);
    setBmi("");

    window.location.reload();
  };
  return (
    <div className="main">
      <div className="appy">
        <div className="main-wrapper">
          <h1>BMI CALCULATOR</h1>
        </div>
        <div className="cala">
          {units ? (
            <>
              <div className="BMI-wrapper">
                <div className="button-wrapper">
                  <button className="pound">Kg/Meters</button>
                  <button className="pounds" onClick={changeUnits}>
                    Lbs/Cm
                  </button>
                </div>
                <div className="gender">
                  <span className="words">Male:</span>
                  <input
                    type="radio"
                    name="gender"
                    id=""
                    value="Male"
                    onClick={(e) => setGender(e.target.value)}
                  />
                  <span className="words">Female:</span>
                  <input
                    type="radio"
                    name="gender"
                    id=""
                    value="female"
                    onClick={(e) => setGender(e.target.value)}
                  />
                </div>
                <br />
                <div className="inputss">
                  <label name="weigh">Age (2 to 100):</label>
                  <input
                    type="number"
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </div>
                <br />
                <div className="inputss">
                  <label name="weigh">Weight (in kg):</label>
                  <input
                    type="number"
                    onChange={(e) => {
                      setweight(e.target.value);
                    }}
                  />
                </div>
                <br />
                <div className="inputss">
                  <label name="height">Height(in meter):</label>
                  <input
                    type="number"
                    onChange={(e) => {
                      setheight(e.target.value);
                    }}
                  />
                </div>
                <div className="cal-ref">
                  <button onClick={calculateBMIInKg} className="cal">
                    calculate
                  </button>
                  <button onClick={clear} className="cal">
                    Refresh
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="BMI-wrapper">
                <div className="button-wrapper">
                  <button className="pounds" onClick={chnage}>
                    Kg/Meters
                  </button>
                  <button className="pound">Lbs/Cm</button>
                </div>
                <div className="gender">
                  <span className="words">Male:</span>
                  <input
                    type="radio"
                    name="gender"
                    id=""
                    value="Male"
                    onClick={(e) => setGender(e.target.value)}
                  />
                  <span className="words">Female:</span>
                  <input
                    type="radio"
                    name="gender"
                    id=""
                    value="female"
                    onClick={(e) => setGender(e.target.value)}
                  />
                </div>
                <br />
                <div className="inputss">
                  <label name="weigh">Age(2 to 100):</label>
                  <input
                    type="number"
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </div>
                <br />
                <div className="inputss">
                  <label name="weigh">Weight (in lbs):</label>
                  <input
                    type="number"
                    onChange={(e) => {
                      setweight(e.target.value);
                    }}
                  />
                </div>
                <br />
                <div className="inputss">
                  <label name="height">Height (in cm):</label>
                  <input
                    type="number"
                    onChange={(e) => {
                      setheight(e.target.value);
                    }}
                  />
                </div>
                <div className="cal-ref">
                  <button onClick={calculateBMIInPounds} className="cal">
                    calculate
                  </button>
                  <button onClick={clearl} className="cal">
                    Refresh
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {!click ? (
        ""
      ) : bmi < 18.5 ? (
        <p className="under">
          {" "}
          <span>Your BMI score is : </span>
          {bmi} <br />
          <span>Your Health status is : </span> Under weight
        </p>
      ) : bmi >= 18.5 && bmi < 24.9 ? (
        <p className="healthy">
          <span>Your BMI score is : </span>
          {bmi} <br />
          <span>Your Health status is : </span> Healthy
        </p>
      ) : (
        <p className="over">
          <span>Your BMI score is :</span>
          {bmi} <br />
          <span>Your Health status is : </span> Over Weight
        </p>
      )}
    </div>
  );
}

export default BMI;
