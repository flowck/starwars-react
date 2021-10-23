import { ICharacter, Character } from "@/modules/Characters";

export const getCharacter = (characters: ICharacter[] | undefined) =>
  characters ? characters.map((item) => new Character(item)) : [];
