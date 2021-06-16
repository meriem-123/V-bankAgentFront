export class Agent {
  id: number;
  nom: string;
  prenom: string;
  cin: string;
  adresse: string;
  telephone: string;
  email: string;
  agence: {
    id: number;
    nom: string;
    adresse: string;
    telephone: string;
    fax: string;
    email: string;
  };
  username: string;
  password: string;
}
