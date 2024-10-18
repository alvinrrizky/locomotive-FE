import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ListLocomotive = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    navigate(`/detail/${data.locomotiveCode}`);
  };

  return (
    <Button
      onClick={handleClick}
      sx={{
        p: "7px 0",
        width: "100%",
        m: "10px 0",
        backgroundColor: "#e5e5e5",
        borderRadius: "5px",
      }}
    >
      <Typography sx={{ color: "#000000" }}>
        {data.locomotiveCode.replace(/_/g, "\u00A0")}
      </Typography>
    </Button>
  );
};

ListLocomotive.propTypes = {
  data: PropTypes.shape({
    locomotiveCode: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListLocomotive;
