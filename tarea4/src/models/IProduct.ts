export interface IProduct{
    id: number,
    name: string;
    price: string;
    stock: number;
    create_at: Date;
}

export type ProductReview = Pick<IProduct, "id" | "name" | "price">;