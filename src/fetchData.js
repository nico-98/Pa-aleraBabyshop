import { productos } from "./productos";

export const fetchData = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productos && productos.length > 0) {
                resolve(productos); 
            } else {
                reject(new Error("No hay productos disponibles"));
            }
        }, 2000);
    });