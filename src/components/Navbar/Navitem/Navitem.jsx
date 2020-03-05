import React, { Component } from 'react';
import styles from './Navitem.module.scss';
import { Link } from '@reach/router';

export default class Navitem extends Component {
    render() {
        return (
            <p className={styles.item}>
                <Link onClick={this.props.clickEvent} to={this.props.route} className={styles.item}>{this.props.name}</Link>
            </p>
        )
    }
}