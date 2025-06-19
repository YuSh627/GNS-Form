import { Box, Typography } from "@mui/material";
import useIsMobile from "../hooks/useIsMobile";

const Header = () => {
  const isMobile = useIsMobile();
  return (
    <Box sx={{ textAlign: "center", pt: 5 }}>
      <Typography
        variant={isMobile ? "h3" : "h2"}
        sx={{ color: "green", fontWeight: "1000" }}>
        Greenfield National H.S. School
      </Typography>
      <Typography variant={isMobile ? "body1" : "h6"} color="text.secondary">
        P.O. Box 21771, Balaju, Sitapaila, Kathmandu
      </Typography>
      <Typography variant={isMobile ? "body1" : "h6"} color="text.secondary">
        Tel: 01-4302488, 4670816 | Email: gnc@greenfield.edu.np
      </Typography>
      <Box
        sx={{
          bgcolor: "green",
          height: "5rem",
          p: 2,
          mt: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{ fontWeight: "bold", color: "white" }}>
          {" "}
          ADMISSION APPLICATION FORM
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
