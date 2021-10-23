export type ICharacter = {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};

export class Character {
  id: string;
  url!: string;
  name!: string;
  mass!: string;
  gender!: string;
  height!: string;
  edited!: string;
  created!: string;
  eyeColor!: string;
  species!: string[];
  birthYear!: string;
  filmIds!: number[];
  hairColor!: string;
  homeworld!: string;
  skinColor!: string;
  vehicleIds!: number[];
  starshipIds!: number[];

  constructor(obj: ICharacter) {
    this.url = obj.url;
    this.name = obj.name;
    this.mass = obj.mass;
    this.height = obj.height;
    this.gender = obj.gender;
    this.edited = obj.edited;
    this.species = obj.species;
    this.created = obj.created;
    this.eyeColor = obj.eye_color;
    this.homeworld = obj.homeworld;
    this.birthYear = obj.birth_year;
    this.hairColor = obj.hair_color;
    this.skinColor = obj.skin_color;
    this.id = obj.url.split("people/")[1].replace("/", "");
    this.filmIds = obj.films.map((url) => this.getIdFromUrl(url, "/films/"));
    this.vehicleIds = obj.vehicles.map((url) => this.getIdFromUrl(url, "/vehicles/"));
    this.starshipIds = obj.starships.map((url) => this.getIdFromUrl(url, "/starships/"));
  }

  private getIdFromUrl(url: string, separator: string): number {
    return Number(url.split(separator)[1].replace("/", ""));
  }
}
