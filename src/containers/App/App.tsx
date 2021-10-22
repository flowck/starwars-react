import "@/common/styles/globals.css";
import styled from "styled-components";
import { Errors } from "@/containers/Errors/Errors";
import { Routes } from "@/containers/Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "@/common/components/Header/Header";
import { Footer } from "@/common/components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "@/common/components/Layout/Layout";

const Views = styled.section`
  min-height: calc(100vh - (84px + 68px));
`;

export function App() {
  return (
    <div>
      <HelmetProvider>
        <Router>
          <Header />
          <Views>
            <Errors>
              <Layout>
                <Routes />
              </Layout>
            </Errors>
          </Views>

          <Footer />
        </Router>
      </HelmetProvider>
    </div>
  );
}
