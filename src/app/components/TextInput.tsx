import React from 'react'
import { View, Text, TextInput as RNTextInput, TextInputProps, StyleSheet } from 'react-native'
import colors from '@/src/app/constants/colors';

type TTextFieldProps = TextInputProps & {
  label: string;
};

export function TextInput({ label, ...rest }: TTextFieldProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput style={styles.input} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: colors.zinc,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});