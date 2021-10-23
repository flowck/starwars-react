import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Layout } from "@/common/components/Layout/Layout";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #000;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    &,
    span {
      color: #fff;
      text-decoration: none;
    }
  }
`;

const Nav = styled.nav`
  ul {
    height: 100%;
    display: flex;
    list-style: none;
    align-items: center;

    li {
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
`;

export function Header() {
  return (
    <HeaderContainer>
      <Layout>
        <HeaderContent>
          <Heading inverted type="title1">
            <Link to="/">starwars</Link>
          </Heading>

          <Nav>
            <ul>
              <li>
                <NavLink activeClassName="nav--active" to="/characters">
                  <TextLink asComponent="span">Characters</TextLink>
                </NavLink>
              </li>

              <li>
                <NavLink activeClassName="nav--active" to="/starships">
                  <TextLink asComponent="span">Starships</TextLink>
                </NavLink>
              </li>
            </ul>
          </Nav>
        </HeaderContent>
      </Layout>
    </HeaderContainer>
  );
}
