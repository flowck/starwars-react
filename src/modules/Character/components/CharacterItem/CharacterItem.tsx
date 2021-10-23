import styled from "styled-components";
import { Link } from "react-router-dom";
import { Character } from "@/modules/Character";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";

interface Props {
  data: Character;
}

const Container = styled(Link)`
  text-decoration: none;
`;

export function CharacterItem({ data }: Props) {
  const { name, id } = data;
  return (
    <Container data-testid="characterItem" to={`/characters/${id}`}>
      <Card>
        <CardSection title={name}></CardSection>
      </Card>
    </Container>
  );
}
