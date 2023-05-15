import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { RootStackParams } from '../navigation/Navigation'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{

}

const {height: screenHeight} = Dimensions.get('screen')


export const DetailScreen = ( {route}: Props) => {

    const { poster_path, original_title, title} = route.params
    const uri = `https://image.tmdb.org/t/p/w500/${poster_path}`
    

    return (
        <ScrollView>
            <View style={ styles.imageContainer }>
                <View style={styles.imageBorder}>
                    <Image
                        source={{uri}}
                        style={ styles.posterImage }
                    />
                </View>
                
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}> { original_title } </Text>
                <Text style= {styles.title }> { title } </Text>
            </View>
            <View style={styles.marginContainer}>
                <Icon name='heart-outline' color='gray' size={20} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    posterImage: {
        flex: 1,
    },
    imageBorder:{
        overflow: 'hidden',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        flex: 1
    },
    imageContainer: {
        width: '100%',
        height: screenHeight * .6,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
        elevation: 9,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subTitle: {
        fontSize: 16
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
