import * as React from 'react';
import { Link } from 'react-router-dom';
import { useBlocker } from '../useBlocker';
import { Back } from '../Back';

export function Invoices() {
  useBlocker(() => true);

  return (
    <React.Fragment>
      <h1>Invoices</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Back />
      </div>
    </React.Fragment>
  );
}
