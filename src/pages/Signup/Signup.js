import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Form from "../../components/Form/Form";
import FormInput from "../../components/FormInput/FormInput";

const Signup = () => {
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
            <Form>
              <FormInput
                label="User Name"
                type="text"
                name="username"
                placeholder="user name"
              />
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
              <FormInput
                label="Confirm Password"
                type="password"
                name="cpassword"
                placeholder="confirm password"
              />
              <Box mt={2}>
                <Button size="small" fullWidth type="submit">
                  Sign Up
                </Button>
              </Box>
            </Form>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Signup;
