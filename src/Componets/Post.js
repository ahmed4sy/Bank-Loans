import "./../Styles/App.css";
export default function Post(params) {
  return (
    <div className="Cont">
      <h1>Request to Loan</h1>
      <div className="inputs">
        <input type="text" id="name" placeholder="User Name.." />
        <input type="text" id="age" placeholder="Age.." />
        <input type="text" id="phone" placeholder="My Phone" />
      </div>

      <input type="checkbox" id="check" />
      <p>Are you employed</p>
      <select>
        <option>50 ~ 100</option>
        <option>100 ~ 500</option>
        <option>1,000 ~ 10,000</option>
      </select>
    </div>
  );
}
