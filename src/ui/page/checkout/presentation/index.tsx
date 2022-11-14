import { UITopSelector } from "core/store/ui/top/selector";
import { UITop } from "core/store/ui/top/type";
import { useSelector } from "react-redux";

export const useCreateProps = () => {
    const busket: UITop = useSelector(UITopSelector);
    const busketInfo: UITop = {
        productInCart: busket?.productInCart,
        currentTotalAmount: busket?.currentTotalAmount,
        currentProductNum: busket?.currentProductNum,
    };
    return {
        busketInfo,
    };
};
