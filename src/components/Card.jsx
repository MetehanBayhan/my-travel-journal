import react from "react"
import { MdLocationOn } from 'react-icons/md';

export default function Card(props) {
  const {imageUrl, location, title, startDate, endDate, description, googleMapsUrl} = props
  return (
      <div className="card--content container">
        <img className="card--img" src={imageUrl} alt="" />
        <div>
          <div className="card--location-wrapper">
            <MdLocationOn className="card--location-icon"/>
            <span className="card--location">
              {location.toUpperCase()}
            </span>
            <a href={googleMapsUrl} className="card--location-link" target="_blank">View on Google Maps</a>
          </div>
          <h2 className="card--location-title">{title}</h2>
          <span className="card--location-date">{startDate} - {endDate}</span>
          <p className="card--location-desc">{description}</p>
        </div>
      </div>
  )
}