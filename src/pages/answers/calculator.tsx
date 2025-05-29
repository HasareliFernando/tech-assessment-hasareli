import { useState } from "react";

type InputNumberType = number;
type InputStringType = string | undefined;

export default function Calculator() {
  const [firstNum, setFirstNum] = useState<InputStringType>("");
  const [firstNumError, setFirstNumError] = useState<InputStringType>("");
  const [secondNum, setSecondNum] = useState<InputNumberType>();
  const [secondNumError, setSecondNumError] = useState<InputStringType>("");
  const [totalNum, setTotalNum] = useState<InputNumberType>();

  const validateNumber = (value: any): boolean => {
    return !isNaN(Number(value));
  };

  const handleAddTwoNumbers = () => {
    if (!validateNumber(firstNum)) {
      setFirstNumError("Please enter a valid number");
      return;
    }
    if (!validateNumber(secondNum)) {
      setSecondNumError("Please enter a valid number");
      return;
    }
    setFirstNumError("");
    setSecondNumError("");
    setTotalNum(Number(firstNum) + Number(secondNum));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Adding Two Numbers
          </h1>
        </div>
      </header>

      {/* Page Content */}
      <main className="max-w-7xl mx-auto p-4">
        <form className="w-full max-w-sm">
          <div className="md:flex md:items-center">
            <div className="md:w-full">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="first-number"
                type="text"
                placeholder="First Number"
                value={firstNum}
                onChange={(e) => setFirstNum(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            {firstNumError !== "" && (
              <label className=" md:w-full block text-red-500 font-bold">
                <span className="text-sm">{firstNumError}</span>
              </label>
            )}
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-full">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="second-number"
                type="number"
                placeholder="Second Number"
                value={secondNum}
                onChange={(e) => setSecondNum(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            {secondNumError !== "" && (
              <label className=" md:w-full block text-red-500 font-bold">
                <span className="text-sm">{secondNumError}</span>
              </label>
            )}
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-full">
              <button
                className="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleAddTwoNumbers}
              >
                Add Two Numbers
              </button>
            </div>
          </div>
          <div className="md:flex md:items-center mt-10">
            <div className="md:w-full"></div>
            <label className="md:w-full block text-gray-500 font-bold">
              Total : {totalNum}
            </label>
          </div>
        </form>
      </main>
    </div>
  );
}
