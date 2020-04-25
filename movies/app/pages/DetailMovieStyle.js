import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        elevation: 5,
        flex: 1,
        margin: 10,
        padding: 10,
    },
    item: {
        flex: 0,
        flexDirection: 'row',
    },
    elements: {
        paddingLeft: 20,
        flex: 4,
    },
    img: {
        flex: 2,
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    poster: {
        height: 120,
        width: 100,
    },
    bold: {
        fontWeight: 'bold',
        marginTop: 10,
    },
    capturas: {
        width: 80,
        height: 100,
        marginRight: 10,
    },
    containerCapturas: {
        marginTop: 10,
        flex: 0,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;

