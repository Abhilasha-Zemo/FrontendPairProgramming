import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import BuyCard from "../../molecules/Card";
import { data } from "../../../constants";
import TextField from "../../atom/TextField";
import KeepMountedModal from "../ModalBox/";
import  styled  from "@emotion/styled";
import Typogrphy from "../../atom/TypoGraphy";

interface BuyCardProps {
  id: number;
  name: string;
  manufacturer: string;
  price: number;
}

const StyledDataGridContainer = styled(Box)({
  width: "90%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "50px",
  justifyContent: "space-between",
});

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems:"center",
  
});

const DataGrid = () => {
  const [query, setQuery] = useState("");
  const [tableData, setTableData] = useState(data);
  const [selectedItems, setSelectedItems] = useState<BuyCardProps[]>([]);

  const filteredData = (query: string) => {
    return data.filter((item) => item.name.toLowerCase().includes(query));
  };

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    const filteredTableData = filteredData(searchQuery);
    setTableData(filteredTableData);
  };

const addToCart = (item: BuyCardProps) => {
  setSelectedItems((prevItems) => [...prevItems, item]);
};

  return (
    <StyledDataGridContainer>
      <StyledBox>
        <Typogrphy
          variant={"body1"}
          label={"Pair Programing Assignment"}
          color="red"
        ></Typogrphy>
      </StyledBox>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <TextField onChange={search} variant={"outlined"} value={query} />
        <KeepMountedModal data={selectedItems} />
      </Box>
      <Grid container spacing={2}>
        {tableData.map((item: BuyCardProps) => {
          return (
            <Grid item xs={3} key={item.id}>
              <BuyCard
                id={item.id}
                name={item.name}
                manufacturer={item.manufacturer}
                price={item.price}
                buynowText={"Add to Cart"}
                handleClick={() => addToCart(item)}
              />
            </Grid>
          );
        })}
      </Grid>
    </StyledDataGridContainer>
  );
};

export default DataGrid;
