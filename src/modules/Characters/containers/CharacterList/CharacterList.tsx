import { useMemo } from "react";
import { Grid } from "@/common/styles/Grid";
import { useHttp } from "@/common/hooks/useHttp";
import { Title } from "@/common/components/Title/Title";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Loading from "@kiwicom/orbit-components/lib/Loading";
import { ICharacter, Character } from "@/modules/Characters";
import { getCharacter } from "@/modules/Characters/selectors";
import { SWAPIItemsResponse } from "@/common/typings/interfaces";
import { CharacterItem } from "@/modules/Characters/components/CharacterItem/CharacterItem";

export function CharacterList() {
  const { data, error, isLoading } = useHttp<SWAPIItemsResponse<ICharacter[]>>("/people");
  const characters = useMemo<Character[]>(() => getCharacter(data?.results), [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    throw error;
  }

  const renderCharacters = () => {
    return characters.map((person) => <CharacterItem key={person.id} data={person} />);
  };

  return (
    <section>
      <Title name="Characters"></Title>
      <Heading type="title2" spaceAfter="large">
        Characters
      </Heading>

      <Grid>{renderCharacters()}</Grid>
    </section>
  );
}
