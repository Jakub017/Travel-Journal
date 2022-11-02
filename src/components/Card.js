function Card(props) {
    return (
        <div className="card">
            <div className="image-wrapper">
                <img src={props.imageUrl} alt="" />
            </div>
            <div className="card-info">
                <div className="location">
                    <h4>{props.location}</h4>
                    <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h3>{props.startDate} - {props.endDate}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card