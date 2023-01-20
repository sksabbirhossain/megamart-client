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

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("not match");
    }
    //signup
    fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          navigate("/signin");
          toast.success("Signup Successfull");
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
          <Typography fontWeight={700}>Create Your Account</Typography>
          <Divider />
          <Box py={1}>
            <Form onSubmit={handleSignup}>
              <FormInput
                label="User Name"
                type="text"
                name="name"
                placeholder="user name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
              <FormInput
                label="Confirm Password"
                type="password"
                name="cpassword"
                placeholder="confirm password"
                required
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
              />
              <Box mt={2}>
                <Button size="small" fullWidth type="submit">
                  Sign Up
                </Button>
              </Box>
            </Form>
          </Box>
          <Typography fontSize={15}>
            You have allready an account?
            <Link to="/signin" style={{ color: "green" }}>
              {" "}
              login you account
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Signup;
