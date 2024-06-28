import { Pressable, Text, View } from "react-native"
import { styles } from "../../config/app_theme";

interface Props {
    label: string;
    onPress: () => void;
}

const ThemeButton = ({ label, onPress}: Props) => {

    return (
        <Pressable onPress={onPress} style={({pressed}) => [
            styles.buttonTheme,
            { backgroundColor: pressed ? "#888" : "#ccc" },
        ]}>
            <Text style={styles.buttonTextTheme}>{label}</Text>
        </Pressable>
    )
}

export default ThemeButton