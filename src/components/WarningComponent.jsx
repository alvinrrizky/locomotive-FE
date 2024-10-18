import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const WarningComponent = ({ teks, value }) => {
  return (
    <Box
      backgroundColor={value ? "green" : "red"}
      p="5px 50px"
      borderRadius={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="h6"
        fontWeight={600}
        color="white"
        textAlign="center"
      >
        {teks}
      </Typography>
    </Box>
  );
};

WarningComponent.propTypes = {
  teks: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
};

export default WarningComponent;
