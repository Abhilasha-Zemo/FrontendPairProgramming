import Card from "@mui/material/Card";
import Typogrphy from "../../atom/TypoGraphy";
import ButtonA from "../../atom/Button";
import styled from "@mui/material/styles/styled";

interface BuyCardProps {
  id?: number;
  name: string;
  manufacturer: string;
  price: number;
  buynowText?: string;
  handleClick?: () => void;
}

const StyledCard = styled(Card)({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  paddingTop: "20px",
  paddingBottom: "10px",
  borderRadius: "4px",
  position: "relative",
  cursor: "pointer",
});

const BuyCard = ({
  name,
  manufacturer,
  price,
  buynowText,
  handleClick,
}: BuyCardProps) => {
  return (
    <>
      <StyledCard>
        <Typogrphy variant={undefined} label={name}></Typogrphy>
        <Typogrphy variant={undefined} label={manufacturer}></Typogrphy>
        <Typogrphy variant={undefined} label={price}></Typogrphy>
        <ButtonA
          variant={"text"}
          label={buynowText}
          onClick={handleClick}
        ></ButtonA>
      </StyledCard>
    </>
  );
};

export default BuyCard;

//nagarwala