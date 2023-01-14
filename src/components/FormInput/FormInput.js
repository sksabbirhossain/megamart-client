import { Box } from "@mui/material";
import React from "react";
import { Input } from "../../styles/common/Input";

const FormInput = ({ label, ...rest }) => {
  return (
    <Box my={1}>
      <label htmlFor="">{label}</label>
      <Box>
        <Input {...rest} />
      </Box>
    </Box>
  );
};

export default FormInput;
