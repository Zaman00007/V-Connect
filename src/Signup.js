import React from "react";
import { useForm } from "react-hook-form";
import "./Signup.css"; // Import your CSS file

function Signup({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("password", data.password);
      formData.append("profilePic", data.profilePic[0]);

      const response = await fetch("http://localhost:8800/users", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Signup successful");
        onClose();
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup", error);
    }
  };

  return (
    <div className="DialogOverlay">
      <div className="DialogBox">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label">
            Username:
            <input
              className="input"
              {...register("username", { required: "Required" })}
            />
            {errors.username && errors.username.message}
          </label>
          <label className="label">
            Password:
            <input
              className="input"
              type="password"
              {...register("password", { required: "Required" })}
            />
            {errors.password && errors.password.message}
          </label>
          <label className="label">
            Profile Picture:
            <input
              className="input"
              type="file"
              accept="image/*"
              {...register("profilePic", { required: "Required" })}
            />
            {errors.profilePic && errors.profilePic.message}
          </label>
          <div className="buttons">
            <input type="submit" className="submit" />
            <button className="button" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
