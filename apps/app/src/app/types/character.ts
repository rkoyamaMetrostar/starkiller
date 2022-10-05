export enum AllegienceType {
  Sith,
  Jedi,
}

export enum SaberType {
  Red,
  Blue,
  Green,
  Black,
  Purple,
}

export interface Character {
  id: number;
  name: string;
  allegeance: AllegienceType;
  lightSaber: SaberType;
}
