import React, { Component } from 'react';

export const Answers = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </ul>
)
}
