import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

import styles from './InputStyles';

export default function Input({label, ...otherProps}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput {...otherProps} />
      </View>
    </View>
  );
}

