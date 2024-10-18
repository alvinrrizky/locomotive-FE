import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import ListLocomotive from "../components/ListLocomotive";
import { useEffect, useState } from "react";
import { getLocomotiveList } from "../apis/locomotiveApi";
import TableLocomotive from "../components/TableLocomotive";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardPage = () => {
  const [locomotives, setLocomotives] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    const fetchLocomotiveList = async () => {
      const response = await getLocomotiveList();
      const formattedLocomotives = response.dataList.map((locomotive) => ({
        ...locomotive,
        timestamp: formatTimestamp(locomotive.timestamp),
      }));
      setLocomotives(formattedLocomotives || []);
    };

    fetchLocomotiveList();
    const intervalId = setInterval(fetchLocomotiveList, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <Box sx={{ p: isMobile ? 2 : 3 }}>
      <Typography
        variant={isMobile ? "h5" : "h2"}
        sx={{ fontWeight: "500", mb: 2 }}
      >
        Dashboard Locomotive
      </Typography>
      <Box
        display="flex"
        flexDirection={isMobile || isTablet ? "column" : "row"}
        sx={{ mt: "5px", width: "100%", gap: "2%" }}
      >
        <Box flex={3} sx={{ mb: isMobile || isTablet ? 3 : 0 }}>
          <Typography variant={isMobile ? "subtitle1" : "h6"}>
            Monitoring Graph
          </Typography>
          <div style={{ width: "100%", height: isMobile ? "250px" : "420px" }}>
            <Bar
              data={{
                labels: locomotives.map((loco) => loco.locomotiveCode),
                datasets: [
                  {
                    label: "Engine Temperature",
                    data: locomotives.map((loco) => loco.engineTemp),
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                  },
                  {
                    label: "Speed",
                    data: locomotives.map((loco) => loco.speed),
                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                  },
                  {
                    label: "Brake Pressure",
                    data: locomotives.map((loco) => loco.brakePressureValue),
                    backgroundColor: "rgba(75, 192, 192, 0.5)",
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    title: {
                      display: !isMobile,
                      text: "Value",
                    },
                  },
                  x: {
                    title: {
                      display: !isMobile,
                      text: "Locomotive Code",
                    },
                  },
                },
                plugins: {
                  legend: {
                    position: isMobile ? "bottom" : "top",
                  },
                },
              }}
            />
          </div>
        </Box>
        <Box
          sx={{
            border: "1px solid #f3f3f3",

            borderRadius: isMobile ? "20px" : "30px",
            p: isMobile ? "10px 0" : "20px 0",
            height: isMobile ? "250px" : "400px",
            textAlign: "center",
            flex: isMobile || isTablet ? "auto" : 1,
          }}
        >
          <Box
            sx={{
              p: isMobile ? "0 15px" : "0 25px",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                mb: isMobile ? "5px" : "10px",
                pb: isMobile ? "5px" : "10px",
                borderBottom: "2px solid #000000",
              }}
              variant={isMobile ? "subtitle1" : "h6"}
            >
              List Of Locomotive
            </Typography>

            <Box
              sx={{ flex: 1, overflowY: "auto", pr: isMobile ? "5px" : "10px" }}
            >
              {Array.isArray(locomotives) &&
                locomotives.map((locomotive, index) => (
                  <ListLocomotive key={index} data={locomotive} />
                ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          mt: "2%",
          border: "1px solid #f3f3f3",

          borderRadius: isMobile ? "15px" : "20px",
          p: isMobile ? "10px" : "20px",

          height: isMobile ? "350px" : "500px",
        }}
      >
        <Typography
          variant={isMobile ? "subtitle1" : "h6"}
          sx={{ mb: isMobile ? 1 : 2 }}
        >
          Table Locomotive
        </Typography>
        <TableLocomotive locomotives={locomotives} />
      </Box>
    </Box>
  );
};

export default DashboardPage;
