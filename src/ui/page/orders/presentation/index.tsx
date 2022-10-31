export const useCreateProps = () => {
    return {
        orders,
    };
};

type Basket = {
    id: string;
    title: string;
    image: string;
    price: string;
    rating: number;
}[];

type Orders = {
    id: string;
    data: {
        created: number;
        amount: number;
        basket: Basket;
    };
}[];

// 1注文毎のバスケット情報
const basket1: Basket = [
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

// 注文情報
const orders: Orders = [
    {
        id: "kgkaeethavafaffa",
        data: {
            // 日付⇒UNIX時間変換
            // 2022年10月17日
            created: 1666360009,
            amount: 66600,
            basket: basket1,
        },
    },
    {
        id: "yyyhaearearegfaeare",
        data: {
            // 日付⇒UNIX時間変換
            // 2022年10月17日
            created: 1665989209,
            amount: 24600,
            basket: basket1,
        },
    },
    {
        id: "waeimganreirangaef",
        data: {
            // 日付⇒UNIX時間変換
            // 2022年10月19日
            created: 1666166449,
            amount: 57800,
            basket: basket1,
        },
    },
];
