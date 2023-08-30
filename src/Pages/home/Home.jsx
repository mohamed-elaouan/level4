import { AddShoppingCart } from "@mui/icons-material";
import { Box, Container, Paper, Typography, IconButton, styled } from "@mui/material";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import { useTheme } from "@emotion/react";

const Home = () => {
  const theme= useTheme();
  return (
      <Container
        sx={{
          width: "500px",
          mt: 10,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            height: "80px",
            position: "relative",
            display: "flex",
            pt: "36px",
            mb: "30px",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingInline: "15px",
          }}
        >
          <IconButton sx={{ position: "absolute", top: 0, right: 0 }}>
            <ClearIcon sx={{ fontSize: "20px" }} />
          </IconButton>

          <Typography variant="h6" color="interet">
            GYM
          </Typography>
          <Typography variant="h6" sx={{ opacity: "0.8" }} color="interet">
            $100
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            height: "80px",
            position: "relative",
            display: "flex",
            pt: "36px",
            mb: "30px",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingInline: "15px",
          }}
        >
          <IconButton sx={{ position: "absolute", top: 0, right: 0 }}>
            <ClearIcon sx={{ fontSize: "20px" }} />
          </IconButton>

          <Typography variant="h6" color="interet">
            GYM
          </Typography>
          <Typography variant="h6" sx={{ opacity: "0.8" }} color="interet">
            $100
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            height: "80px",
            position: "relative",
            display: "flex",
            pt: "36px",
            mb: "30px",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingInline: "15px",
          }}
        >
          <IconButton sx={{ position: "absolute", top: 0, right: 0 }}>
            <ClearIcon sx={{ fontSize: "20px" }} />
          </IconButton>

          <Typography variant="h6" color="interet">
            GYM
          </Typography>
          <Typography variant="h6" sx={{ opacity: "0.8" }} color="interet">
            $100
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            height: "80px",
            position: "relative",
            display: "flex",
            pt: "36px",
            mb: "30px",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingInline: "15px",
          }}
        >
          <IconButton sx={{ position: "absolute", top: 0, right: 0 }}>
            <ClearIcon sx={{ fontSize: "20px" }} />
          </IconButton>

          <Typography variant="h6" color="interet">
            GYM
          </Typography>
          <Typography variant="h6" sx={{ opacity: "0.8" }} color="interet">
            $100
          </Typography>
        </Paper>
        <Typography sx={{fontWeight:"600"}} color={theme.palette.FavCol.main} >Mohamed ELAouan</Typography>
      </Container>
  );
};

export default Home;
