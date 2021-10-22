import styled from "styled-components";
import Text from "@kiwicom/orbit-components/lib/Text";
import { Layout } from "@/common/components/Layout/Layout";
import { version, repository } from "../../../../package.json";

const FooterContainer = styled.footer`
  &,
  p,
  a {
    color: #fff;
    text-decoration: none !important;
  }

  background-color: #000;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function Footer() {
  return (
    <FooterContainer>
      <Layout>
        <FooterContent>
          <Text>
            Developed by <a href="https://changani.me">Firmino Changani</a>
          </Text>

          <Text>
            Build{" "}
            <a href={`${repository.url}/releases/tag/v${version}`}>
              v{version}
            </a>
          </Text>
        </FooterContent>
      </Layout>
    </FooterContainer>
  );
}
