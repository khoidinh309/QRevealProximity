import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchScannedLocation } from '@/Store/reducers';
import { useFocusEffect } from '@react-navigation/native';
import { HistoryScreens } from '..';
import History from './History';

const Stack = createNativeStackNavigator();

const HistoryContainer = () => {
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchScannedLocation());
    }, [])
  );

  

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HistoryScreens.HISTORY_PAGE}
        component={History}
        options={() => ({
          headerShown: false
        })}
      />
    </Stack.Navigator>
  );
};

export default HistoryContainer;
