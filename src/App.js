import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {this.setState({ books })})
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={()=>(
          <Search/>
        )}/>
        <Route exact path='/' render={()=>(
          <ListBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp