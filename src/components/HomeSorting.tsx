import React, { useState } from 'react'
import { View, Switch, StyleSheet, Text, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const HomeSorting = () => {

  const [isEnabled, setIsEnabled] = useState(false)
  const [sort, setSort] = useState('name')

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)


  return (
    <View >
      <View style={styles.switch}>
        <Text>sort results</Text>
        <Switch
          trackColor={{ false: "lightgray", true: "lightblue" }}
          thumbColor={isEnabled ? "darkblue" : "darkgray"}
          onValueChange={toggleSwitch}
          value={isEnabled} />
      </View>
      {isEnabled && <Picker
        style={styles.switch}
        prompt='Sort results'
        selectedValue={sort}
        onValueChange={(itemValue, itemIndex) =>
          setSort(itemValue)
        }>
        <Picker.Item label="by name" value="name" />
        <Picker.Item label="by price" value="price" />
      </Picker>}
    </View>
  )
}

export default HomeSorting


const styles = StyleSheet.create({
  switch: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    paddingHorizontal: 10,
    marginBottom: 5
  },
})
