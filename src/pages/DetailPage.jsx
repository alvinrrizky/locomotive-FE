import { useEffect, useState } from "react";
import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import { getLocomotiveByCode } from "../apis/locomotiveApi";
import ParamLocomotive from "../components/paramLocomotive";
import StatusLocomotive from "../components/statusLocomotive";
import GpsLocomotive from "../components/GpsLocomotive";

const DetailPage = () => {
  const { code } = useParams();
  const [detail, setDetail] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    const fetchLocomotiveDetail = async () => {
      const response = await getLocomotiveByCode(code);
      const respLocomotives = response;
      setDetail(respLocomotives || []);
    };

    fetchLocomotiveDetail();
    const intervalId = setInterval(fetchLocomotiveDetail, 10000);
    return () => clearInterval(intervalId);
  }, [code]);

  return (
    <Box sx={{ padding: isMobile ? "0px" : "24px" }}>
      <Typography
        variant={isMobile ? "h4" : "h2"}
        sx={{ fontWeight: "500", textAlign: isMobile ? "center" : "left" }}
      >
        Detail of {code.replace(/_/g, "\u00A0")}
      </Typography>
      <Box>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{
            fontWeight: "500",
            mt: "5px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Condition Locomotive
        </Typography>
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          justifyContent="center"
          alignItems={isMobile ? "center" : "flex-start"}
          gap={isMobile ? 2 : isTablet ? 5 : 15}
        >
          <Box
            display="flex"
            flexDirection={isMobile ? "row" : "row"}
            flexWrap={isMobile ? "wrap" : "nowrap"}
            justifyContent={isMobile ? "center" : "flex-start"}
            gap={isMobile ? 2 : 5}
            sx={{ mt: isMobile ? "15px" : "30px" }}
          >
            <ParamLocomotive
              color="#ff3b30"
              teks="Temp"
              value={detail.engineTemp}
            />
            <ParamLocomotive
              color="#29ff5b"
              teks="Vibration"
              value={detail.vibrationFreq}
            />
            <ParamLocomotive
              color="#f1ff52"
              teks="Speed"
              value={detail.speed}
            />
          </Box>
          <StatusLocomotive
            overheat={detail.overheatWarning}
            brake={detail.brakePressureWarning}
            vibration={detail.vibrationWarning}
          />
        </Box>
        <GpsLocomotive
          latitude={detail.gpsLatitude}
          longitude={detail.gpsLongitude}
          elevation={detail.gpsElevation}
        />
      </Box>
    </Box>
  );
};

export default DetailPage;
