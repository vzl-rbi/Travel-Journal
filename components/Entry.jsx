<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"; // import the actual icon

=======
>>>>>>> 205b25131e82060b1760b217876a5708829d9965
function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
<<<<<<< HEAD
        <img className="main-image" src={props.image} alt={props.alt} />
      </div>
      <div className="info-container">
        <img className="marker" src={props.marker} alt="map marker icon" />
        <span className="country">{props.country}</span>
        <a href={props.googleMapLink}> View on Google Maps</a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="trip-dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
=======
        <img
          className="main-image"
          src={props.entry.img.src}
          alt={props.entry.img.alt}
        />
      </div>
      <div className="info-container">
        <img
          className="marker"
          src="../images/marker.png"
          alt="map marker icon"
        />
        <span className="country">{props.entry.country}</span>
        <a href={props.entry.googleMapsLink} target="_blank">
          View on Google Maps
        </a>
        <h2 className="entry-title">{props.entry.title}</h2>
        <p className="trip-dates">{props.entry.dates}</p>
        <p className="entry-text">{props.entry.text}</p>
>>>>>>> 205b25131e82060b1760b217876a5708829d9965
      </div>
    </article>
  );
}
export default Entry;
