import {Text, View} from 'react-native';
import { useTheme } from '../hooks/useTheme';
import ThemeButton from '../components/ThemeButton';
import { styles } from '../../config/app_theme';

export const ThemeScreen = () => {
    const { theme, toggleTheme, } = useTheme();
  return (
    <View style={theme ? styles.themeDark : styles.themeWhite}>
      <View style={styles.containerTheme}>
        <ThemeButton label="Cambiar pantalla" onPress={toggleTheme} />
      </View>
    </View>
  );
};
