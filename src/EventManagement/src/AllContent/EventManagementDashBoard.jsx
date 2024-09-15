import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { deleteEvent, getAllEvents } from "./eventSlice";
import CreateEvent from "./CreateEvent";
// import { getAllEvents } from "./eventSlice";

const EventManagementDashBoard = (props) => {
  const { admin, participant } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { allEventData, status } = useSelector((state) => state.event);
  //   const location = useLocation();
  // const [adminFlow, setAdminFlow] = useState(admin);
  const [createEvent, setCreateEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDeleteEvent = async (name) => {
    const result = await dispatch(
      deleteEvent({
        param: name,
      })
    ).unwrap();
    if (result) {
      getAll();
    }
  };

  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Tech Conference",
      date: "2024-09-15",
      location: "Delhi",
      seatsLeft: 0,
    },
    {
      id: 2,
      name: "Music Festival",
      date: "2024-10-05",
      location: "Noida",
      seatsLeft: 8,
    },
    {
      id: 3,
      name: "Art Exhibition",
      date: "2024-11-20",
      location: "San Francisco",
      seatsLeft: 11,
    },
    {
      id: 4,
      name: "Jokes",
      date: "2024-10-05",
      location: "Kanput",
      seatsLeft: 10,
    },
    {
      id: 5,
      name: "Singing",
      date: "2024-11-20",
      location: "Bengaluru",
      seatsLeft: 10,
    },
    {
      id: 6,
      name: "Stand Up",
      date: "2024-11-20",
      location: "Mysore",
      seatsLeft: 11,
    },
  ]);
  const getAll = () => {
    dispatch(getAllEvents({}));
  };
  useEffect(() => getAll(), []);

  const handleEventClick = (event) => {
    if (event.seatsLeft > 0) {
      setSelectedEvent(event);
      setIsModalVisible(true);
      setErrorMessage(""); // Clear any previous error messages
    } else {
      setErrorMessage("Limit Exceeded");
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedEvent(null);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Update seatsLeft count
    if (selectedEvent && selectedEvent.seatsLeft > 0) {
      setEvents((prevEvents) =>
        prevEvents.map((ev) =>
          ev.id === selectedEvent.id
            ? { ...ev, seatsLeft: ev.seatsLeft - 1 }
            : ev
        )
      );
      handleCloseModal(); // Close the modal after submission
    }
  };

  const handleCreateEvent = () => {
    console.log("jii");
    setCreateEvent(true);
  };
  if (createEvent) {
    return <CreateEvent setCreateEvent={setCreateEvent} getAll={getAll} />;
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Event Manager</h2>
        <nav>
          <ul>
            <li>
              <a href="#dashboard">Dashboard</a>
            </li>
            <li>
              <Link to="/upcomingEvents">New Upcoming Events</Link>
            </li>
            <li>
              <a href="#settings">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="main-content">
        <header className="header">
          <h1>Event Dashboard</h1>
          {admin ? (
            <button
              className="add-event-button"
              //onClick={() => navigate("/createEvent")}
              onClick={handleCreateEvent}
            >
              Add Event
            </button>
          ) : (
            ""
          )}
        </header>
        <div className="event-list">
          {/* {!adminFlow
            ? events.map((event) => (
                <div
                  className="event-card"
                  key={event.id}
                  onClick={() => handleEventClick(event)}
                >
                  <h3>{event.name}</h3>
                  <p>Date: {event.date}</p>
                  <p>Location: {event.location}</p>
                  <p>
                    Seats Left:{" "}
                    <span style={{ color: "red" }}>{event.seatsLeft}</span>
                  </p>
                </div>
              ))
            : ""} */}

          {admin ? (
            allEventData && allEventData.length > 0 ? (
              allEventData.map((event, index) => (
                <div
                  className="event-card"
                  key={index} // Use a unique key if possible
                >
                  <h3>{event.eventName || "No Name"}</h3>
                  <p>Date: {event.eventDate || "Unknown Date"}</p>
                  <p>Location: {event.eventAddress || "No Address"}</p>
                  <p>Description: {event.eventDesc || "No Description"}</p>
                  <div className="button-container">
                    {
                      <button
                        className="bottom-button"
                        onClick={() => handleDeleteEvent(event["eventName"])}
                      >
                        Delete Event
                      </button>
                    }
                  </div>
                </div>
              ))
            ) : (
              <p>No events to display</p>
            )
          ) : participant ? (
            events.map((event) => (
              <div
                className="event-card"
                key={event.id}
                onClick={() => handleEventClick(event)}
              >
                <h3>{event.name}</h3>
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>
                <p>
                  Seats Left:{" "}
                  <span style={{ color: "red" }}>{event.seatsLeft}</span>
                </p>
              </div>
            ))
          ) : (
            ""
          )}

          {isModalVisible && selectedEvent && (
            <Modal
              isVisible={isModalVisible}
              onClose={handleCloseModal}
              content={
                <div className="form-container">
                  <h2>Register for {selectedEvent.name}</h2>
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact">Contact:</label>
                      <input
                        type="text"
                        id="contact"
                        name="contact"
                        placeholder="Your contact number"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    <button type="submit">Submit</button>
                  </form>
                </div>
              }
            />
          )}
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

EventManagementDashBoard.propTypes = {
  admin: PropTypes.bool,
  participant: PropTypes.bool,
};

export default EventManagementDashBoard;
