import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import WarningComponent from "./WarningComponent";

const StatusLocomotive = ({ overheat, brake, vibration }) => {
  return (
    <Box sx={{ padding: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
      <Typography
        variant="h6"
        sx={{
          marginBottom: 2,
          fontWeight: "bold",
          color: "#333",
          textAlign: "center",
        }}
      >
        Status Warning
      </Typography>
      <Box gap={2} display="flex" flexDirection="column">
        <WarningComponent teks="Overheat" value={overheat} />
        <WarningComponent teks="Brake Pressure" value={brake} />
        <WarningComponent teks="Vibration" value={vibration} />
      </Box>
    </Box>
  );
};

StatusLocomotive.propTypes = {
  overheat: PropTypes.bool.isRequired,
  brake: PropTypes.bool.isRequired,
  vibration: PropTypes.bool.isRequired,
};

export default StatusLocomotive;
