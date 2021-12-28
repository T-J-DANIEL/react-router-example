import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Invoices from './routes/invoices';
import Expenses from './routes/expenses';
import Invoice from './routes/invoice';
import App from './App';
import './main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//make sure to check out extra example file also check original tutorials at :https://reactrouter.com/docs/en/v6/getting-started/tutorial#reading-url-params

let rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select an invoice</p>
              </main>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </Router>,
  rootElement
);
