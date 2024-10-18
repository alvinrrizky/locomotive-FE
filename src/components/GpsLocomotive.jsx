import { Box, Typography } from "@mui/material";
import GpsComponent from "./GpsComponent";
import PropTypes from "prop-types";

const GpsLocomotive = ({ latitude, longitude, elevation }) => {
  return (
    <Box>
      <Typography variant="h6" mt={5}>
        GPS Locomotive
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        gap={2}
        mt={2}
      >
        <GpsComponent title="latitude" value={latitude} />
        <GpsComponent title="Longitude" value={longitude} />
        <GpsComponent title="Elevation" value={elevation} />
      </Box>
    </Box>
  );
};

GpsLocomotive.propTypes = {
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  elevation: PropTypes.string.isRequired,
};

export default GpsLocomotive;
