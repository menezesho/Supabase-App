import React from 'react'
import { View, StyleSheet, ViewProps, SafeAreaView, ScrollView } from 'react-native'
import colors from '@/src/constants/colors';

type TPageProps = ViewProps & {
  children?: React.ReactNode;
};

export const Page: React.FC<TPageProps> = ({ children, style, ...rest }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={[styles.container, style]} {...rest}>
          {children}
        </View>
      </ScrollView >
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 34,
    backgroundColor: colors.zinc,
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.white,
  },
});