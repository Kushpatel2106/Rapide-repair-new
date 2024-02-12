import "./Service.css";
import img1 from "./icons/1.jpg";
import img2 from "./icons/2.jpg";
import img3 from "./icons/3.jpg";
import img4 from "./icons/4.jpg";
import img5 from "./icons/5.jpg";
import img6 from "./icons/6.jpg";
import img7 from "./icons/7.jpg";
import img8 from "./icons/8.jpg";
import img9 from "./icons/9.jpg";

export default function Service() {
  return (
    <>
      <div>
        <h1 className="service-name">Car Services Available In Your Area</h1>
      </div>
      <div className="service">
        <div className="service-box1">
          <div className="box1">
            <div className="box">
              <img className="image" src={img1} alt="#" />
              <h2 className="icon">Tyres</h2>
            </div>
            <div className="box">
              <img className="image" src={img2} alt="#" />
              <h2 className="icon">Painting</h2>
            </div>
            <div className="box">
              <img className="image" src={img3} alt="#" />
              <h2 className="icon">Engain repair</h2>
            </div>
            <div className="box">
              <img className="image" src={img4} alt="#" />
              <h2 className="icon">Cleaning</h2>
            </div>
          </div>
          <div className="box-2">
            <div className="box">
              <img className="iamge" src={img5} alt="#" />
              <h2 className="icon">Batteries</h2>
            </div>
            <div className="box">
              <img className="image" src={img6} alt="#" />
              <h2 className="icon">Body parts</h2>
            </div>
            <div className="box">
              <img className="iamge" src={img9} alt="#" />
              <h2 className="icon">Engine Oil</h2>
            </div>
            <div className="box">
              <img className="image" src={img8} alt="#" />
              <h2 className="icon">Basic service</h2>
            </div>
          </div>
        </div>
        <div className="service-box2">
          <h1>Search shop near you</h1>
          <h4>get the best service near you</h4>
          <div>
            <from action="">
              <div className="form-group">
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="enter your loaction"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="type"
                  id="type"
                  placeholder="type of vehicle"
                />
              </div>
              <div>
                <button id="srh_btn">Search</button>
              </div>
            </from>
          </div>
        </div>
      </div>
    </>
  );
}
