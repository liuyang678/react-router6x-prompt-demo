import * as React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'antd';

export function Home() {
  return (
    <React.Fragment>
      <Alert
        type="warning"
        description={
          <React.Fragment>
            <div>
              There are several bugs in react-router-dom's HashRouter collected
              in this stackblitz:
            </div>
            <ul>
              <li>
                Navigation doesn't happen when manually changing the URL, if
                navigation was blocked with "navigator.block()"
                <ol>
                  <li>
                    Go to "Expenses", this is a page, that uses
                    "navigator.block", but since the condition is "false",
                    immediately tries to unblock and retry navigation when
                    navigated.
                  </li>
                  <li>
                    Try changing url from "/#/expenses" to just "/#/" manually.
                  </li>
                  <li>
                    Result: navigation isn't happening, page is not changed
                  </li>
                </ol>
              </li>
              <li>
                Navigation doesn't happen when using browser "back" button, if
                navigation was blocked with "navigator.block()".
                <ol>
                  <li>
                    Go to "Expenses", this is a page, that uses
                    "navigator.block", but since the condition is "false",
                    immediately tries to unblock and retry navigation when
                    navigated.
                  </li>
                  <li>
                    Try clicking "Back" button on UI on in the browser. Try once
                    more.
                  </li>
                  <li>
                    Result: navigation doesn't happen on the first interaction,
                    only on the second one.
                  </li>
                </ol>
              </li>
            </ul>
            <div>
              Please use "Open in New Window" button to open this demo in a
              separate browser tab and to be able to use browser "back" button.
            </div>
          </React.Fragment>
        }
      />
      <h1>Home</h1>
      <div>
        <Link to="/invoices">Invoices</Link>
      </div>
      <div>
        <Link to="/expenses">Expenses</Link>
      </div>
      <div>
        <Link to="/customers">Customers</Link>
      </div>
    </React.Fragment>
  );
}
