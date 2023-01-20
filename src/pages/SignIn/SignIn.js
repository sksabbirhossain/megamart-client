import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "../../components/Form/Form";
import FormInput from "../../components/FormInput/FormInput";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    //signin
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data)
          JSON.stringify(localStorage.setItem("token", `Authorization ${data.token}`))
          navigate("/");
          toast.success("Login Successfull");
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };
  return (
    <Box mt={3}>
      <Container>
        <Paper
          elevation={3}
          sx={{
            width: { xs: "auto", sm: "350px" },
            marginX: "auto",
            padding: "15px",
          }}
        >
          <Typography fontWeight={700}>Login Your Account</Typography>
          <Divider />
          <Box py={1}>
            <Form onSubmit={handleSignin}>
              <FormInput
                label="User Email"
                type="email"
                name="email"
                placeholder="user email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormInput
                label="Password"
                type="password"
                name="password"
                placeholder="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Box mt={2}>
                <Button size="small" fullWidth type="submit">
                  Login
                </Button>
              </Box>
            </Form>
          </Box>
          <Typography fontSize={15}>
            You don't have an account?{" "}
            <Link to="/signup" style={{ color: "green" }}>
              create account
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignIn;
