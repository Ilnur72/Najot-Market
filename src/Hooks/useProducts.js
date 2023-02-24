import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function useProducts(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        let unmounted = false
        async function getProducts(){
            try {
                setLoading(true)
                let res = await axios.get("/products")
                if(res.status === 200){
                    setProducts(res.data)
                }
                if(unmounted) return;
            } catch (error) {
                toast("Sizning loginingiz mavjud emas!", {type: "error"});
            }
            finally{
                setLoading(false)
            }
        }
        getProducts()
        return () => {
            unmounted = true;
        }
    }, []);

    return [products, loading]
}
export default useProducts;