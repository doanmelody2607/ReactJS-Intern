import usersApi from "api/usersApi";

const getUser = async (values) => {
  const reponse = await usersApi.getAll({ username: values.username });
  return reponse;
};

const getEmail = async (values) => {
  const reponse = await usersApi.getAll({ email: values.email });
  return reponse;
};

const validateInfo = async (values) => {
  const errors = {};
  //call api user
  const existedUser = await getUser(values);
  //call api email
  const existedEmail = await getEmail(values);
  //Name
  if (!values.name) {
    errors.name = "Name is required";
  }
  //Username
  if (!values.username.trim()) {
    errors.username = "Username is required";
  } else if (existedUser.length === 1) {
    errors.username = "Username is existed";
  }
  //Email
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  } else if (existedEmail.length === 1) {
    errors.email = "Email is existed";
  }
  //Password
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be 8 characters or more";
  }

  //Confirm Password
  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  return errors;
};

export default validateInfo;
