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
      <h1>this StateForm</h1>
    </div>
  );
}
function Done() {
  return (
    <div id="end">
      <h1>this Done</h1>
    </div>
  );
}
