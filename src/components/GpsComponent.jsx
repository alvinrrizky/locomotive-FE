import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const GpsComponent = ({ title, value }) => {
  return (
    <Box
      backgroundColor="#f2f2f2"
      height={120}
      width={320}
      borderRadius={5}
      p={3}
    >
      <Typography variant="h6" fontSize={40}>
        {title}
      </Typography>
      <Typography variant="h3" fontSize={25}>
        {value}
      </Typography>
    </Box>
  );
};

GpsComponent.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default GpsComponent;
