import { Movie } from "../interfaces/movieInterface"
import { View, Text, FlatList } from 'react-native';
import { Card } from "./Card";

interface Props {
    title?: string
    movies: Movie[],
}

export const HorizontalSlider = ({title, movies}: Props) => {    
    return (
        <View style={{

            height: (title) ? 260 : 220
        }}>
            {
                title && <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5 }}> { title } </Text>
            }
            
            <FlatList
                data={ movies }
                renderItem={ ({item}: any) => ( 
                    <Card movie={item} width={ 140 } height={200} />
                )}
                keyExtractor={ (item) => item.id.toString() }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
