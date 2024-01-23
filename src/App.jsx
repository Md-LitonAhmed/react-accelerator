import { useState } from "react";
import {sculptureList} from './Data'
function App() {
  const [index, setIndex]=useState(0);
  const [showDetails, setShowDetails]=useState(true)
  let hasPre= index > 0;
  let hasNext = index < sculptureList.length - 1;

  const handleNext=()=>{
    setIndex(index +1 );
  }
  const handlePre=()=>{
    setIndex(index -1 );
  }
  const handleShowDetails=()=>{
    setShowDetails(!showDetails)
  }
const sculpture = sculptureList[index]
  return (
    <>
      <div>
        <button onClick={handlePre} disabled={!hasPre}>Previous</button>
        <button onClick={handleNext}  disabled={!hasNext}>Next</button>
        <h2> <i>{sculpture.name}</i> By {sculpture.artist}</h2>
        <h3>{index + 1} of {sculptureList.length}</h3>
        <button onClick={handleShowDetails}>{showDetails ? "Hide": "Show"} Details</button>
        {showDetails && <p>{sculpture.description}</p>}
        <img src={sculpture.url} alt={sculpture.alt} />
      </div>
    </>
  );
}

export default App;
