import "./../Styles/App.css";
export default function Island(props) {
  return (
    <div className="island" id="isl">
      {props.children}
    </div>
  );
}
