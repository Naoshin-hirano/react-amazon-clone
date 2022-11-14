export type UITop = {
    productInCart: Busket;
    currentTotalAmount: number;
    currentProductNum: number;
};

export type Busket = {
    id: string;
    title: string;
    image: string;
    price: number;
    rating: number;
}[];

export type CartProduct = {
    id: string;
    title: string;
    image: string;
    price: number;
    rating: number;
};
