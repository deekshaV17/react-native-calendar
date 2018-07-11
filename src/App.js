/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
} from 'react-native';




class App extends Component {

  componentDidMount() {
    let today = new Date();
    date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();
    console.log(this.getMonthMapping(today.getMonth()));

  }
  getDayMapping = (day) => {
    let x;
    switch (day) {
      case 0:
        x = 'Sun';
        break;
      case 1:
        x = 'Mon';
        break;
      case 2:
        x = 'Tue';
        break;
      case 3:
        x = 'Wed';
        break;
      case 4:
        x = 'Thu';
        break;
      case 5:
        x = 'Fri';
        break;
      case 6:
        x = 'Sat';
        break;
    }
    return x;
  };

  getMonthMapping = (month) => {
    switch(month) {
      case 0:
        return 'Jan';
      case 1:
        return 'Feb';
      case 2:
        return 'Mar';
      case 3:
        return 'Apr';
      case 4:
        return 'May';
      case 5:
        return 'Jun';
      case 6:
        return 'Jul';
      case 7:
        return 'Aug';
      case 8:
        return 'Sep';
      case 9:
        return 'Oct';
      case 10:
        return 'Nov';
      case 11:
        return 'Dec';
    }
  };

  render() {
    let rows = [];
    let date = new Date();
    let firstDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDateOfCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let lastDateOfPreviousMonth = new Date(date.getFullYear(), date.getMonth(), 0);
    console.log('last day', lastDateOfCurrentMonth.getDate());
    let n = lastDateOfPreviousMonth.getDate() - firstDayOfCurrentMonth.getDay() + 1;
    console.log(n);
    let currentMonthStarted = false;
    if(firstDayOfCurrentMonth.getDay() === 0){
      n = 1;
      currentMonthStarted = true;
    }
    for(let i = 0; i < 6; i++) {
      let cols = [];
      for(let j = 0 ; j < 7; j++) {
        if (n > lastDateOfPreviousMonth.getDate() && !currentMonthStarted){
          n = 1;
          currentMonthStarted = true;
          cols.push(<View key={j} style={styles.elementOutOfMonth}>
            <TouchableNativeFeedback>
              <Text>{n++}</Text>
            </TouchableNativeFeedback>
          </View>);
        }
        else if (n > lastDateOfCurrentMonth.getDate() && currentMonthStarted){
          n = 1;
          cols.push(<View key={j} style={styles.elementOutOfMonth}>
            <TouchableNativeFeedback>
              <Text>{n++}</Text>
            </TouchableNativeFeedback>
          </View>);
        }
        else {
          cols.push(<View key={j} style={styles.element}>
            <TouchableNativeFeedback>
              <Text>{n++}</Text>
            </TouchableNativeFeedback>
          </View>);
        }
      }
      rows.push(<View key={i} style={styles.rows}>{cols}</View>);
    }

    let days = [];
    for(let i = 0; i < 7; i ++) {
      days.push(<View key={i} style={styles.dayElement}><Text>{this.getDayMapping(i)}</Text></View>);
    }

    return (
      <View style={styles.container}>
        <View style={styles.weekRow}>
          {days}
        </View>
        {rows}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  weekRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  element: {
    flex: 1,
    padding: 5,
    borderColor: '#555',
    borderWidth: 0.15,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    fontSize: 20,
  },
  elementOutOfMonth: {
    flex: 1,
    padding: 5,
    borderColor: '#555',
    borderWidth: 0.15,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    color: '#555',
    fontSize: 20,
  },
  dayElement: {
    flex: 1,
    alignItems: 'center',
  },
  rows: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
