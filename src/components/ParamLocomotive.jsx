import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme, useMediaQuery } from "@mui/material";

const ParamLocomotive = ({ color, teks, value }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  var unit = null;

  if (teks == "Temp") {
    unit = "°C";
  } else if (teks == "Vibration") {
    unit = "rpm";
  } else if (teks == "Speed") {
    unit = "km/h";
  }

  return (
    <Box
      sx={{
        border: `${isMobile ? "5px" : "10px"} solid ${color}`,
        height: isMobile ? "150px" : "200px",
        width: isMobile ? "150px" : "200px",
        borderRadius: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant={isMobile ? "subtitle1" : "h6"} sx={{ mb: 1 }}>
        {teks}
      </Typography>
      <Box display="flex" alignItems="baseline">
        <Typography variant={isMobile ? "h4" : "h3"} sx={{ mr: 1 }}>
          {value}
        </Typography>
        <Typography variant={isMobile ? "body2" : "body1"}>{unit}</Typography>
      </Box>
    </Box>
  );
};

ParamLocomotive.propTypes = {
  color: PropTypes.string.isRequired,
  teks: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ParamLocomotive;
