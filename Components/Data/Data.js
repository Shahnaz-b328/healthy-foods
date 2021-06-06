import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Foods from '../Foods/Foods'

export default function Data() {
    const foods = [
        {
            id: 1,
            name:'Red-Beetroot-Soup',
            image: 'http://fitmeal.like-themes.com/wp-content/uploads/2018/02/dish_04-1-360x360.jpg',
            price:100,
            des:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        },
        {
            id:2,
            name:'Steaks-with-Asparagus',
            image:'http://fitmeal.like-themes.com/wp-content/uploads/2018/02/dish_05-1-360x360.jpg',
            price:20,
            des:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        },
        {
            id: 3,
            name:'Tender rabbit soup',
            image:'http://fitmeal.like-themes.com/wp-content/uploads/2018/02/dish_06-1-360x360.jpg',
            price: 200,
            des:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        },
        {
            id: 4,
            name:'Grilled Chicken Breast',
            image:'http://fitmeal.like-themes.com/wp-content/uploads/2018/02/dish_08-1-360x360.jpg',
            price: 80,
            des:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        },
        {
            id: 5,
            name:'Salad with Mozarella',
            image:'http://fitmeal.like-themes.com/wp-content/uploads/2018/02/dish_03-1-360x360.jpg',
            price: 20,
            des:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        },
        {
            id: 6,
            name:'Chicken with Vegetables',
            image:'http://fitmeal.like-themes.com/wp-content/uploads/2018/02/dish_07-1-360x360.jpg',
            price: 70,
            des:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        },
    ]
    return (
        <View style={styles.container}>
            {
                foods.map(food => <Foods food={food}></Foods>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:'50px',
        alignItems: 'center',
    justifyContent: 'center',
    }
})
