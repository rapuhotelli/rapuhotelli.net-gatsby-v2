import React from "react"
import { Provider } from "react-redux"
import { HelmetProvider } from 'react-helmet-async'
import createStore from "./src/utils/createStore"

const store = createStore()

// eslint-disable-next-line react/display-name,react/prop-types
export const wrapRootElement = ({ element }) => (
  <HelmetProvider>
    <Provider store={store}>{element}</Provider>
  </HelmetProvider>
)

/*
import wrapWithProvider from "./provider-wrapper"
export const wrapRootElement = wrapWithProvider
*/
/*
import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from './src/utils/createStore'

export const replaceRouterComponent = ({ history }) => {
  const store = createStore()

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}
*/