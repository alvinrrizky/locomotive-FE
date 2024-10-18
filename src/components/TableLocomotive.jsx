import { Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

const TableLocomotive = ({ locomotives }) => {
  const columns = [
    { field: "locomotiveCode", headerName: "Locomotive Code", width: 150 },
    {
      field: "vibrationWarning",
      headerName: "Vibration Warning",
      width: 150,
      renderCell: (params) => (
        <Chip
          label={params.value ? "Yes" : "No"}
          color={params.value ? "error" : "success"}
          size="small"
        />
      ),
    },
    {
      field: "overheatWarning",
      headerName: "Overheat Warning",
      width: 150,
      renderCell: (params) => (
        <Chip
          label={params.value ? "Yes" : "No"}
          color={params.value ? "error" : "success"}
          size="small"
        />
      ),
    },
    {
      field: "brakePressureWarning",
      headerName: "Brake Pressure Warning",
      width: 190,
      renderCell: (params) => (
        <Chip
          label={params.value ? "Yes" : "No"}
          color={params.value ? "error" : "success"}
          size="small"
        />
      ),
    },
    {
      field: "brakePressureValue",
      headerName: "Brake Pressure Value (bar)",
      width: 220,
    },
    { field: "doorStatus", headerName: "Door Status", width: 120 },
    { field: "engineTemp", headerName: "Engine Temp (°C)", width: 150 },
    { field: "gpsLatitude", headerName: "GPS Latitude", width: 120 },
    { field: "gpsLongitude", headerName: "GPS Longitude", width: 130 },
    { field: "gpsElevation", headerName: "GPS Elevation", width: 120 },
    { field: "vibrationFreq", headerName: "Vibration Freq", width: 120 },
    {
      field: "vibrationAmplitude",
      headerName: "Vibration Amplitude",
      width: 180,
    },
    { field: "speed", headerName: "Speed", width: 100 },
    { field: "timestamp", headerName: "Timestamp", width: 180 },
  ];
  return (
    <DataGrid
      rows={locomotives}
      columns={columns}
      disableSelectionOnClick
      autoHeight
      sx={{ width: "76vw" }}
      getRowId={(row) => row.locomotiveCode}
      hideFooter={true}
    />
  );
};

TableLocomotive.propTypes = {
  locomotives: PropTypes.arrayOf(
    PropTypes.shape({
      locomotiveCode: PropTypes.string.isRequired,
      vibrationWarning: PropTypes.bool,
      overheatWarning: PropTypes.bool,
      brakePressureWarning: PropTypes.bool,
      brakePressureValue: PropTypes.number,
      doorStatus: PropTypes.string,
      engineTemp: PropTypes.number,
      gpsLatitude: PropTypes.number,
      gpsLongitude: PropTypes.number,
      gpsElevation: PropTypes.number,
      vibrationFreq: PropTypes.number,
      vibrationAmplitude: PropTypes.number,
      speed: PropTypes.number,
      timestamp: PropTypes.string,
    })
  ).isRequired,
};

export default TableLocomotive;
