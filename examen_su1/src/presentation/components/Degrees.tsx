import {Text, View} from 'react-native';
import { colors, styles } from '../../config/app_theme';

interface Props {
    degrees: number;
}

export const Degrees = ({degrees}: Props) => {

    //metodo para cambiar el color del texto segun la temperatura
    const color = () => {
        if (degrees < 15) {
            return colors.primary;
        } else if (degrees >= 15 && degrees <= 25) {
            return colors.green;
        } else {
            return colors.red;
        }
    }
   
return (
    <View>
        <Text style={[styles.degrees, { color: color() }]}>{degrees}</Text>
    </View>
);
};
