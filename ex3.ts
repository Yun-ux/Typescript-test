type A = boolean | null;
type Str = any | string;
type Numbers = 1 | 2 | 3 | 5 | 8 | 13;
type Days = "lundi" | "mardi" | "mercredi";
type isMaj = "Majeur" | "Mineur";
type isFunc = Function | null;

type creature:Creature = {
  nom: string;
  description: string;
  id: number;
  image: string;
  pouvoirs: string[]; //Array<string>;
};

const creatures: Array<Creature> = [creature, creature];

type Eleve = {
    nom: string,
    animal: Creature
}