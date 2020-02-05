const negate = (b: boolean): boolean => !b;
const doubles = (a: number): number => a * 2;
doubles(10);
const hello = (hi: string): void => console.log("hello " + hi);

type Pair = (num: number) => boolean;
const pair: Pair = num => num % 2 === 0;
const impair: Pair = num => !num;

const compare = (k: number, l: number, m: number): boolean => k + l < m;
const pluriel = (mot: string): string => mot + "s";
const n42 = (): number => 42; //thunk

//On met le type de la fonction a part puis on l ajoute dans la fonction
type Compare = (x: number, y: number, z: number) => boolean;
const compare2: Compare = (x, y, z) => x + y < z;
const x2 = compare2(12, 34, 78);
type N = number;
let titi: N = 2;

type Jour =
  | "lundi"
  | "mardi"
  | "mercredi"
  | "jeudi"
  | "vendredi"
  | "samedi"
  | "dimanche";
let today: Jour = "mardi";
