"use client";
import { useState } from "react";

const QuantityButton = () => {

  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="flex items-center rounded-full border justify-between">
      <button
        type="button"
        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        className="px-4 py-2 text-lg"
      >
        −
      </button>
      <div className="w-10 text-center">
        {quantity}
      </div>
      <button
        type="button"
        onClick={() => setQuantity((q) => q + 1)}
        className="px-4 py-2 text-lg"
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;