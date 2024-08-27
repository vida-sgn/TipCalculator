import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <br></br>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill && (
        <div>
          <Output bill={bill} tip={tip} />
          <Reset handleReset={handleReset} />
        </div>
      )}
    </div>
  );
}
function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>How much was the Bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        placeholder="Bill value"
      />
    </div>
  );
}
function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value={0}>Disatified (0%)</option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutly Amazing! (20%)</option>
      </select>
    </>
  );
}
function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tips)
    </h3>
  );
}
function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}
