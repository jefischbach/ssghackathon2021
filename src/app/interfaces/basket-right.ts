import { Basket } from "./basket";
import { UserOptions } from "./user-options";

export interface BasketRight{
    id: string;
    user: UserOptions;
    basket: Basket;
}