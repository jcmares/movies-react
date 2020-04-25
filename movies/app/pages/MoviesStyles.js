import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        elevation: 5,
        flex: 1,
        flexDirection: 'row',
    },
    elements: {
        padding: 20,
        flex: 4,
    },
    img: {
        flex: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    poster: {
        height: 120,
        width: 100,
    },
});

export default styles;
