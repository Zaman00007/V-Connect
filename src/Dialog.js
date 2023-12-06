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
            Event Name
          <input
            name="message"
            // type="submit"
            autoComplete="off"
            {...register("message", {
              required: "Required",
            })}
          />
          {errors.message && errors.message.message}
          <input type="submit"/>
        </label>

        </form>

        <button className="DialogCloseButton" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Dialog;
