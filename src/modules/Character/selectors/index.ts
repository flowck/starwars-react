import { ICharacter, Character } from "@/modules/Character";

export const getCharacter = (characters: ICharacter[] | undefined) =>
  characters ? characters.map((item) => new Character(item)) : [];
