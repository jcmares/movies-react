import React, { Component } from "react";
import {Text, View,Image , ScrollView } from 'react-native';
import styles from '../pages/DetailMovieStyle';


class DetailMoviePage extends Component{

    constructor(props){
        super(props);
    }

    render(){

        const {movie} = this.props.navigation.state.params;
        
        return (
            <ScrollView>
        <View style={styles.container}>
          <View style={styles.item}>
            <View style={styles.img}>
              <Image
                style={styles.poster}
                source={{
                  uri: movie.Poster,
                }}
              />
            </View>
            <View style={styles.elements}>
              <Text style={styles.title}>{movie.Title}</Text>
              <Text>
                <Text style={styles.bold}>Año:</Text> {movie.Year}
              </Text>
              <Text>
                <Text style={styles.bold}>Generos:</Text> {movie.Genre}
              </Text>
              <Text>
                <Text style={styles.bold}>Director:</Text> {movie.Director}
              </Text>
            </View>
          </View>
          <Text style={styles.bold}>Actores:</Text>
          <Text>{movie.Actors}</Text>
          <Text style={styles.bold}>Sinopsis:</Text>
          <Text>{movie.Plot} </Text>
          <ScrollView horizontal={true}>
            <View style={styles.containerCapturas}>
              {movie.Images.map(item => (
                <Image
                  style={styles.capturas}
                  source={{
                    uri: item,
                  }}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>

        );
    }
}

export default DetailMoviePage;