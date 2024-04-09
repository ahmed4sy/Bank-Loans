import "./../Styles/App.css";
export default function DataIn({ Disp }) {
  return (
    <>
      <StateStart display={Disp[0]} />
      <StateForm display={Disp[1]} />
      <Done display={Disp[2]} />
    </>
  );
}

function StateStart({ display }) {
  return (
    <div className={display}>
      <img
        alt="img Bank"
        src="https://pic.onlinewebfonts.com/thumbnails/icons_452018.svg"
      />
      <h1>Bank Ahmed</h1>
    </div>
  );
}
function StateForm({ display }) {
  return (
    <div className={display}>
      <h1>this StateForm</h1>
    </div>
  );
}
function Done({ display }) {
  return (
    <div className={display}>
      <h1>this Done</h1>
    </div>
  );
}
