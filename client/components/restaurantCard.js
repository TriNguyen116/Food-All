import { View, Text, Image,TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'

export default function RestaurantCard({item}) {
    const navigation = useNavigation();
    return (
    <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Restaurant', {...item})}
    >
        <View 
         style=
         {{
            shadowColor: themeColors.bgColor(0.2),
            shadowRadius:7
         }}
        className="mr-6 bg-white rounded-3xl shadow-lg">
            <Image className="h-36 w-64 rounded-t-3xl" 
            source={item.image}
            //source={{ uri: urlFor(imgUrl).url()}}
            />
            <View className="px-3 pb-4 space-y-2">
                <Text className="text-lg font-bold pt-2">{item.name}</Text>
                <View className="flex-row items-center space-x-1">
                    <Image className="h-4 w-4" source={require('../assets/images/fullStar.png')}/>
                    <Text className="text-xs">
                        <Text className="text-green-700">{item.stars}</Text>
                        <Text className="text-gray-700">
                            ({item.reviews} review) <Text className="font-semibold">
                                {item.category}
                                {/* {item?.type?.name} */}
                            </Text>
                        </Text>
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <Icon.MapPin height="15" width="15" color="gray" />
                    <Text className="text-gray-700 text-xs">Nearby {item.address}</Text>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}