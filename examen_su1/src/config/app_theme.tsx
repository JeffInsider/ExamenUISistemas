import { StyleSheet } from "react-native";

export const colors = {
    light: '#f0f0f0',
    primary: '#1261c8',
    green: '#30b453',
    red: '#e85c4f',
    gray: '#2a2a2a',
    gray2: '#979494',
};

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.gray,
    },
    container: {
        flex: 1,
        padding: 20,
        margin: 20,
        justifyContent: 'flex-start',
    },
    containerTheme: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 25,
        color: colors.light,
        textAlign: 'center',
        padding: 50,

    },
    degrees: {
        fontSize: 100,
        color: colors.green,
        textAlign: 'center',
        padding: 40,
        marginTop: 50,
        marginBottom: 50,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
    },
    buttonTheme: {
        height: 50,
        width: 200,
        backgroundColor: "#9b9b9b",
        justifyContent: "center",
        borderRadius: 10,
        marginHorizontal: 10,
    },
    buttonTextTheme: {
        textAlign: "center",
        padding: 10,
        color: "#000",
        fontSize: 20,
        fontWeight: "300",
    },
    themeDark: {
        flex: 1,
        backgroundColor: colors.gray,
    },
    themeWhite: {
        flex: 1,
        backgroundColor: colors.light,
    },
    themeGreen: {
        flex: 1,
        backgroundColor: colors.green,
    },
});