import { useState } from "react";
import DataIn from "./Componets/DataIn";
import Island from "./Componets/Island";
import "./Styles/App.css";
let numsUp = 0;
function App() {
  let [Display, setDisplay] = useState(["show", "hide", "hide"]);
  let [But, setBut] = useState("Start");
  function UpState() {
    numsUp++;
    let namesBut = ["Loans", "Send", "Back"];
    if (numsUp === 3) {
      numsUp = 0;
    }
    let DisList = [...Display];
    DisList[DisList.indexOf("show")] = "hide";
    DisList[numsUp] = "show";
    setDisplay(DisList);
    setBut(namesBut[numsUp]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Island>
          <DataIn Disp={Display} />
          <button onClick={UpState}>{But}</button>
        </Island>
      </header>
    </div>
  );
}

export default App;
