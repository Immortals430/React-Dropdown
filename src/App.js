import { useRef } from "react";

function App() {
  const dropDown = useRef()
  const input = useRef()
  const arrow = useRef()
  const arr = ['Yes', 'Probably Not']


  // show dropdown menu
  function showDropDown(){
    dropDown.current.style.display = "block"
    arrow.current.style.transform = 'rotate(90deg)';
  }

  // hide dropdown menu
  function hideDropDown(value){
    dropDown.current.style.display = "none"
    input.current.innerText = value
    arrow.current.style.transform = 'rotate(0deg)';
  }


  return (
    <>
    <h1>React Dropdown</h1>
    <section>
      <h2>Should you use a dropdown?</h2>
      {/* Dropdown Input */}
      <div className="flex select" onMouseOver={showDropDown}>
          <span ref={input}>Select</span>
          <i ref={arrow} className="fa fa-angle-right"></i>
      </div>
      {/* Dropdown Meun */}
      <div className="dropDown flex" ref={dropDown} style={{display: 'none'}}>
        {arr.map((value, i)=> (
          <p onClick={() => hideDropDown(value)} key={i}>{value}</p>
        ))}
      </div>
    </section>
    </>
  );
}

export default App;
