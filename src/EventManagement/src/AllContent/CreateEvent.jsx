import React, { useState } from "react";
import { createEvent } from "./eventSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateEvent = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    date: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const { name, address, date, description } = formData;
  const newErrors = {};
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(
        createEvent({
          eventName: formData.name,
          eventDate: formData.date,
          eventAddress: formData.address,
          eventDesc: formData.description,
        })
      ).unwrap();
      if (result) {
        navigate("/eventDashBoard");
      }

      // Handle success (e.g., redirect or show a success message)
      console.log("Event created successfully:", result);
    } catch (error) {
      // Handle error
      console.error("Error creating event:", error);
    }

    if (!name) newErrors.name = "Event name is required";
    if (!address) newErrors.address = "Event address is required";
    if (!date) newErrors.date = "Event date is required";
    if (!description) newErrors.description = "Event description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      onSubmit(formData);
      setFormData({
        name: "",
        address: "",
        date: "",
        description: "",
      });
    }
  };

  return (
    <div className="create-event-form">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Event Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Event address:</label>
          <input
            type="address"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="date">Event date:</label>
          <input
            type="text"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <p className="error">{errors.date}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="description">Event Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>
        <button type="submit" className="submit-button">
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
