import * as React from 'react';
import { Link } from 'react-router-dom';
import { Back } from '../Back';

export function Customers() {
  return (
    <React.Fragment>
      <h1>Customers</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Back />
      </div>
    </React.Fragment>
  );
}
