import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

interface Props {
    movie: Movie
    height?: number
    width?: number
}

export const Card = ({movie, height = 420, width = 300}:Props) => {

    const { title,poster_path } = movie

    const uri = `https://image.tmdb.org/t/p/w500/${poster_path}`

    const navigation = useNavigation<any>()
    
    return (
        <TouchableOpacity
            onPress={ () => navigation.navigate('DetailScreen', movie)}
            activeOpacity={.8}
            style={{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7
            }}
        >
            <View style={ styles.imageContainer}>
                <Image
                    source={{uri}}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 20
    },
    imageContainer:{
        borderRadius: 20,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
        elevation: 9,
    }
})