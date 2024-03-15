import { useRef, useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

function App() {
  
  const dropDown = useRef();
  const input = useRef();
  const arr = ['Yes', 'Probably Not'];
  const [transform, setTransform] = useState('rotate(0deg)');


  // show dropdown menu
  function showDropDown(){
    dropDown.current.style.display = "block";
    setTransform('rotate(90deg)');
  }

  // hide dropdown menu
  function hideDropDown(value){
    dropDown.current.style.display = "none";
    input.current.innerText = value;
    setTransform('rotate(0deg)');
  }

  return (
    <>
    <h1>React Dropdown</h1>
    <section>
      <h2>Should you use a dropdown?</h2>
      {/* Dropdown Input */}
      <div className="flex select" onMouseOver={showDropDown}>
          <span ref={input}>Select</span>
          <RiArrowDropRightLine className="angle-right" style={{transform}} size={25}/>
      
      </div>
      {/* Dropdown Menu */}
      <div className="dropdown flex" ref={dropDown} style={{display: 'none'}}>
        {arr.map((value, i)=> (
          <p onClick={() => hideDropDown(value)} key={i}>{value}</p>
        ))}
      </div>
    </section>
    </>
  );
}

export default App;
