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
    const data = {
      name: name,
      description: description,
      ingredients: ingredients,
      price: price,
    };
    if (name === "" || description === "" || ingredients === "" || price == null) {
      Alert.alert("Warning", "You should enter the requested information ")
    }else {
      navigation.navigate('MenuDetailPage', {data});
    }
  }

  return (
    <SafeAreaView>
      <Text style={styles.menu_name}>{route.params.menu.name}</Text>
      <Input 
        label="Name" 
        onChangeText={setName} />
      <Input
        label="Description"
        onChangeText={setDescription}
      />
      <Input
        label="Ingredients"
        onChangeText={setIngredients}
      />
      <Input 
        label="Price" 
        onChangeText={setPrice}
        keyboardType="numeric" />
      <Button 
        title="Apply Food" 
        onPress={handleNavigateDetail} />
    </SafeAreaView>
  );
}
