import React, { Component } from 'react';

export const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.name}</button>
  );
}
