import { Allergy } from "./allergy";
import { DistribCenter } from "./distrib-center";

export interface UserOptions {
  id : string;
  username: string;
  email: string;
  password: string;
  role: string;
  allergies: Allergy[];
  phoneNumber: string;
  firstName: string;
  lastName: string;
  associationName: string;
  contactSocial: UserOptions;
  distributionCenter: DistribCenter;
  address: string;
  nbPersons: number;
  rightsMoney: number;
}
