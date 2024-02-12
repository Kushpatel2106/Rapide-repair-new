import "./Compaines.css";
import img1 from "./CompainesLogo/1.jpg";
import img2 from "./CompainesLogo/2.jpg";
import img3 from "./CompainesLogo/3.jpg";
import img4 from "./CompainesLogo/4.jpg";

export default function Compaines() {
  return (
    <>
      <h1 className="compaines-name">Spare parts</h1>
      <div className="contaier">
        <div className="compaine-box">
          <img className="image" src={img1} alt="#" />
        </div>
        <div className="compaine-box">
          <img className="image" src={img2} alt="#" />
        </div>
        <div className="compaine-box">
          <img className="image" src={img3} alt="#" />
        </div>
        <div className="compaine-box">
          <img className="image" src={img4} alt="#" />
        </div>
      </div>
    </>
  );
}
