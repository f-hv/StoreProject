export interface ProductModel{
    id:number |null,
    title:string |null,
    price:number |null,
    category:string |null,
    description:string |null,
    image:string |null,
    rating:{rate:number,count:number} |null,
}