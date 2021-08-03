import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Divider, Image } from 'antd';

function App() {
  return (
    <div className="App">
      <h1>Security Web Page</h1>
      <Divider></Divider>
      <Image src="https://sectigostore.com/blog/wp-content/uploads/2020/06/cyber-security-tips-for-smbs.jpg" preview={false}></Image>
      <div>Empty Page</div>
    </div>
  );
}

export default App;
