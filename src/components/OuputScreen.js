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
 
 const OutputScreen = ({route}) => {
    //  console.log('date **** ',route)
    let dateParam = route && route.params ? route.params.date : new Date().toISOString()
    let finalDate = moment(dateParam).day() === 5 ? moment(dateParam).weekday(8).format("MMMM Do YYYY") : moment(dateParam).add(1, 'days').format('MMMM Do YYYY')
   return (
    <View style={{flex:1,alignItems:'center'}}>
        <Caption style={{marginTop: '20%'}}>Showing next business date from the input date.</Caption>
        <Headline>{finalDate}</Headline>
    </View>
   );
 };
 
 export default OutputScreen;
 