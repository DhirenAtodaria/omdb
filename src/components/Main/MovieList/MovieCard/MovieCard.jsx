import React, { Component } from 'react';
import styles from './MovieCard.module.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Poster from './Poster';

export default class MovieCard extends Component {
    render() {
        return (
            <section className={styles.centering}>
                <Card style={{ width: '18rem' }}>
                    <Poster data={this.props.movieData.Poster} />
                    <Card.Body>
                        <Card.Title>{this.props.movieData.Title}</Card.Title>
                        <Card.Text>
                            {this.props.movieData.Year}
                        </Card.Text>
                        <a href={`https://www.imdb.com/title/${this.props.movieData.imdbID}`}><Button variant="primary">Link</Button></a>
                    </Card.Body>
                </Card>
            </section>
        )
    }
}