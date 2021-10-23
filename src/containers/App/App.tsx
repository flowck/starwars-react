import "@/common/styles/globals.css";
import styled from "styled-components";
import { Errors } from "@/containers/Errors/Errors";
import { Routes } from "@/containers/Routes/Routes";
import { Header } from "@/common/components/Header/Header";
import { Footer } from "@/common/components/Footer/Footer";
import { Layout } from "@/common/components/Layout/Layout";
import { Providers } from "@/containers/Providers/Providers";

const Views = styled.section`
  min-height: calc(100vh - (84px + 68px));
`;

export function App() {
  return (
    <div>
      <Providers>
        <Header />
        <Views>
          <Errors>
            <Layout>
              <Routes />
            </Layout>
          </Errors>
        </Views>

        <Footer />
      </Providers>
    </div>
  );
}
