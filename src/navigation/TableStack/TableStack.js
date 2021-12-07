import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Tables from '../../pages/Tables/Tables';
import TableUpdate from '../../pages/Tables/TableUpdate';

const Stack = createNativeStackNavigator();

export default function TableStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TablesPage"
        component={Tables}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Tables',
        }}
      />
      <Stack.Screen
        name="TableUpdatePage"
        component={TableUpdate}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Table Detail',
        }}
      />
    </Stack.Navigator>
  );
}
