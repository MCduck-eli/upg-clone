export default interface IProducts {
    slug: string;
    title: string;
    brend: string;
    price: number;
    image: {
        url: string;
    };
    brand: string;
    quantity: number;
    rating: {
        rate: number;
    };
}
