import { View, Text, ScrollView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather"
import { useRoute , useNavigation} from '@react-navigation/native'
import { themeColors } from '../theme';
import DishRow from '../components/dishRow';
import CartIcon from '../components/carticon';

export default function RestaurantScreen() {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item = params;
  // console.log('restaurant:',item);
  return (
    <View>
      <CartIcon/>
      <ScrollView>
        <View className="relative">
          <Image className="h-72 w-full" source={item.image}/>
          {/* nut back */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
              <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)}/>
            </TouchableOpacity>
        </View>
        <View
          style={{borderTopLeftRadius:40,borderTopRightRadius:40}}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image className="h-4 w-4" source={require('../assets/images/fullStar.png')}/>
                    <Text className="text-xs">
                      <Text className="text-green-700">{item.stars}</Text>
                      <Text className="text-gray-700">
                          ({item.reviews} review) <Text className="font-semibold">{item.category}</Text>
                      </Text>
                    </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                  <Icon.MapPin height="15" width="15" color="gray" />
                  <Text className="text-gray-700 text-xs">Nearby {item.address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}
          {
            item.dishes.map((dish, index) => <DishRow item={{...dish}} key={index}/>)
          }
        </View>
      </ScrollView>
    </View>
  )
}