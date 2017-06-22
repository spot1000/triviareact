import React, { Component } from 'react';
import {Button} from './Button'

export const Answers = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => {
        return <Button key={index} onClick={() => {props.checkAns(item)}} name={item}/>
      })}
    </ul>
)
}
