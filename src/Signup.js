import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Signup.css";
import App from "./App";
import { useHistory } from "react-router-dom";

function Signup() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onClose = async () =>{
    history.push("/");
  }

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("password", data.password);
      formData.append("gender", data.gender);
      formData.append("age", data.age);
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
            {errors.username && (
              <span className="error">{errors.username.message}</span>
            )}
          </label>
          <label className="label">
            Password:
            <input
              className="input"
              type="password"
              {...register("password", { required: "Required" })}
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
          </label>
          <label className="label">
            Gender:
            <select
              className="input"
              {...register("gender", {
                required: { value: true, message: "Required" },
                validate: (value) => value !== "default" || "Please select a gender",
              })}
              defaultValue="default"
            >
              <option value="default" disabled hidden>
                Choose Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <span className="error">{errors.gender.message}</span>
            )}
          </label>
          <label className="label">
            Age:
            <input
              className="input"
              type="number"
              {...register("age", { required: "Required" })}
            />
            {errors.age && <span className="error">{errors.age.message}</span>}
          </label>
          <label className="label">
            Profile Picture:
            <input
              className="input"
              type="file"
              accept="image/*"
              {...register("profilePic", { required: "Required" })}
            />
            {errors.profilePic && (
              <span className="error">{errors.profilePic.message}</span>
            )}
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

