import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import Navitem from "./Navitem/Navitem";

export default class Navbar extends Component {
  render() {
    return (
      <section className={styles.wrapper}>
        <div className={styles.overlay}></div>

        <div className={styles.Navbar}>
          <h1>OMDB</h1>
          <Navitem
            clickEvent={this.props.defaultData}
            route="movielist"
            name="Movielist"
          />

          <div className={styles.list}>
            {this.props.searchData.map((entry, index) => (
              <p key={index} onClick={item => this.props.filterToggle(item)}>
                {entry.Title}
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
