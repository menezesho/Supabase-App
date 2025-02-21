import React from 'react'
import { View, StyleSheet, ViewProps } from 'react-native'
import colors from '@/src/constants/colors';

type TFormProps = ViewProps & {
  children?: React.ReactNode;
};

export const Form: React.FC<TFormProps> = ({ children, ...rest }) => {
  return (
    <View style={styles.container} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 14,
    paddingTop: 14,
  },
});