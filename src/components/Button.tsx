import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet, ActivityIndicator } from 'react-native'
import colors from '@/constants/colors';

type TButtonProps = TouchableOpacityProps & {
  text: string;
  isLoading?: boolean;
};

export function Button({ text, isLoading, disabled, ...rest }: TButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled ? disabled : isLoading}
      activeOpacity={0.8}
      style={styles.button}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
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