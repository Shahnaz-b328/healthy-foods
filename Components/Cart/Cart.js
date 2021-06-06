import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useParams } from 'react-router'

export default function Cart() {
    const {id} = useParams();
    return (
        <View>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({})
