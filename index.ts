const a = "Bonsoir les WEB";
const double = (x: number) => x * 2;
let b: number;
// let b : number = double(14);
b = double(14);

class Animal {
  nom: string;
  constructor(s: string) {
    this.nom = s;
  }
}
const moineau = new Animal("banane");

const mul (x: number, y:number) : number => x*y;
const x = mul(3,3);