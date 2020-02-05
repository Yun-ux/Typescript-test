class Travailleur {
  public readonly nom: string;
  public job: string;
  public salary: number;
  private result: number;
  constructor(nom: string, job: string, salary: number) {
    this.nom = nom;
    this.job = job;
    this.salary = salary;
    this.result = 0;

    setInterval(() => {
      this.result += this.salary / 1000;
    }, 100);
  }

  public getValue(): number {
    return this.result;
  }
}
let travailleur: Travailleur = new Travailleur("Toto", "IT manager", 1500);
setTimeout(() => console.log(travailleur.getValue()), 5000);
