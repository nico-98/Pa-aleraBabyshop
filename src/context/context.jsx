import { createContext, useContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {
    const [carrito, setCarrito] = useState([]);
    const [productos, setProductos] = useState([]);
    const [loadingProductos, setLoadingProductos] = useState(true);


    function agregarAlCarrito(prod, cantidad) {
        console.log("vas a agregar", prod);
        const nuevoProducto = {
            ...prod,
            cantidad,
        };

        if (carrito.some(el => el.id === prod.id)) {
            const newCarrito = carrito.map(element => {
                if (element.id === prod.id) {
                    return {
                        ...element,
                        cantidad: element.cantidad + cantidad,
                    };
                } else {
                    return element;
                }
            });
            setCarrito(newCarrito);
        } else {
            setCarrito([...carrito, nuevoProducto]);
        }
    }


    const obtenerProductos = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "productos"));
            const productosFirebase = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProductos(productosFirebase);
            setLoadingProductos(false);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            setLoadingProductos(false);
        }
    };


    useEffect(() => {
        obtenerProductos();
    }, []);

    return (
        <AppContext.Provider value={{ carrito, agregarAlCarrito, productos, loadingProductos }}>
            {props.children}
        </AppContext.Provider>
    );
};