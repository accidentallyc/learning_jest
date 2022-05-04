import {useState} from "react";

export const Arithmeticizer = () => {
  const [total, setTotal] = useState(0);

  return <div>
    <h1>{total}</h1>

    <button onClick={ () => setTotal(total + 1) }>+</button>
    <button onClick={ () => setTotal(total - 1) }>-</button>
  </div>;
}
