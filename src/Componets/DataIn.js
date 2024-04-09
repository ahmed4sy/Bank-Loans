import "./../Styles/App.css";
export default function DataIn({ Disp }) {
  if (Disp[0] === "show") {
    return <StateStart />;
  } else if (Disp[1] === "show") {
    return <StateForm />;
  } else if (Disp[2] === "show") {
    return <Done />;
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
function StateForm() {
  return (
    <div id="form">
      <h1>Request to Loan</h1>
      <input type="text" className="name" placeholder="User Name.." />
      <input type="text" className="age" placeholder="Age.." />

      <div className="chi">
        <input type="text" className="phone" placeholder="My Phone" />
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
function Done() {
  if (false) {
    return <h1 className="true">Sent Successfully</h1>;
  } else {
    return <h1 className="false">Sent Failed</h1>;
  }
}
