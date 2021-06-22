import {Route, Redirect} from 'react-router-dom'
const user = null
export const RoutesPrivate = ({component: Component, rest}: any) => {


  return <Route {...rest} >
    {user ? <Component /> : <Redirect to="login" />}
  </Route>

};
