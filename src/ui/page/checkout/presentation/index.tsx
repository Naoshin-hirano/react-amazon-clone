export const useCreateProps = () => {
    return {
        secondTitle,
        secondMenu,
        backButton,
        basket,
    };
};

type SecondTitle = {
    title: string;
};
type SecondMenu = {
    buttonLabels: {
        menu1: string;
        menu2: string;
        menu3: string;
    };
};
type BackButton = {
    buttonLabels: {
        back: string;
    };
};
type Basket = {
    id: string;
    title: string;
    image: string;
    price: string;
    rating: number;
}[];

const secondTitle: SecondTitle = {
    title: "セカンドタイトル",
};
const secondMenu: SecondMenu = {
    buttonLabels: {
        menu1: "セカンドメニュー1",
        menu2: "セカンドメニュー2",
        menu3: "セカンドメニュー3",
    },
};
const backButton: BackButton = {
    buttonLabels: {
        back: "閉じる",
    },
};

const basket: Basket = [
    {
        id: "fgkammrngoalenaeg",
        title: "登山グッズ一式",
        image:
            "https://www.anoyama.com/wp-content/uploads/2019/05/0_equipment-860x550.jpg",
        price: "2,340",
        rating: 4,
    },
    {
        id: "fgkameggaeregaeg",
        title: "キャンプグッズ一式",
        image:
            "https://images.camphack.jp/wp-content/uploads/2022/02/image19.jpeg",
        price: "5,300",
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
