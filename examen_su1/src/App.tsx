import {Text, View} from 'react-native';
import { TemperatureScreen } from './presentation/screens/TemperatureScreen';
import { styles } from './config/app_theme';
import { ThemeScreen } from './presentation/screens/ThemeScreen';

export const App = () => {
  return (
    <View style={styles.background}>
      {/*<TemperatureScreen />*/}
      <ThemeScreen />

    </View>
  );
};
