import "./image.css";
import cameraIcon from "../svg/cameraIcon.svg";
import mapIcon from "../svg/mapIcon.svg";
function Image(props) {
  return (
    <div className="image">
      <div className="container2">
        <div className="photo-container">
          <img className="photo" src={props.photo} alt="" />
          <div className="text">
            <p className="text-label">
              {" "}
              <img className="icon1" src={cameraIcon} alt="" /> {props.location}
            </p>
            <p className="text-label">
              <img className="icon2" src={mapIcon} alt="" />
              {props.camera}
            </p>
            <p className="tag">{props.tag}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image;
