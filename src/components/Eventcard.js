import React from "react";
import '../style/Eventcard.css';

const Eventcard = () => {
    return (
        <div class="event-card">
            <div class="event-image">
                <img src="event-image.jpg" alt="Event Image" />
            </div>
            <div class="event-details">
                <h3 class="event-title">Tech Meetup</h3>
                <p class="event-date">Date: July 10, 2023</p>
                <p class="event-location">Location: City Hall</p>
                <a href="#" class="event-link">Learn More</a>
            </div>
        </div>

    )
}

export default Eventcard;