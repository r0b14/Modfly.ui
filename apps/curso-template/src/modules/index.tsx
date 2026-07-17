import React from "react";
import Layout from "../components/templates/layout/Layout";

export const App: React.FC = () => {
  return (
    <Layout>
      <div style={{ padding: "40px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "16px" }}>
          Curso Template
        </h1>
        <p style={{ color: "#555" }}>
          Ambiente de desenvolvimento dos componentes. Use o Storybook em{" "}
          <a href="http://localhost:6006" style={{ color: "#2563eb" }}>
            localhost:6006
          </a>{" "}
          para visualizar os componentes isolados.
        </p>
      </div>
    </Layout>
  );
};