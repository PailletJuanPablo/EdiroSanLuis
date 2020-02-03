import React, { Component } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';



export default class Selector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SearchableDropdown
        onItemSelect={item => {this.props.sendData(item.name)}}
        containerStyle={{ padding: 5 }}
        textInputStyle={{
          padding: 12,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5
        }}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: '#ddd',
          borderColor: '#bbb',
          borderWidth: 1,
          borderRadius: 5
        }}
        itemTextStyle={{ color: '#222' }}
        itemsContainerStyle={{ maxHeight: 500 }}
        items={this.props.items}
        placeholder={this.props.placeholder}
        resetValue={false}
        underlineColorAndroid="transparent"
      />
    );
  }
}
