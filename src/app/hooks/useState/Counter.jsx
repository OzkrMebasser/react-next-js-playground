import { useState } from "react";
import Image from "next/image";



const Counter = () => {
  // Ejemplo 1: Estado de un contador
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }
  return (
    <>
      <div className="p-4 bg-[#DDEBFA] rounded-md shadow-sm">
        <h3 className="text-xl  mb-2 font-bold">Counter <br /><span className="font-light">example #1</span></h3>
        <p className="text-lg mb-2">Count: {count}</p>
        <button
          onClick={incrementCounter}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Increment
        </button>
      </div>
      <div className="">
      <Image
              src="../counter-useState.svg"
              alt="useState counter"
              
              width={1200}
              height={300}

            />
      </div>
    </>
  );
};

export default Counter;
