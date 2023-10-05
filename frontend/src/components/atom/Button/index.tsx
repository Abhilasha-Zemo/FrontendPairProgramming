import { Button } from "@mui/material";

interface ButtonAProps {
  variant: "contained" | "outlined" | "text";
  label?: string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  onClick?: () => void;
}

const ButtonA = ({ variant, label, color, onClick }: ButtonAProps) => {
  return (
    <Button variant={variant} color={color} onClick={onClick}>
      {label}
    </Button>
  );
};

export default ButtonA;
