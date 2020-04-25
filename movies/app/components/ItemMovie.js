import React, { Component } from 'react';
import { Image, Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from '../pages/MoviesStyles';

class ItemMovie extends Component {
   
    render() {
        const {item, onPressItem} = this.props;
        return (
            <TouchableWithoutFeedback onPress={onPressItem}>
            <View style={styles.item}>
                <View style={styles.img}>
                    <Image 
                        style={styles.poster}
                        source={{ uri : item.Poster}}/>
                </View>
                <View style={styles.elements}>
                    <Text style={styles.title}>{item.Title}</Text>
                    <Text>Año: {item.Year}</Text>
                    <Text>Generos: {item.Genre}</Text>
                    <Text>Director: {item.Director}</Text>
                </View>
            </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default ItemMovie;