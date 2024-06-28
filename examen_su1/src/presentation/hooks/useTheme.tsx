import { useState } from 'react';
import {Text, View} from 'react-native';

export const useTheme = () => {
    const [theme, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme(!theme);
    }
  return {
    //variables
    theme,
    //methods
    toggleTheme,
  }
};
