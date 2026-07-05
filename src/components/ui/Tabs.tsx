import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './Tabs.style';
import { TabsProps } from './Tabs.types';

const Tabs = ({ tabs, activeTab, onChange }: TabsProps) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = tab.value === activeTab;

        return (
          <TouchableOpacity
            key={tab.value}
            style={[
              styles.tab,
              isActive && styles.activeTab,
            ]}
            onPress={() => onChange(tab.value)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.text,
                isActive && styles.activeText,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Tabs;