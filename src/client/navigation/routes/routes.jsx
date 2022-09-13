import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {TopBar} from '~gui-library';
import Logo from '../../images/logo@2x.png';

import { Main } from '../../views/main/main';
import { OilRigsView } from '~client/views/oil-rigs-view/oil-rigs-view';

export const Routes = () => {
  return (
    <>
      <TopBar
        title={{
          logo: <img src={Logo} alt="logo" />,
          label: 'Hiring Challenge'
        }}
      />
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/oil-rigs" component={OilRigsView} />
      </Router>
    </>
  );
};
