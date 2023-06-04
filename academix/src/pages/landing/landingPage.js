import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import { TextField, Container } from "@mui/material";


export default function LandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://academix-api.onrender.com/api/v1/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      if (response.ok) {
        // Signup successful
        console.log("Signup successful");
      } else {
        // Signup failed
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <Container
      maxWidth="sm"
      sx={{
        background: "#eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 4,
      }}
    >
      <form
        onSubmit={handleSubmit}
        sx={{
          background: "#eee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 4,
        }}
      >
        <TextField
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          variant="standard"
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ display: "flex", width: "50%" }}
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
}
