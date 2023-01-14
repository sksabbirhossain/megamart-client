import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import FormInput from "../../components/FormInput/FormInput";

const SignIn = () => {
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
            <Form>
              <FormInput
                label="User Email"
                type="email"
                name="email"
                placeholder="user email"
              />
              <FormInput
                label="Password"
                type="password"
                name="password"
                placeholder="password"
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
            <Link to="/Signup" style={{ color: "green" }}>
              create account
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignIn;
