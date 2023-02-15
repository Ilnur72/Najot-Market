import DeatilsProduct from "../Components/DeatilsProduct"
import DetailsPlaceholder from "../Components/DetailsPlaceholder"
import useProducts from "../Hooks/useProducts"

  const Details = () => {
    const [products, loading] = useProducts()
    return (
      <>
        {/* {loading ? <DeatilsProduct /> : <DetailsPlaceholder />} */}
        <DeatilsProduct />
      </>
       
    )
  }

  export default Details