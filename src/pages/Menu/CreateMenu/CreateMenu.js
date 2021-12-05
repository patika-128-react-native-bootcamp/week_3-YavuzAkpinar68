import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import {Alert, SafeAreaView, Text} from 'react-native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import styles from './CreateMenu.styles';

export default function CreateMenu() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState(0);

  const route = useRoute();

  function handleNavigateDetail() {
    const fd = {
      name: name,
      description: description,
      ingredients: ingredients,
      price: price,
    };
    if (name === "" || description === "" || ingredients === "" || price == null) {
      Alert.alert("Warning", "You should enter the requested information ")
    }else {
      navigation.navigate('MenuDetailPage', {fd});

    }
  }

  return (
    <SafeAreaView>
      <Text style={styles.menu_name}>{route.params.menu.name}</Text>
      <Input label="Name" onChangeText={value => setName(value)} />
      <Input
        label="Description"
        onChangeText={value => setDescription(value)}
      />
      <Input
        label="Ingredients"
        onChangeText={value => setIngredients(value)}
      />
      <Input label="Price" onChangeText={value => setPrice(value)} />
      <Button title="Apply Food" onPress={handleNavigateDetail} />
    </SafeAreaView>
  );
}
