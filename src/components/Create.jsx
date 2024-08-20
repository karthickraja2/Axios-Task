import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    Car_Id: "",
    Car_Name: "",
    Model: "",
    Price: "",
    Year:"",
    Img:"",
  });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData((preData) => ({
            ...preData,
            [name]: value,
        }))
    }
      const handleFormSubmit = async (e) => {
        e.preventDefault();
        await axios
          .post(
            `https://66aa5326613eced4eba86c62.mockapi.io/Cars`,
            editData
          )
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
        navigate("/Cars");
      };
    return (
      <div>
        <br></br>
        <br></br>
        <form
          onSubmit={handleFormSubmit}
          class="row g-3 needs-validation"
          novalidate
        >
          <div class="col-md-4 position-relative">
            <label for="validationTooltip01" class="form-label">
              Car Id
            </label>
            <input
              type="text"
              name="Car_Id"
              class="form-control"
              id="validationTooltip01"
              value={editData.Car_Id}
              onChange={handleChange}
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
          <div class="col-md-4 position-relative">
            <label for="validationTooltip01" class="form-label">
              Car Name
            </label>
            <input
              type="text"
              name="Car_Name"
              class="form-control"
              id="validationTooltip01"
              value={editData.Car_Name}
              onChange={handleChange}
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
          <div class="col-md-4 position-relative">
            <label for="validationTooltip01" class="form-label">
             Model
            </label>
            <input
              type="text"
              name="Model"
              class="form-control"
              id="validationTooltip01"
              value={editData.Model}
              onChange={handleChange}
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
          <div class="col-md-4 position-relative">
            <label for="validationTooltip01" class="form-label">
              Price
            </label>
            <input
              type="text"
              name="Price"
              class="form-control"
              id="validationTooltip01"
              value={editData.Price}
              onChange={handleChange}
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
          <div class="col-md-4 position-relative">
            <label for="validationTooltip01" class="form-label">
              Year
            </label>
            <input
              type="text"
              name="Year"
              class="form-control"
              id="validationTooltip01"
              value={editData.Year}
              onChange={handleChange}
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>
          <div class="col-md-4 position-relative">
            <label for="validationTooltip01" class="form-label">
              Img
            </label>
            <input
              type="Url"
              name="Img"
              class="form-control"
              id="validationTooltip01"
              value={editData.Img}
              onChange={handleChange}
            />
            <div class="valid-tooltip">Looks good!</div>
          </div>

          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    );
};

export default Create;
