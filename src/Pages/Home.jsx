import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import Header from "../Components/Header/Header"

//Components
import Products from "../Components/Products"

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    let token = localStorage.getItem("token")
    if(!token){
      navigate("/register")
    }
  }, [])

  return (
    <>
      <Header />
      <Products />
    </>
  )
}

export default Home