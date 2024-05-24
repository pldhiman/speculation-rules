import React from 'react';
import { createRoot } from 'react-dom/client';
import MyComponent from '../../src';

const App = () => (
    <MyComponent />
);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);
