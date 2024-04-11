import { useState } from "react";
import "./../Styles/App.css";

export default function DataIn({ Disp }) {
  let contin = false;
  let [Door, setDoor] = useState([false, false, false]);
  if (Disp[0] === "show") {
    return <StateStart />;
  } else if (Disp[1] === "show") {
    return <StateForm rec={Door} seting={setDoor} />;
  } else if (Disp[2] === "show") {
    contin = true;
    return (
      <Done
        sneding={
          Door[0] === true && Door[1] === true && Door[2] === true
            ? true
            : false
        }
      />
    );
  }
  if (contin) {
    setDoor([false, false, false]);
  }
}

function StateStart() {
  return (
    <div id="beg">
      <img
        alt="img Bank"
        src="https://pic.onlinewebfonts.com/thumbnails/icons_452018.svg"
      />
      <h1>Bank Ahmed</h1>
    </div>
  );
}
function StateForm({ rec, seting }) {
  let [Form, setForm] = useState(["", "", ""]);
  return (
    <div id="form">
      <h1>Request to Loan</h1>
      <input
        type="text"
        className="name"
        value={Form[0]}
        onChange={(e) => {
          let newarr = [...Form];
          if (e.target.value.length <= 25) {
            newarr[0] = e.target.value;
          }
          if (e.target.value.length >= 4) {
            let setForm = [...rec];
            setForm[0] = true;
            seting(setForm);
          } else {
            let setForm = [...rec];
            setForm[0] = false;
            seting(setForm);
          }
          setForm(newarr);
        }}
        placeholder="User Name.."
      />
      <input
        type="text"
        className="age"
        value={Form[1]}
        placeholder="Age.."
        onChange={(e) => {
          let newarr = [...Form];
          if (e.target.value.length <= 2 && !isNaN(e.target.value)) {
            newarr[1] = e.target.value;
          }
          if (Number(e.target.value) >= 18) {
            let setForm = [...rec];
            setForm[1] = true;
            seting(setForm);
          } else {
            let setForm = [...rec];
            setForm[1] = false;
            seting(setForm);
          }
          setForm(newarr);
        }}
      />

      <div className="chi">
        <input
          type="text"
          className="phone"
          value={Form[2]}
          placeholder="My Phone"
          onChange={(e) => {
            let newarr = [...Form];
            if (e.target.value.length <= 10 && !isNaN(e.target.value)) {
              newarr[2] = e.target.value;
            }
            if (e.target.value.length === 10) {
              let setForm = [...rec];
              setForm[2] = true;
              seting(setForm);
            } else {
              let setForm = [...rec];
              setForm[2] = false;
              seting(setForm);
            }

            setForm(newarr);
          }}
        />
        <input type="checkbox" className="check" />
        <p>Are you employed</p>
      </div>

      <select>
        <option>50 ~ 100 $</option>
        <option>100 ~ 500 $</option>
        <option>1,000 ~ 10,000 $</option>
      </select>
    </div>
  );
}
function Done({ sneding }) {
  if (sneding) {
    return <h1 className="true">Sent Successfully</h1>;
  } else {
    return <h1 className="false">Sent Failed</h1>;
  }
}
