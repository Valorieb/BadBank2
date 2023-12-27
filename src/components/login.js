// src/components/Login.js
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Card, TextField, Typography } from "@mui/material";
import { auth } from "../firebase";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Sign in with Firebase
      await auth.signInWithEmailAndPassword(data.email, data.password);

      // Redirect to another page after successful login
      history.push("/dashboard");
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <div className="full-screen bg-login">
      <Card sx={{ padding: "10px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h4">Login</Typography>

          <TextField
            label="Email"
            sx={{ margin: 1 }}
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <TextField
            type="password"
            label="Password"
            sx={{ margin: 1 }}
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <span>{errors.password.message}</span>}

          <Button type="submit" variant="contained" sx={{ margin: 2 }}>
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};
