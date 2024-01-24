import { useEffect, useState } from "react";

const ListProducts = () => {
  const [products, setProducts] = useState<any[]>([]);

  const apiCall = async () => {
    const data = await fetch('https://dummyjson.com/products');
    const dataJson = await data.json();
    return dataJson.products;
  }

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res: any) => {
        setProducts(res.products.slice(0, 10));
        console.log(products);
    });
      
  }, []);

  return (
    <div>
      {products && products.length > 0 ? (
        products.map(p=> (
        <div key={p.id}>{p.name}</div>
      ))

) : null}
    </div>
  );
};

export default ListProducts;
