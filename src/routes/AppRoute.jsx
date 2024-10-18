import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const DetailPage = lazy(() => import("../pages/DetailPage"));
const Error404Page = lazy(() => import("../pages/404Page"));
const LayoutApp = lazy(() => import("../layouts/LayoutApp"));

function AppRoute() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            display: "flex",
            fontSize: "50px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading...
        </div>
      }
    >
      <Routes>
        <Route element={<LayoutApp />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/detail/:code" element={<DetailPage />} />
        </Route>
        <Route path="/404" element={<Error404Page />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoute;
