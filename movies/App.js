
import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'; 
import MoviesPage from './app/pages/MoviesPage'
import DetailMoviePage from './app/pages/DetailMoviePage';

const StackNavigator = createStackNavigator({
  Movies: {
    screen: MoviesPage,
    navigationOptions: {
      title: 'Peliculas',
    },
  },
  Detail:{
    screen: DetailMoviePage,
    navigationOptions: {
      title: 'Detalle',
    },
  },
});

const AppContainer = createAppContainer(StackNavigator);

class App extends Component{
  render(){
    return <AppContainer/>;
  } 
}

export default App;
