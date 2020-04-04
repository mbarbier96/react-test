import React from "react";
import "./App.css";
import products from "./vschoolProducts.js";
import Product from "./Product";
import { Component } from "react";
const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("./client_secret.json");

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet(
  "11tH_WVs1vmYYrm0EbE8Yx6FUqyBjl-nxF2e6Ag7Vtgo"
);

let rows;

class App extends Component {
  state = {
    count: 0,
    display: false,
    data: []
  };

  componentDidMount = async () => {
    await doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    rows = await sheet.getRows();

    this.setState({ data: rows });
  };

  clickedButton = async () => {
    // this.setState(prevStasyncate => {
    //   return {
    //     count: prevState.count + 1
    //   };
    // });
    rows[1].Email = "TE AMO HERMOSOTA";
    await rows[1].save();
    this.setState({ data: rows });

    console.log(this.state.data);
  };

  render() {
    return (
      <div>
        <button onClick={this.clickedButton}>Click to change email</button>
        {this.state.data.map(item => (
          <ul key={item.ID}>
            {item.ID}, {item.Name}, {item.Email}
          </ul>
        ))}
      </div>
    );
  }
}

export default App;
