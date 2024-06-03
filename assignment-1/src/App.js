import { useEffect, useState } from "react";
import Button from "./button.tsx"
import "./App.css"

function App() {

const [count,setCount] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setCount(prevCount => prevCount + 1);
  }, 1000);

  // Cleanup interval on component unmount
  return () => clearInterval(interval);
}, []);


const inc = () => { setCount(() => count+1)}
const dec = () => { setCount(() => count-1)}

  return (<>
  <div className="cnt"> </div>
  <div className="cnt"> Counter :{count} </div>
  <div className="App">
      
      <Button text= "Increment" func={inc}/>
      <Button text= "Decrement" func={dec}/>
    </div>
  </>
    
  );
}

export default App;
