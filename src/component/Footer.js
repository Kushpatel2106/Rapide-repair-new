import "./Footer.css";
import logopath from "./images/logo.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="img-name-add">
        <div className="box1">
          <img className="logo-img" src={logopath} alt="#" />
          <h4 className="tital-name">RapidRepair</h4>
        </div>

        <div className="address">
          <h4 className="add">
            SP-42, Arya College Rd <br /> RIICO Industrial Area <br /> Kukas,
            Rajasthan 302028
          </h4>
        </div>
      </div>
      <div className="contect">
        <div className="con-box">
            <div className="boxs">Email</div>
            <div className="boxs">Phone Number</div>
            <div className="boxs">Working Days</div>
            <div className="boxs">Working Location</div>
        </div>
        <div className="con-box">
        <div className="boxs">kushpatelkp2106@gmail.com</div>
        <div className="boxs">+919672275589</div>
        <div className="boxs">mon-sat</div>
        <div className="boxs">Jaipur</div>
        </div>
      </div>
      
    </footer>
  );
}
