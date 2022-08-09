import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import CartView from "./routes/CartView";
import ProductPage from "./routes/ProductPage";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; } /* HTML5 display-role reset for older browsers */ article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section { display: block; } /* HTML5 hidden-attribute fix for newer browsers */ *[hidden] { display: none; } body { line-height: 1; } menu, ol, ul { list-style: none; } blockquote, q { quotes: none; } blockquote:before, blockquote:after, q:before, q:after { content: ''; content: none; } table { border-collapse: collapse; border-spacing: 0; }




body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  width: 100%;

  padding-top: 36.1px;

  overflow:auto;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

/* 링크 클릭 보라색 흔적 없애기 */

a {
  text-decoration: none;
  color: black;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:focus {
  text-decoration: none;
}
a:hover,
a:active {
  text-decoration: none;
}

/* 링크 클릭 보라색 흔적 없애기 */

i:hover {
  cursor: pointer;
}


`;

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/cartView" element={<CartView />}></Route>
        <Route path="products/*" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
