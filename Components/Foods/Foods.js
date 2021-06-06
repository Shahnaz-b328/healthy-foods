import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card } from 'react-native-elements';



export default function Foods(props) {
    const { name, price, image, des } = props.food;
    return (
        <View style={styles.container}>
            <Card>
                <Card.Title style={styles.title}>{name}</Card.Title>
                <Card.Divider />
                <Card.Image style={{ width: '300px' }} source={image}>
                </Card.Image>
                <Text style={styles.text}>
                    {des}
                </Text>
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:'20px',color:'#ff2400'}}>${price}</Text>
                <Button style={styles.button} title='Order'></Button>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        color: 'purple',
        margin: 5,
        padding: 5,
        borderRadius: 3
    },
    text:{
        margin:'5px 5px',
        height:'100px',
        width:'300px',
        textAlign:'justify',
        color:'navy'
    },
    title:{
        color:'#36454f',
        fontWeight:'800'
    },
    button:{
        backgroundColor:'#32174d'
    }
})
