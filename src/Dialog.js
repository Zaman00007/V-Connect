// Dialog.js
import React from "react";
import { useForm } from "react-hook-form";
import "./Dialog.css";

function Dialog({ onClose }) {
  //   const { register, handleSubmit, errors } = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   const onSubmit = () => {
  //     // Handle form submission logic here
  //     console.log("Form submitted:");
  //     // Close the dialog after form submission
  //     onClose();
  //   };
  const onSubmit = (values) => {
    console.log(values);
    console.log("Form Submitted");
    onClose();
  };

  return (
    <div className="DialogOverlay">
      <div className="DialogBox">
        <h2>Invite Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Event Name :
            <input
              name="eventName"
              autoComplete="off"
              {...register("eventName", {
                required: "Required",
              })}
            />
            {errors.eventName && errors.eventName.message}
          </label>
          <label>
            Event Date :
            <input
              name="eventDate"
              type="date"
              autoComplete="off"
              {...register("eventDate", {
                required: "Required",
              })}
            />
            {errors.eventDate && errors.eventDate.message}
          </label>
          <label>
            Event Time :
            <input
              name="eventTime"
              type="time"
              autoComplete="off"
              {...register("eventTime", {
                required: "Required",
              })}
            />
            {errors.eventTime && errors.eventTime.message}
          </label>
          <div className="buttons">
            <input type="submit" className="submit" />
            <button onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Dialog;
