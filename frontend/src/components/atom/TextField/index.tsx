import React from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface TextFieldProps {
  variant: "filled" | "outlined" | "standard";
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  value: string;
}

const Textfield = ({ variant, onChange, value }: TextFieldProps) => {
  return (
    <TextField
      id="outlined-basic"
      variant={variant}
      onChange={onChange}
      value={value}
      InputProps={{
        endAdornment: <SearchIcon />,
      }}
    />
  );
};

export default Textfield;
