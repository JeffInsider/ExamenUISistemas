import { useState } from 'react';
import {Text, View} from 'react-native';

export const useTemperature = () => {
    const [degrees, setDegrees] = useState(20);

    const increase = () => {
        setDegrees(degrees + 1);
    }

    const decrease = () => {
        setDegrees(degrees - 1);
    }

  return {
    //variables
    degrees,
    //methods
    increase,
    decrease,
  };
};
