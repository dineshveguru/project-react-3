import "./styles.css";
function Card(props) {
  console.log(props);
  return (
    <div className="card--container">
      <div>
        <img
          src={require(`./images/${props.img}`)}
          className="card--image"
        ></img>
      </div>
      <div>
        <div className="location--block">
          <img src={require("./images/loc.png")}></img>
          <p>{props.location.toUpperCase()}</p>
        </div>
        <a href={props.googleMapsUrl}>View on Google Maps</a>
        <h1>{props.title}</h1>
        <h4>{`${props.startDate} - ${props.endDate}`}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
