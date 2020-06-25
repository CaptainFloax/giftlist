import { Category } from './category';

export class Product {
    pid: number;
    img: string;
    name: string;
    description: string;
    price: number;
    paid: number;
    isBought: boolean;
    cat: string;
    tag: string;
    shop: string;
    link: string;
    quantity: number;
    participation: boolean;

    myCat: Category;
}