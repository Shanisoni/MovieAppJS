import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native';
import React , {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import TrendingMovies from '../components/trendingMovies';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { styles } from '../theme';

const ios = Platform.OS === 'ios';

export default function HomeScreen() {
  const [trending, setTrending] = useState([1 ,2 , 3]);
  return (
    // The main view with a background color from nativewind
    <View className="flex-1 bg-neutral-800">
      {/* Search bar and logo section */}
      <SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            {/* Apply the yellow text color from your theme file here */}
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Add a ScrollView for the rest of your content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Trending Movies carousal */}
        <TrendingMovies data={trending} />
      </ScrollView>
    </View>
  );
}