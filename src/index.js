import React, { Component as C } from 'react';
import { render as r } from 'react-dom';

const Span = () => <h1>Hello!</h1>;
r(<Span />, document.querySelector('.content'));
