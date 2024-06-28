import { Pressable, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { styles } from '../../config/app_theme';

interface Props {
    label: string;
    color: string;
    onPress: () => void;
}

export const Button = ({ label, color = Colors.primary, onPress }: Props) => {
    return (
        <Pressable 
        onPress={() => onPress()}
        style={({ pressed }) => ({
            ...styles.button, 
            backgroundColor: color,
            width: 200,
            opacity: pressed ? 0.5 : 1,
            })}>
            <Text style={styles.buttonText}>{label}</Text>
        </Pressable>
    );
};
