import { Text, View } from 'react-native';
import { useTemperature } from '../hooks/useTemperature';
import { colors, styles } from '../../config/app_theme';
import { Degrees } from '../components/Degrees';
import { Button } from '../components/Button';

export const TemperatureScreen = () => {
    const { degrees, increase, decrease } = useTemperature();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Temperature App</Text>
            <Degrees degrees={degrees} />
            <View style={styles.row}>
                <Button label="-" color={colors.gray2} onPress={decrease} />
                <Button label="+" color={colors.primary} onPress={increase} />
            </View>
        </View>
    );
};

