import {useEffect, useState} from "react";

export const Doublicator = () => {
  const [display, setDisplay] = useState(1);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(total);
    }, 10)
  }, [total])

  return <div>
    <h1>{display}</h1>

    <button onClick={() => setTotal(total * 2)}>*</button>
    <button onClick={() => setTotal(1)}>C</button>
  </div>;
}

const fakeFetch = (v:number):Promise<number> => {
  return new Promise((resolve) => {
      setTimeout(() => {
        resolve(v);
      }, 10)
    })
}


export const DoublicatorPromiserator = () => {
  const [display, setDisplay] = useState(1);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    fakeFetch(total)
      .then((v) => setDisplay(v));
  }, [total])

  return <div>
    <h1>{display}</h1>

    <button onClick={() => setTotal(total * 2)}>*</button>
    <button onClick={() => setTotal(1)}>C</button>
  </div>;
}
