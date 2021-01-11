import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Input, Label } from "reactstrap";
import "./Create.scss";
import Select from "react-select";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import productsApi from "api/productsApi";
import swal from "sweetalert";

Create.propTypes = {};

function Create(props) {
  //get length listcars
  const lengthListCars = useSelector((state) => state.products.length) + 1;

  //useState of form
  const [img, setImg] = useState(() => {
    return "https://us.123rf.com/450wm/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-stock-vector-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg?ver=6";
  });
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState();

  const formData = {};

  const options = [
    { value: "German", label: "German" },
    { value: "America", label: "America" },
    { value: "England", label: "England" },
    { value: "Spain", label: "Spain" },
  ];

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

  //click button submit
  function handleSubmitForm() {
    swal({
      title: "You have successfully added!",
      icon: "success",
      dangerMode: true,
    });
    formData.name = name;
    formData.description = description;
    formData.price = price;
    formData.origin = origin;
    formData.thumbail = img;

    return new Promise((resolve) => {
      productsApi.post(formData);
      resolve(true);
    });
  }
  return (
    <div className="form__create">
      <Form className="row" onSubmit={handleOnsubmit}>
        <div className="form__create-img col-sm-12 col-md-6 col-6">
          <div className="form__create-img-block">
            <img className="" src={img} />
          </div>
          <FormGroup className="mt-5">
              <Input
                type="file"
                name="imgCar"
                id="imgCar"
                onChange={handleImg}
              />
            </FormGroup>
        </div>
        <div className=" col-sm-12 col-md-6 col-6">
          <FormGroup>
            <Label for="nameCar">Name</Label>
            <Input
              type="text"
              name="nameCar"
              id="nameCar"
              onChange={handleNameCar}
            />
          </FormGroup>

          <FormGroup>
            <Label for="originCar">Origin</Label>
            <Select
              options={options}
              name="originCar"
              id="originCar"
              onChange={handleOriginCar}
            />
          </FormGroup>

          <FormGroup>
            <Label for="priceCar">Price</Label>
            <Input
              type="text"
              name="priceCar"
              id="priceCar"
              onChange={handlePriceCar}
            />
          </FormGroup>

          <FormGroup>
            <Label for="descriptionCar">Description</Label>
            <Input
              type="textarea"
              name="descriptionCar"
              id="descriptionCar"
              onChange={handleDescriptionCar}
            />
          </FormGroup>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            onClick={handleSubmitForm}
          >
            Add Product
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Create;
