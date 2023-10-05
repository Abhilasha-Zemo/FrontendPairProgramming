import { SxProps, Typography } from '@mui/material';

interface TypogrphyProps {
  variant:
    | "body1"
    | undefined;
  label: string | number;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
  | "warning";
  style?: SxProps;
}

const Typogrphy = ({variant, label, color} : TypogrphyProps) => {
  return (
    <Typography variant={variant} color={color}>
      {label}
    </Typography>
  );
}

export default Typogrphy
