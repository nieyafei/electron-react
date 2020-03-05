import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Page from '../components/Page';

// other
import Page404 from "../components/pages/404";

/*const Wysiwyg = (location, cb) => {     // 按需加载富文本配置
    require.ensure([], require => {
        cb(null, require('../components/ui/Wysiwyg').default);
    }, 'Wysiwyg');
};*/

export default class CRouter extends Component {
  requireAuth = (permission, component) => {
      const { store } = this.props;
      const { auth } = store.getState().httpData;
      if (!auth || !auth.data.permissions.includes(permission)) window.location.hash = '/404';
      return component;
  };
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/app" component={Page} />
          <Route path="/" component={Page} />
          <Route component={Page404} />
        </Switch>
      </HashRouter>
    )
  }
}
