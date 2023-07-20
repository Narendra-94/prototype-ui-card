import React, { useState } from "react";
import "./prototype.css";

export const PrototypeCard = () => {
  const [inputs, setInputs] = useState({
    grossEarnings: "",
    dalalEarningsPercent: "",
    traderEarningsPercent: "",
    miscFeesPercent: "",
    referralEarningsPercent: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [output, setOutput] = useState({
    traderEarnings: 0,
    miscFees: 0,
    referralEarnings: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));

    if (value && errorMessage) {
      setErrorMessage("");
    }
  };

  const handleCalculate = () => {
    const {
      grossEarnings,
      dalalEarningsPercent,
      traderEarningsPercent,
      miscFeesPercent,
      referralEarningsPercent,
    } = inputs;

    if (
      grossEarnings < 0 ||
      dalalEarningsPercent < 0 ||
      traderEarningsPercent < 0 ||
      miscFeesPercent < 0 ||
      referralEarningsPercent < 0
    ) {
      setErrorMessage("Please enter positive values for all input fields.");
      setShowOutput(false);
      return;
    }

    if (dalalEarningsPercent !== "" && traderEarningsPercent !== "") {
      const dalalEarnings = grossEarnings * (dalalEarningsPercent / 100);
      const traderEarnings = grossEarnings * (traderEarningsPercent / 100);
      const miscFees = grossEarnings * (miscFeesPercent / 100);
      const referralEarnings = grossEarnings * (referralEarningsPercent / 100);

      setOutput({
        dalalEarnings,
        traderEarnings,
        miscFees,
        referralEarnings,
      });

      setErrorMessage("");
      setShowOutput(true);
    } else {
      setErrorMessage(
        "Please enter values for Dalal Earnings % and Trader Earnings %."
      );
      setShowOutput(false);
    }
  };
  return (
    <div className="prototype-card">
      <div className="calculation-card">
        <h3>Calculate Earnings</h3>
        <div className="input-group">
          <label>Gross Earnings (Rs)</label>
          <input
            type="number"
            name="grossEarnings"
            value={inputs.grossEarnings}
            onChange={handleInputChange}
            placeholder="Gross Earnings"
          />
        </div>
        <div className="earnings-container">
          <div className="input-group">
            <label>Dalal Earnings (%)</label>
            <input
              type="number"
              name="dalalEarningsPercent"
              value={inputs.dalalEarningsPercent}
              onChange={handleInputChange}
              placeholder="Dalal Earnings"
            />
          </div>
          <div className="input-group">
            <label>Trader Earnings (%)</label>
            <input
              type="number"
              name="traderEarningsPercent"
              value={inputs.traderEarningsPercent}
              onChange={handleInputChange}
              placeholder="Trader Earnings"
            />
          </div>
        </div>
        <div className="earnings-container">
          <div className="input-group">
            <label>Misc. Fees (%)</label>
            <input
              type="number"
              name="miscFeesPercent"
              value={inputs.miscFeesPercent}
              onChange={handleInputChange}
              placeholder="Misc Fees"
            />
          </div>
          <div className="input-group">
            <label>Referral Earnings (%)</label>
            <input
              type="number"
              name="referralEarningsPercent"
              value={inputs.referralEarningsPercent}
              onChange={handleInputChange}
              placeholder="Referral Earnings"
            />
          </div>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      {showOutput && (
        <div className="output-card">
          <h3>Output</h3>
          <table>
            <tbody>
              <tr>
                <td>Dalal Earnings</td>
                <td>{output.dalalEarnings}</td>
              </tr>
              <tr>
                <td>Trader Earnings</td>
                <td>{output.traderEarnings}</td>
              </tr>
              <tr>
                <td>Misc. Fees</td>
                <td>{output.miscFees}</td>
              </tr>
              <tr>
                <td>Referral Earnings</td>
                <td>{output.referralEarnings}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
