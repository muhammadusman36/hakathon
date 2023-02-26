import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useAuthContext } from "../../../context/AuthContext";




function EventsCard({ name, imageURL, id, link, location, title, description, time, date }) {
    const { getImgURL } = useAuthContext();
    const [url, setURL] = useState();
    useEffect(() => {
        getImgURL(imageURL).then((image) => setURL(image));
    }, []);

    return (
        <>
            <div className="card shadow-lg border-0 rounded-0">
                <img
                    src={url}
                    className="card-img-top img-fluid"
                    style={{ height: "15rem" }}
                    alt="Book Img"
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        <span className="fw-bold">user Name</span> {name}. <br /><span className="fw-bold">Location</span> {location}. <br /><span className="fw-bold">Date & Time</span> {date}  --  {time}. <br /><span className="fw-bold">Description</span> {description}
                    </p>
                    <Link className="btn btn-primary" to={`${link}`}>
                        View
                    </Link>
                </div>
            </div>
        </>
    );
}

export default EventsCard;
