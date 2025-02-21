import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native'
import colors from '@/src/constants/colors';

type TButtonProps = TouchableOpacityProps & {
  text: string;
};

export function Button({ text, ...rest }: TButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});