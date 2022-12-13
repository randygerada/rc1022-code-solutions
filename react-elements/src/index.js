import React from "react";

import ReactDOM from 'react-dom/client';

const h1Element = React.createElement('h1', null, 'Hello, React!');
console.log(h1Element);

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
h1Element
);
