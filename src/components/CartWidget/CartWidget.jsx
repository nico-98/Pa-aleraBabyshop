import { useAppContext } from '../../context/context';
import './CartWidget.css'
import { BsCartFill } from "react-icons/bs";

function CartWidget() {

const {carrito} = useAppContext();

    return(
        <>
        <BsCartFill />
        <p>{carrito.length}</p>
        </>
    )
}
export default CartWidget;
