import React from "react";
import {Box,Card} from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ButtonA from "../../atom/Button";
import styled from "@emotion/styled";
import { Pay, Cancel } from "../../../constants";
import Typogrphy from "../../atom/TypoGraphy";

const StyledModalContent = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  backgroundColor: "white",
  border: "2px solid #000",
  boxShadow: "24px",
  padding: "16px",
  borderRadius: "10px",
});

const StyledShoppingCartButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

const StyledCard = styled(Card)({
  marginTop: "20px",
  paddingX:"20px",
});

interface Item {
  id: number;
  name: string;
  manufacturer: string;
  price: number;
  quantity: number;
}

interface KeepMountedModalProps {
  data: Item[];
}

export default function KeepMountedModal({ data }: KeepMountedModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const groupedItems: { [key: number]: Item } = {};
  data.forEach((item) => {
    if (!groupedItems[item.id]) {
      groupedItems[item.id] = { ...item, quantity: 1 };
    } else {
      groupedItems[item.id].quantity += 1;
    }
  });

  return (
    <div>
      <StyledShoppingCartButton onClick={handleOpen}>
        <ShoppingCartIcon /> <span>{data.length}</span>
      </StyledShoppingCartButton>
      <Modal keepMounted open={open} onClose={handleClose}>
        <>
          <StyledModalContent>
            {Object.values(groupedItems).map((item) => (
              <div key={item.id}>
                <StyledCard>
                  <Typogrphy
                    variant={undefined}
                    label={`Name : ${item.name}`}
                  />
                  <Typogrphy
                    variant={undefined}
                    label={`Manufacturer : ${item.manufacturer}`}
                  />
                  <Typogrphy
                    variant={undefined}
                    label={`Price : ${item.price}`}
                  />
                  <Typogrphy
                    variant={undefined}
                    label={`Quantity : ${item.quantity}`}
                  />
                </StyledCard>
              </div>
            ))}
            <Box display="flex" justifyContent="space-between" paddingTop="20px">
              <ButtonA
                variant={"contained"}
                label={Pay}
                color="success"
              ></ButtonA>
              <ButtonA
                variant={"contained"}
                label={Cancel}
                color="warning"
                onClick={handleClose}
              ></ButtonA>
            </Box>
          </StyledModalContent>
        </>
      </Modal>
    </div>
  );
}
