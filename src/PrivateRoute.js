import React from 'react';
import { Route, Redirect } from "react-router";

export default function PrivateRoute ( {component: Component, auth, ...rest} ) {

    return (
      <Route
        {...rest}
        render = {(props) => auth === true
          ? <Component />
          : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
      />
    )

}