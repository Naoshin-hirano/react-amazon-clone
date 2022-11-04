export const useCreateProps = () => {
    return {
        basket,
    };
};

type Basket = {
    id: string;
    title: string;
    image: string;
    price: string;
    rating: number;
}[];

// 1注文毎のバスケット情報
const basket: Basket = [
    {
        id: "fgkammrngoalenaeg",
        title: "登山グッズ一式",
        image:
            "https://www.anoyama.com/wp-content/uploads/2019/05/0_equipment-860x550.jpg",
        price: "23,400",
        rating: 4,
    },
    {
        id: "fgkameggaeregaeg",
        title: "キャンプグッズ一式",
        image:
            "https://images.camphack.jp/wp-content/uploads/2022/02/image19.jpeg",
        price: "53,400",
        rating: 5,
    },
    {
        id: "thhjskmeggaeregaeg",
        title: "登山シューズ",
        image: "https://m.media-amazon.com/images/I/616AAPLKJTL._AC_UY500_.jpg",
        price: "16,400",
        rating: 3,
    },
];
