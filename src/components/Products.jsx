import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ setId }) => {
  const [products, setProducts] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async () => {
    await axios
      .get("https://66aa5326613eced4eba86c62.mockapi.io/Cars")
      .then((res) =>{console.log("data",res.data)
         setProducts(res.data) })
      
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };
  const handleDelete = async (id) => {
    await axios
      .delete(`https://66aa5326613eced4eba86c62.mockapi.io/Cars/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((err) => console.log(err));
  };
  console.log(products)
  return (
    <div>
      <br></br>
       <button
        onClick={() => {
          navigate("/Create");
        }}
        type="button"
        className="btn btn-outline-primary btn-lg "
      >
        + Create
      </button>
      <br></br>
      <br></br>

      <table className="table table-hover">
        <thead>
          <tr>
          <th scope="col"></th>
            <th scope="col">Car Id</th>
            <th scope="col">Car Name</th>
            <th scope="col">Model</th>
            <th scope="col">Price</th>
            <th scope="col">Year </th>
            {/* <th scope="col">Img </th> */}
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.Car_Id}</td>
                  <td>{item.Car_Name}</td>
                  <td> {item.Model}</td>
                  <td>${item.Price}</td>
                  <td>{item.Year}</td>
                  {/* <td>{item.Img}</td> */}
                  <td>
                    <button
                      onClick={() => {
                        handleEdit(item.Car_Id);
                      }}
                      type="button"
                      class="btn btn-outline-success"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(item.Car_Id);
                      }}
                      type="button"
                      class="btn btn-outline-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
