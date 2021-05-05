/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 import moment from 'moment';
 import { Caption, Headline } from 'react-native-paper';
 
 const OutputScreen = ({route, navigation}) => {
     console.log('date **** ',route)
    let finalDate = moment(route.params.date).day() === 5 ? moment(route.params.date).weekday(8).format("MMMM Do YYYY") : moment(route.params.date).add(1, 'days').format('MMMM Do YYYY')
   return (
    <View style={{flex:1,alignItems:'center'}}>
        <Caption style={{marginTop: '20%'}}>Showing next business date from the input date.</Caption>
        <Headline>{finalDate}</Headline>
    </View>
   );
 };
 
 export default OutputScreen;
 