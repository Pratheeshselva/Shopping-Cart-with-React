import React, {useState} from "react";
import TopBar from "./Components/TopBar";
import Header from "./Components/Header";
import Product from "./Components/Product";

function App() {
    let [cart, setCart] = useState(0)

    let data =[
    {
       name:"Laptop",
       price:500,
       isSale:false
    },
    {
        name:"Camera",
        price:300,
        discoutPrice:169,
        isSale:true
    },
    {
        name:"Mobile",
        price:350,
        isSale:false
    },
    {
        name:"Lens",
        price:150,
        isSale:false
    },
    {
      name:"Macbook",
      price:1500,
      isSale:false
  },
  {
    name:"Air Pods",
    price:299,
    discoutPrice:99,
    isSale:true
  }


]
  return (
    <>
    <TopBar cart={cart} />
    <Header/>
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
           { data.map((e,i)=>(
              <Product data={e} key={i} cart={cart} setCart={setCart}/>)
)
        }
    </div></div></section>
    </>
  );
}

export default App;
