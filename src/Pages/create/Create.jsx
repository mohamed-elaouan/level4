import { Box, InputAdornment, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { ArrowBack, ArrowBackIos, ArrowBackIosNewOutlined, ArrowCircleDown, ArrowForwardIos, ChevronRight, KeyboardArrowRight } from "@mui/icons-material";
import styled from "@emotion/styled";
import { purple, teal } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(teal[600]),
  backgroundColor: theme.palette.primary,
  "&:hover": {
    backgroundColor: theme.palette.primary[300],
    scale: "1.05",
  },
}));


const Create = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "360px",
        mt: "60px",
        alignItems: "center",
      }}
    >
      <TextField
        label="Transaction Title"
        id="filled-start-adornment"
        sx={{ m: 1, width: "100%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">&#128073;</InputAdornment>
          ),
        }}
        variant="filled"
      />
      <TextField
        label="Transaction Title"
        id="filled-start-adornment"
        sx={{ m: 1, width: "100%" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      
        <ColorButton variant="contained">Submit <KeyboardArrowRight/></ColorButton>
      
    </Box>
  );
};

export default Create;
