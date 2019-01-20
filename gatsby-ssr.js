import React from "react"
import { Provider } from "react-redux"
import { renderToString } from "react-dom/server"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
import createStore from "./src/utils/createStore"

import Helmet, { HelmetProvider } from "react-helmet-async"

const store = createStore()
  
export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes
}) => {
  const sheet = new ServerStyleSheet()
  const helmetContext = {}

  // const helmet = Helmet.renderStatic()
  

  const app = (
    <HelmetProvider context={helmetContext}>
      <Provider store={store}>
        <StyleSheetManager sheet={sheet.instance}>
          {bodyComponent}
        </StyleSheetManager>
      </Provider>
    </HelmetProvider>
  )
  replaceBodyHTMLString(renderToString(app))
  
  const { helmet } = helmetContext;
  
  setHtmlAttributes(helmet.htmlAttributes.toComponent())
  setBodyAttributes(helmet.bodyAttributes.toComponent())
  
  setHeadComponents([
    sheet.getStyleElement(),
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ])
}