import React from 'react'
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { Card } from '../components/Card'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'
import { HorizontalSlider } from '../components/HorizontalSlider'

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()

    const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies()
    
   if(isLoading){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color={'#002F7F'} size={100} />
            </View>
        )
    }

    return (
    <ScrollView>
        <View style={{marginTop: top + 20}}>
            
            {/*  Carousel Principal */}
            <View style={{ height: 440 }}>
                <Carousel
                    data={ nowPlaying }
                    renderItem={ ({item}: any) => <Card movie={item} />}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                    inactiveSlideOpacity={.9}
                />
            </View>

            <HorizontalSlider title="Now Playing" movies={nowPlaying} />
            <HorizontalSlider title="Popular" movies={popular} />
            <HorizontalSlider title="Top Rated" movies={topRated} />
            <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
    </ScrollView>
   
    )
}
