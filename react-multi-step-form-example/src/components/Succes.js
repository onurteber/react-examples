import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import { MuiThemeProvider } from "material-ui/styles";

export class Succes extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Succes" />
          <h1>Thank you for submitting out the form</h1>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Succes;
