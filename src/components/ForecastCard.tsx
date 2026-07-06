import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type ForecastCardProps = {
  time?: string;
  day?: string;
  icon: string;
  temperature?: string;
  highTemp?: string;
  lowTemp?: string;
  windSpeed?: string;
  precipitation?: string;
  variant: 'hourly' | 'daily';
};

const ForecastCard = ({
  time,
  day,
  icon,
  temperature,
  highTemp,
  lowTemp,
  windSpeed,
  precipitation,
  variant,
}: ForecastCardProps) => {
  if (variant === 'hourly') {
    return (
      <View style={styles.card}>
        {/* Left: time + wind/rain info */}
        <View style={styles.leftSection}>
          <Text style={styles.timeText}>{time}</Text>
          <View style={styles.metaRow}>
            <Text style={styles.metaIcon}>💨</Text>
            <Text style={styles.metaText}>{windSpeed}</Text>
            <Text style={styles.metaIcon}>💧</Text>
            <Text style={styles.metaText}>{precipitation}</Text>
          </View>
        </View>

        {/* Right: icon + temp */}
        <View style={styles.rightSection}>
          <Text style={styles.weatherIcon}>{icon}</Text>
          <Text style={styles.tempText}>{temperature}</Text>
        </View>
      </View>
    );
  }

  // Daily variant
  return (
    <View style={styles.card}>
      {/* Left: day + rain chance */}
      <View style={styles.leftSection}>
        <Text style={styles.dayText}>{day}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.metaIcon}>💧</Text>
          <Text style={styles.metaText}>{precipitation}</Text>
        </View>
      </View>

      {/* Right: icon + high/low temps */}
      <View style={styles.rightSection}>
        <Text style={styles.weatherIcon}>{icon}</Text>
        <View style={styles.tempColumn}>
          <Text style={styles.highTemp}>{highTemp}</Text>
          <Text style={styles.lowTemp}>{lowTemp}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E2035',
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSection: {
    flex: 1,
    gap: 6,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  // Hourly
  timeText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
  },
  // Daily
  dayText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaIcon: {
    fontSize: 13,
  },
  metaText: {
    color: '#9B9BB5',
    fontSize: 13,
    fontWeight: '500',
    marginRight: 6,
  },
  weatherIcon: {
    fontSize: 36,
  },
  tempText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '700',
  },
  tempColumn: {
    alignItems: 'flex-end',
    gap: 2,
  },
  highTemp: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  lowTemp: {
    color: '#9B9BB5',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default ForecastCard;
