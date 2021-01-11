import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import { FaUserCircle } from "react-icons/fa";

import PropTypes from "prop-types";

ListUsers.propTypes = {};

function ListUsers(props) {
  return (
    <div>
      <FormControl>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <FaUserCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="ID of Car" fullWidth />
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <FaUserCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Name of Car" fullWidth />
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
}

export default ListUsers;
