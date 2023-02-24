import DeatilsProduct from "../Components/DeatilsProduct"
import DetailsPlaceholder from "../Components/DetailsPlaceholder"
import Header from "../Components/Header/Header"
import useProducts from "../Hooks/useProducts"

  const Details = () => {
    const [products, loading] = useProducts()
    return (
      <>
        <Header />
        {loading ?<DetailsPlaceholder /> : <DeatilsProduct/>}
        {/* <DeatilsProduct/> */}
      </>
       
    )
  }

  export default Details