import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import Main from "../../components/Main";
import Login from "../../components/Login/Login";

const Notfound = () => <h2>Not Found</h2>;

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Redirect noThrow from="/" to="movielist" />
        <Main
          path="movielist"
          searchData={this.props.searchData}
          search={this.props.search}
        />
        <Login path="login" />
        <Notfound default />
      </Router>
    );
  }
}
