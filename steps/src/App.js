import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// export default function App() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   const handlePrevious = () => {
//     if (step > 1) {
//       setStep((step) => step - 1);
//     }
//   };
//   const handleNext = () => {
//     if (step < 3) setStep((step) => step + 1);
//   };

//   const handleIsOpen = () => {
//     // isOpen ? setIsOpen(false) : setIsOpen(true);
//     setIsOpen((open) => !open);
//   };

//   return (
//     <>
//       <button className="close" onClick={handleIsOpen}>
//         &times;
//       </button>
//       {isOpen ? (
//         <div className="steps">
//           <div className="numbers">
//             <div className={`${step >= 1 ? "active" : ""}`}>1</div>
//             <div className={`${step >= 2 ? "active" : ""}`}>2</div>
//             <div className={`${step >= 3 ? "active" : ""}`}>3</div>
//           </div>

//           <div className="message">
//             Step {step}: {messages[step - 1]}
//           </div>

//           <div className="buttons">
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handlePrevious}
//             >
//               Previous
//             </button>
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handleNext}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// }

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const [day, setDay] = useState("sunday");
  const daysOfTheWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const handleCountIncrease = () => {
    setCount((count) => (count += step + 1));
  };

  const handleCountDecrease = () => {
    setCount((count) => (count -= step + 1));
  };

  const handleStepIncrease = () => {
    setStep((step) => (step += 1));
  };

  const handleStepDecrease = () => {
    if (step > 0) setStep((step) => (step -= 1));
  };
  return (
    <div>
      <p>
        <button onClick={handleStepDecrease}>-</button>
        <span>Step :{step}</span>{" "}
        <button onClick={handleStepIncrease}>+</button>
      </p>

      <p>
        <button onClick={handleCountDecrease}>-</button>{" "}
        <span>Count :{count}</span>{" "}
        <button onClick={handleCountIncrease}>+</button>
      </p>
      <p>
        {} days from today is {} {} 2027
      </p>
    </div>
  );
}
