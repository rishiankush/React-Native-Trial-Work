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
 import { Button, Paragraph, Dialog, Caption } from 'react-native-paper';
 import DateTimePickerModal from "react-native-modal-datetime-picker";
 import moment from 'moment';
 import { StackActions } from '@react-navigation/native';
 
 const MainScreen = ({navigation}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('')
    const [visible, setVisible] = React.useState(false);

    const hideDialog = () => setVisible(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
    //   console.log("A date has been picked: ", date.toISOString());
      let isoDate = date.toISOString()
      let checkWeekDay = moment(isoDate).weekday();
    //   console.log('weekday check ***** ', checkWeekDay)
      if(checkWeekDay > 5 || checkWeekDay === 0){
        setVisible(true)
        setDialogMessage(`Selected day is a weekend`);
      }else{
        navigation.dispatch(
            StackActions.push('OutputScreen',{date: isoDate})
        );
      }
      hideDatePicker();
    };
   return (
    <View style={{flex:1,alignItems:'center'}}>
        <Caption style={{marginTop: '20%'}}>Please Note: You can only select the weekdays or business days.</Caption>
        <Button style={{width:'80%',marginTop: '10%'}} mode="contained" onPress={showDatePicker}>
            Pick a date
        </Button>
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            // minimumDate={new Date()}
            onConfirm={handleConfirm} 
            onCancel={hideDatePicker}
        />
        <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Content>
                <Paragraph>{dialogMessage}</Paragraph>
            </Dialog.Content>
        </Dialog>
    </View>
   );
 };
 
 export default MainScreen;
 