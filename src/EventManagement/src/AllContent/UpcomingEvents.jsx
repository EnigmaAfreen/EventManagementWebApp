import React from "react";

const upcomingNewEvents = [
  {
    id: 1,
    name: "Tech Conference",
    date: "2024-09-15",
    location: "Delhi",
    description: "A conference about the latest in tech.",
  },
  {
    id: 2,
    name: "Music Festival",
    date: "2024-10-05",
    location: "LMumbai",
    description: "Enjoy live music from various artists.",
  },
  {
    id: 3,
    name: "Art Exhibition",
    date: "2024-11-20",
    location: "Kanpur",
    description: "An exhibition showcasing contemporary art.",
  },
];
const UpcomingEvents = () => {
  //   return (
  //     <div className="dashboard">
  //       <header className="dashboard-header">
  //         <h1>Event Management Dashboard</h1>
  //         <button className="add-event-button">Add New Event</button>
  //       </header>
  //       <section className="dashboard-summary">
  //         <div className="summary-card">
  //           <h3>Total Events</h3>
  //           <p>{upcomingNewEvents.length}</p>
  //         </div>
  //         <div className="summary-card">
  //           <h3>Next Event</h3>
  //           <p>{upcomingNewEvents[0]?.name || "None"}</p>
  //         </div>
  //       </section>
  //       <section className="events-calendar">
  //         <h2>Upcoming Events</h2>
  //         <div className="events-list">
  //           {upcomingNewEvents.map((event) => (
  //             <div className="event-card" key={event.id}>
  //               <h3 className="event-title">{event.name}</h3>
  //               <p className="event-date">
  //                 {new Date(event.date).toLocaleDateString()}
  //               </p>
  //               <p className="event-location">{event.location}</p>
  //               <p className="event-description">{event.description}</p>
  //             </div>
  //           ))}
  //         </div>
  //       </section>
  //     </div>
  //   );
  // };

  return (
    <div className="events-page">
      <header className="events-header">
        <h1>Upcoming Events</h1>
      </header>
      <div className="events-list">
        {upcomingNewEvents.map((event) => (
          <div className="event-card" key={event.id}>
            <h2 className="event-title">{event.name}</h2>
            <p className="event-date">
              {new Date(event.date).toLocaleDateString()}
            </p>
            <p className="event-location">{event.location}</p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
