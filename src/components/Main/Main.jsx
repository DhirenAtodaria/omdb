import React, { Component } from 'react';
import styles from './Main.module.scss';
import MovieList from "./MovieList";

export default class Main extends Component {
    render() {
        return (
            <section className={styles.Main}>
                <MovieList finalData={this.props.searchData} search={this.props.search}/>
            </section>
        )
    }
}
