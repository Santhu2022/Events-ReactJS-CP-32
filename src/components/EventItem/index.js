import './index.css'

const EventItem = props => {
  const {eventDetails, activeEventId, updateActiveEvent} = props
  const {imageUrl, name, location, id, registrationStatus} = eventDetails

  const imageClassName =
    id === activeEventId ? 'event-image active-image' : 'event-image'

  const onClickImage = () => {
    updateActiveEvent(id, registrationStatus)
  }

  return (
    <li className="event-item">
      <button
        type="button"
        className="event-image-button"
        onClick={onClickImage}
      >
        <img src={imageUrl} alt="event" className={imageClassName} />
      </button>

      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
