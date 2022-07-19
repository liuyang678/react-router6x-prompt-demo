import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { Expenses } from './routes/Expenses';
import { Invoices } from './routes/Invoices';
import { Customers } from './routes/Customers';

import 'antd/dist/antd.css';
import './style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="customers" element={<Customers />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
