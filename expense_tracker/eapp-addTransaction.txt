import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Header, Content, Form, Item, Input} from 'native-base';

const AddTransaction = () => {
  return (
    <Container>
      <Content>
        <Form>
          <Item style={{...styles.item}}>
            <Input placeholder="Expense Title" />
          </Item>
          <Item style={{...styles.item}}>
            <Input keyboardType="number-pad" placeholder="Expense Price" />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 20,
  },
});

export default AddTransaction;
