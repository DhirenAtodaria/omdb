import React, { Component } from 'react';
import styles from './Poster.module.scss';
import Card from 'react-bootstrap/Card';

export default class Poster extends Component {
    render() {
        return (
            <img src={`${this.props.data}`} className={styles.imgs} />
        )
    }
}