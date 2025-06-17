import { useState } from "react"
import Main from "./Main";

function App() {
  const [oldElement, setOldElement] = useState("");
  const [currentElement, setCurrentElement] = useState("");
  const [operator, setOperator] = useState("");
  return (
    <div>
      <Main props = {{oldElement,setOldElement,currentElement,setCurrentElement,operator,setOperator}} />
    </div>
    
  )
}

export default App
