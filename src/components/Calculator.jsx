import { useState } from "react";
import DarkMode from "./DarkMode";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      if (input.includes("%")) {
        const [firstNumber, secondNumber] = input.split("%").map(parseFloat);
        if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
          const percentageResult = (firstNumber * secondNumber) / 100;
          setInput(percentageResult.toString());
          return;
        }
      }

      const calculatedResult = eval(input);
      setInput(calculatedResult.toString());
    } else if (value === "AC") {
      setInput("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#AABFD8]">
      {/* container */}
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="w-full h-full max-w-xs flex flex-col gap-2 p-4 rounded-md bg-[#F0F5FD] dark:bg-[#18171D]"
      >
        <div>
          <DarkMode />
          <p className="text-xl font-bold text-center tracking-wider text-gray-800 dark:text-white">
            Calculator
          </p>
        </div>
        <div className="p-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            readOnly
            className="w-full py-8 px-3 dark:text-white bg-[#d6dff4] dark:bg-[#2E2E38] text-2xl text-right rounded-sm"
          />
        </div>
        {/* buttons */}
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => handleButtonClick("AC")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#f8e3d6] dark:bg-[#4E505F] font-semibold"
          >
            AC
          </button>
          <button
            onClick={() => handleButtonClick("DEL")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#f8e3d6] dark:bg-[#4E505F] font-semibold"
          >
            DEL
          </button>
          <button
            onClick={() => handleButtonClick("%")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#f8e3d6] dark:bg-[#4E505F] font-semibold"
          >
            %
          </button>
          <button
            onClick={() => handleButtonClick("/")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#EC8938] dark:bg-[#5A43EC] font-semibold"
          >
            ÷
          </button>
          <button
            onClick={() => handleButtonClick("7")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#f8e3d6] dark:bg-[#4E505F] font-semibold"
          >
            7
          </button>
          <button
            onClick={() => handleButtonClick("8")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#f8e3d6] dark:bg-[#4E505F] font-semibold"
          >
            8
          </button>
          <button
            onClick={() => handleButtonClick("9")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#f8e3d6] dark:bg-[#4E505F] font-semibold"
          >
            9
          </button>
          <button
            onClick={() => handleButtonClick("*")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#EC8938] dark:bg-[#5A43EC] font-semibold"
          >
            x
          </button>
          <button
            onClick={() => handleButtonClick("4")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#f8e3d6] dark:bg-[#4E505F] font-semibold"
          >
            4
          </button>
          <button
            onClick={() => handleButtonClick("5")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#f8e3d6] dark:bg-[#4E505F] font-semibold"
          >
            5
          </button>
          <button
            onClick={() => handleButtonClick("6")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#f8e3d6] dark:bg-[#4E505F] font-semibold"
          >
            6
          </button>
          <button
            onClick={() => handleButtonClick("-")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#EC8938] dark:bg-[#5A43EC] font-semibold"
          >
            -
          </button>
          <button
            onClick={() => handleButtonClick("1")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#f8e3d6] dark:bg-[#4E505F] font-semibold"
          >
            1
          </button>
          <button
            onClick={() => handleButtonClick("2")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#f8e3d6] dark:bg-[#4E505F] font-semibold"
          >
            2
          </button>
          <button
            onClick={() => handleButtonClick("3")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#f8e3d6] dark:bg-[#4E505F] font-semibold"
          >
            3
          </button>
          <button
            onClick={() => handleButtonClick("+")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#EC8938] dark:bg-[#5A43EC] font-semibold"
          >
            +
          </button>
          <button
            onClick={() => handleButtonClick("0")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#f8e3d6] dark:bg-[#4E505F] font-semibold"
          >
            0
          </button>
          <button
            onClick={() => handleButtonClick(".")}
            className="text-sm dark:text-white p-4 rounded-xl bg-[#f8e3d6] dark:bg-[#4E505F] font-semibold"
          >
            .
          </button>
          <button
            onClick={() => handleButtonClick("=")}
            className="col-span-2 text-sm dark:text-white p-4 rounded-xl bg-[#76a48d] dark:bg-[#2f7f58] font-semibold"
          >
            =
          </button>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
