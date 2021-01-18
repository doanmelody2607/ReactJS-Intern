import Button from "@material-ui/core/Button";
import productsApi from "api/productsApi";
import { updateCars } from "features/Product/productSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Select from "react-select";
import { Form, FormGroup, Input, Label } from "reactstrap";
import swal from "sweetalert";
import isEmpty from "validator/lib/isEmpty";
import "./Edit.scss";

Edit.propTypes = {};

function Edit(props) {
  //Check id
  const { carId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const findCarById = useSelector((state) =>
    state.products.find((x) => x.id === carId)
  );
  //useState of form

  const [img, setImg] = useState(findCarById ? findCarById.thumbail : "");
  const [name, setName] = useState(findCarById ? findCarById.name : "");
  const [origin, setOrigin] = useState("");
  const [price, setPrice] = useState(findCarById ? findCarById.price : "");
  const [description, setDescription] = useState(
    findCarById ? findCarById.description : ""
  );
  if (!findCarById) history.push("/admin/dashboard");

  const formData = {};

  const [validationMsg, setValidationMsg] = useState("");

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

  //handle validationMsg
  function validateAll() {
    const msg = {};
    // let nameRegex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    // if (!nameRegex.test(name)) msg.name = "Name in valid";
    if (isEmpty(name)) {
      msg.name = "Please input your product name";
    }
    if (isEmpty(price)) {
      msg.price = "Please input your product price";
    }
    // let priceRegex = /^\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?+$/;
    // if (!priceRegex.test(price))
    //   msg.price = "Price in valid, format: ex:2.000.000.";
    if (isEmpty(origin)) {
      msg.origin = "Please select product origin";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  }
  //click button submit
  function handleSubmitForm() {
    const isValid = validateAll();
    if (!isValid) return;
    swal({
      title: "Are you sure update this car?",
      icon: "warning",
      dangerMode: true,
      buttons: {
        confirm: "Yes",
        cancel: "Cancel",
      },
    }).then((willDelete) => {
      if (willDelete) {
        formData.id = carId;
        formData.name = name;
        formData.description = description;
        formData.price = price;
        formData.origin = origin;
        formData.thumbail = img;
        swal("Done", {
          icon: "success",
          dangerMode: true,
        });
        return new Promise((resolve) => {
          productsApi.put(carId, formData);

          const action = updateCars(formData);
          dispatch(action);
          resolve(true);
        });
      }
    });
  }

  function handleBackToListCar() {
    history.push("/admin/listcars");
  }

  return (
    <div className="form__edit">
      <Form className="row" onSubmit={handleOnsubmit}>
        <div className="form__edit-img  col-sm-12 col-md-6 col-6">
          <div className="form__edit-img-block">
            <img className="" src={img} />
            <FormGroup className="mt-5">
              <Input
                type="file"
                name="imgCar"
                id="imgCar"
                onChange={handleImg}
              />
            </FormGroup>
          </div>
        </div>
        <div className="   col-sm-12 col-md-6 col-6">
          <FormGroup>
            <Label for="nameCar">Name</Label>
            <Input
              type="text"
              name="nameCar"
              id="nameCar"
              value={name}
              onChange={handleNameCar}
            />
            <small className="text-danger font-italic">
              {validationMsg.name}
            </small>
          </FormGroup>

          <FormGroup>
            <Label for="originCar">Origin</Label>
            <Select
              options={options}
              name="originCar"
              id="originCar"
              onChange={handleOriginCar}
            />
            <small className="text-danger font-italic">
              {validationMsg.origin}
            </small>
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
            <small className="text-danger font-italic">
              {validationMsg.price}
            </small>
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

          <Button
            className="ml-3"
            variant="contained"
            onClick={handleBackToListCar}
          >
            Back To ListCars
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Edit;
