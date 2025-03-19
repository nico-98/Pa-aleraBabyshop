import './ItemListConteiner.css';
import { productos } from '../../productos';
import Item from '../items/item';

function ItemListConteiner() {

    useEffect(() => {
        console.log('esta es mi lista de productos', productos);
    }, []);

return (
    <div className= "container-productos">
        {
            productos.map(el => {
                return (
                    <Item/>
            )
        })
        }
    </div>
    );
}
export default ItemListConteiner;   
