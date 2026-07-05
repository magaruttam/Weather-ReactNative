import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
type WeatherCardProps = {
  city: string;
  country: string;
  weather: any;
};

const WeatherCard = ({ city, country, weather }: WeatherCardProps) => {
  if (!weather) {
    return <Text>Loading...</Text>;
  }
  const time = weather.current.time;
const date = new Date(time);

const day = date.getDate(); // 1

const month = date.toLocaleString("en-US", {
  month: "long",
}); // July

const week = date.toLocaleString("en-US", {
  weekday: "long",
}); // Wednesday

const sunrise = new Date(weather.daily.sunrise[0]).toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
});
const sunset = new Date(weather.daily.sunset[0]).toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
});

console.log(day);   // 1
console.log(month); // July
console.log(week);  // Wednesday
console.log("Wea",weather)
  return (
    <View style={style.container}>
      <View style={style.location_section}>
        <View style={style.location}>
          <Svg style={style.icon} fill="#e3e3e3" viewBox="0 -960 960 960">
            <Path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
          </Svg>
          <Text style={style.country}>
            {city},{country}
          </Text>
        </View>

        <Text style={style.date}>{week},{month} {day}</Text>
      </View>
      <View style={style.weatherCard}>
        {/* <LinearGradient
          colors={['#5B7CFF', '#6F3CF5', '#8A2BE2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={style.weatherCard}
        ></LinearGradient> */}
        {/* Top Section */}
        <View style={style.cardTop}>
          <View>
            <Text style={style.temperature}>{weather.current.temperature_2m}</Text>
            <Text style={style.condition}>Partly Cloudy</Text>
            <Text style={style.highLow}>H: {weather.daily.temperature_2m_max[0]}    L: {weather.daily.temperature_2m_min[0]}</Text>
          </View>

          <Svg
            width={70}
            height={70}
            viewBox="0 0 24 24"
            fill="#fff">
            {/* Replace with your weather SVG */}
            {/* <Path d="..." /> */}
          </Svg>
        </View>

        <View style={style.divider} />

        {/* Bottom Section */}
        <View style={style.cardBottom}>
          <View>
            <Text style={style.label}>FEELS LIKE</Text>
            <Text style={style.value}>{weather.current.apparent_temperature}</Text>
          </View>

          <View style={style.infoItem}>
            <Text style={style.iconText}>🌅</Text>
            <Text style={style.time}>{sunrise}</Text>
          </View>

          <View style={style.infoItem}>
            <Text style={style.iconText}>🌇</Text>
            <Text style={style.time}>{sunset}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 26,
  },
  icon: {
    height: 18,
    width: 18,
  },
  location_section: {
    flexDirection: 'column',
    display: 'flex'
  },
  location: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8
  },
  country: {
    color: '#C5C5D7',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 3,
    marginBottom: 5
  },
  date: {
    color: '#DFE0FE',
    fontSize: 24,
    fontWeight: '600'
  },
  weatherCard: {
    marginTop: 24,
    borderRadius: 30,
    padding: 24,

    // Gradient replacement
    backgroundColor: '#6B3CF7',

    shadowColor: '#5A5DFF',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.45,
    shadowRadius: 18,
    elevation: 15,
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  temperature: {
    color: '#fff',
    fontSize: 56,
    fontWeight: '700',
  },

  condition: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    marginTop: -6,
  },

  highLow: {
    color: '#D6CCFF',
    fontSize: 16,
    marginTop: 10,
  },

  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
    marginVertical: 28,
  },

  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  label: {
    color: '#CFC5FF',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
  },

  value: {
    color: '#fff',
    fontSize: 30,
    marginTop: 6,
  },

  infoItem: {
    alignItems: 'center',
  },

  iconText: {
    fontSize: 20,
  },

  time: {
    color: '#D6CCFF',
    fontSize: 13,
    marginTop: 6,
  },
});

export default WeatherCard;
