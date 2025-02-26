import colors from '@/constants/colors'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Icon = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name='person'
        size={24}
        color={colors.gray2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: colors.gray,
  }
});