import React from 'react';
import { createHashHistory } from 'history';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from "react-router-dom";
import Routes from '../routes/Routes';
import '../style/css/Index.scss';
/* 路由 start */
import Page404 from "./pages/404";
/* 路由 end */
/* import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn'); */
const history = createHashHistory();

class Page extends React.Component {
  state = {};
  static getDerivedStateFromProps(props, state){
    return null;
  }
  componentDidMount(){
    this.unListen = history.listen((location, action) => {
    })
  }
  componentDidUpdate(prevProps) {
  }
  componentWillUnmount(){
    this.unListen();
  }
  
  render() {
    return (
      <div draggable>
        <Switch>
          { // 利用render 渲染子路由
            Routes.map((route,index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact} 
                render={(props) => { // 利用render 方法处理
                  if (route.children){
                    return (
                      <div>
                        <route.component {...props} />
                        <Switch>
                          {
                            route.children.map((child,i) => (
                              <Route
                                key={i}
                                path={child.path}
                                exact={child.exact}
                                component={child.component}
                              />
                            ))
                          }
                          <Redirect to={route.children[0].path} />
                        </Switch>
                      </div>
                    )
                  }else {
                    document.title = route.meta && route.meta.title && route.meta.title.length > 0?route.meta.title:"";
                    return (
                      <route.component {...props} />
                    )
                  }
                }}
              />
            ))
            }
            <Redirect to="/app/index" from="/" exact />
            <Redirect to="/app/index" from="/app" exact />
            <Route component={Page404} />
          </Switch>
      </div>
    )
  }
}

export default connect(state=>({
    User: state.User,
    httpData:state.httpData,
    SystemConfig:state.SystemConfig
}))(Page);
