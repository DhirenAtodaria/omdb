import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./App.module.scss";
import Routes from '../../components/Routes/Router';

let initialData = [];


class App extends Component {

  
  state = {
    url: 'http://www.omdbapi.com/?s=star&apikey=a3733e00',
    MovieList: []
  }

  componentDidMount() {
      fetch(this.state.url)
      .catch(err => {console.log(err)})
      .then(res => res.json())
      .then(
          data => {
              this.setState( { MovieList: data['Search'] } );
              initialData = data['Search'];
          }
      )
  }

  searchFilter = (item) => {
    initialData = [...this.state.MovieList];
    const filter = this.state.MovieList.filter( (e) => {return e.Title === item.target.innerText} )    
    this.setState( { MovieList: filter  } )
  }

  handleChange() {
    console.log(`http://www.omdbapi.com/?s=${this.myInput.value}&apikey=a3733e00`)
    fetch(`http://www.omdbapi.com/?s=${this.myInput.value}&apikey=a3733e00`)
      .catch(err => {console.log(err)})
      .then(res => res.json())
      .then(
          data => {
              if (data.Response === "True") {
                 this.setState( { MovieList: data['Search'] } );
                 initialData = data['Search'];
              }
          }
      )
  }

  defaultData = () => {
    this.setState( { MovieList: initialData } )
  }

  render() {
    return (
      <div className={styles.App}>
        <Navbar searchData={this.state.MovieList} filterToggle={this.searchFilter} defaultData={this.defaultData} />
        <section className={styles.controlling}>
          <Form onSubmit={this.props.search} >
            <Form.Group controlId="form-name">
                <Form.Control type="text" defaultValue="" size="lg" placeholder="Search" ref={ref => { this.myInput = ref; }} onChange={() => this.handleChange()} />
            </Form.Group>
          </Form>
          <Routes searchData={this.state.MovieList} search={this.search} />
        </section>
      </div>
    );
  }
}

export default App;
