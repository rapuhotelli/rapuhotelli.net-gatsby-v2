import React from "react"
import { Provider } from "react-redux"
import { renderToString } from "react-dom/server"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
import createStore from "./src/utils/createStore"

import Helmet from "react-helmet"
/*
export const onRenderBody = (
  { setHeadComponents, setHtmlAttributes, setBodyAttributes },
  pluginOptions
) => {
  const helmet = Helmet.renderStatic()
  setHtmlAttributes(helmet.htmlAttributes.toComponent())
  setBodyAttributes(helmet.bodyAttributes.toComponent())
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ])
}
*/
export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes
}) => {
  const sheet = new ServerStyleSheet()
  const store = createStore()

  const helmet = Helmet.renderStatic()
  setHtmlAttributes(helmet.htmlAttributes.toComponent())
  setBodyAttributes(helmet.bodyAttributes.toComponent())

  const app = () => (
    <Provider store={store}>
      <StyleSheetManager sheet={sheet.instance}>
        {bodyComponent}
      </StyleSheetManager>
    </Provider>
  )
  replaceBodyHTMLString(renderToString(<app />))
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