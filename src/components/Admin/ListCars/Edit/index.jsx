import Button from "@material-ui/core/Button";
import productsApi from "api/productsApi";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Select from "react-select";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { updateCars } from "features/Product/productSlice";
import "./Edit.scss";
Create.propTypes = {};

function Create(props) {
  //check id
  const { carId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const findCarById = useSelector((state) =>
    state.products.find((x) => x.id === +carId)
  );
  //useState of form
  const [img, setImg] = useState(findCarById ? findCarById.thumbail : "");
  const [name, setName] = useState(findCarById ? findCarById.name : "");
  const [origin, setOrigin] = useState(findCarById ? findCarById.origin : "");
  const [price, setPrice] = useState(findCarById ? findCarById.price : "");
  const [description, setDescription] = useState(
    findCarById ? findCarById.description : ""
  );
  if (!findCarById) history.push("/admin/dashboard");

  const formData = {};

  const options = [
    { value: "German", label: "German" },
    { value: "America", label: "America" },
    { value: "England", label: "England" },
    { value: "Spain", label: "Spain" },
  ];
  console.log("cvc", origin);
  function handleOnsubmit(e) {
    e.preventDefault();
  }

  //handle name
  function handleNameCar(e) {
    setName(e.target.value);
  }
  //handle originCar
  function handleOriginCar(e) {
    setOrigin(e.value);
  }
  //handle priceCar
  function handlePriceCar(e) {
    setPrice(e.target.value);
  }
  //handle descriptionCar
  function handleDescriptionCar(e) {
    setDescription(e.target.value);
  }
  //handle imgCar
  async function handleImg(e) {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertBase64(file);
      console.log(base64);
      setImg(base64);
    } else {
      setImg(
        "https://us.123rf.com/450wm/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-stock-vector-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg?ver=6"
      );
    }
  }
  function convertBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  {
  }

  //click button submit
  function handleSubmitForm() {
    formData.id = +carId;
    formData.name = name;
    formData.description = description;
    formData.price = price;
    formData.origin = origin;
    formData.thumbail = img;
    console.log("form data", formData);
    return new Promise((resolve) => {
      productsApi.put(carId, formData);

      const action = updateCars(formData);
      dispatch(action);
      resolve(true);
    });
  }
  return (
    <div className="form__edit">
      <Form className="row" onSubmit={handleOnsubmit}>
        <div className="form__edit-img col-sm-12 col-md-6 col-6">
          <img className="" src={img} />
          <FormGroup className="mt-5">
            <Input type="file" name="imgCar" id="imgCar" onChange={handleImg} />
          </FormGroup>
        </div>
        <div className=" col-sm-12 col-md-6 col-6">
          <FormGroup>
            <Label for="nameCar">Name</Label>
            <Input
              type="text"
              name="nameCar"
              id="nameCar"
              value={name}
              onChange={handleNameCar}
            />
          </FormGroup>

          <FormGroup>
            <Label for="originCar">Origin</Label>
            <Select
              name="originCar"
              id="originCar"
              options={options}
              onChange={handleOriginCar}
            />
          </FormGroup>

          <FormGroup>
            <Label for="priceCar">Price</Label>
            <Input
              type="text"
              name="priceCar"
              id="priceCar"
              value={price}
              onChange={handlePriceCar}
            />
          </FormGroup>

          <FormGroup>
            <Label for="descriptionCar">Description</Label>
            <Input
              type="textarea"
              name="descriptionCar"
              id="descriptionCar"
              value={description}
              onChange={handleDescriptionCar}
            />
          </FormGroup>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            onClick={handleSubmitForm}
          >
            Update Product
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Create;
