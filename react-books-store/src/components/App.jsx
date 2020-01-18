import React, {Component } from 'react';
import axios from 'axios'
import MenuComponent from './Menu'
import {Card, Container} from 'semantic-ui-react'
import BookCard from '../components/BookCard'
import Filter from '../containers/Filter'
import Menu from '../containers/Menu'



class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json'). then(({ data }) => {
      setBooks(data);
    });
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <MenuComponent />
        <Filter/>

        <Card.Group itemsPerRow={4}>
          {!isReady ? 'Loading...' : books.map((book, i) => <BookCard key={i} {...book} />)}
        </Card.Group>
      </Container>

    );
  }
}

export default App;
