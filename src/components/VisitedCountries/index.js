import './index.css'

const VisitedCountries = props => {
  const {visitedDetails, removeCountry} = props
  const {id, imageUrl, name} = visitedDetails

  const onClickRemove = () => {
    removeCountry(id)
  }

  return (
    <li className="visited-details">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="name-container">
        <p className="country-name">{name}</p>
        <button className="remove-btn" type="button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
