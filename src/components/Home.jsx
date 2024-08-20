import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("https://66aa5326613eced4eba86c62.mockapi.io/Cars")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
   console.log(products)
  return (
    <div>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
          {products.map((item, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card h-100">
                <img
                  src={item.Img}
                  className="card-img-top"
                  width={"100%"}
                  height={"350px"}
                  alt={item.Img}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.Car_Name}</h5>
                  <p className="card-text">{item.Model}</p>
                  <p className="card-text">{item.Price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
