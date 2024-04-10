import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            <FormattedMessage id={'hello-world'} defaultMessage={'Hello world'}></FormattedMessage>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
