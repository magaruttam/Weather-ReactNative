import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './Tabs.style';
import { TabsProps } from './Tabs.types';

const Tabs = ({ tabs, activeTab, onChange, containerStyle, tabStyle, activeTabStyle, textStyle, activeTextStyle }: TabsProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {tabs.map((tab) => {
        const isActive = tab.value === activeTab;

        return (
          <TouchableOpacity
            key={tab.value}
            style={[
              styles.tab,
              tabStyle,
              isActive && styles.activeTab,
              isActive && activeTabStyle,
            ]}
            onPress={() => onChange(tab.value)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.text,
                textStyle,
                isActive && styles.activeText,
                isActive && activeTextStyle,
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