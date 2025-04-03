import { useEffect, useState } from 'react';
import './itemListConteiner.css';
import Item from '../items/Item';
import Loader from '../Loader/Loader';
import { fetchData } from '../../fetchData';
import { useParams } from 'react-router';

function ItemListContainer() {

const [loading, setLoading] = useState(true);
const [todosLosProductos, setTodosLosProductos] = useState(null);

const { categoria } = useParams();

useEffect(() => {
    if (!todosLosProductos) {
    fetchData()
        .then(response => {
        setTodosLosProductos(response);
        setTimeout(() => {
            setLoading(false);
        }, 500);
        })
        .catch(err => console.error(err));
    };

}, [categoria]);

    return (

        loading ?
    
        <Loader />
    
        :
    
        <div>
            <div className="container-productos">
            {
                categoria ?
    
                todosLosProductos.filter(el => el.categoria === categoria).map(el => {
                    return (
                    <Item key={el.id} producto={el} />
                    );
                })
    
                :
                todosLosProductos.map(el => {
                    return (
                    <Item key={el.id} producto={el} />
                    );
                })}
            </div>
        </div>
    );
    };
    
    export default ItemListContainer;