import React from 'react'
import { Route, IndexRoute } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
// import HomeView from 'views/HomeView/HomeView'
import Home from 'containers/Home/Home';
import About from 'containers/About/About';
import GuestBook from 'containers/GuestBook/GuestBook';

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={Home} />
    <Route path='home' component={Home} />
    <Route path='about' component={About} />
    <Route path='guest_book' component={GuestBook} />
  </Route>
)
