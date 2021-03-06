import { Allergy } from "./allergy";

export interface Basket {
    id: string;
    name: string;
    description: string;
    allergies : Allergy[];
}