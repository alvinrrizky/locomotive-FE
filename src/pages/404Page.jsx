import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem", color: "#dc3545" }}>
        404
      </h1>
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#343a40" }}>
        Halaman Tidak Ditemukan
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          marginBottom: "2rem",
          color: "#6c757d",
          textAlign: "center",
        }}
      >
        Maaf, halaman yang Anda cari tidak ditemukan. Pastikan Anda telah
        memasukkan alamat yang benar.
      </p>
      <Link
        to="/"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          fontSize: "1rem",
        }}
      >
        Kembali ke Dashboard
      </Link>
    </div>
  );
};

export default Error404;
