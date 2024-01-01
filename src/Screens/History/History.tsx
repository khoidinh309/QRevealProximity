import React from 'react';
import { Text } from 'react-native';

interface HistoryItem {
  id: number;
  title: string;
  date: string;
}

const History: React.FC = () => {
  const historyItems: HistoryItem[] = [
    { id: 1, title: 'Item 1', date: '2022-01-01' },
    { id: 2, title: 'Item 2', date: '2022-01-02' },
    { id: 3, title: 'Item 3', date: '2022-01-03' },
    // Add more items here
  ];

  return (
    <Text>This is history section</Text>
  );
};

export default History;
