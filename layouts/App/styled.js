import { Global, css } from '@emotion/react'

export default function AppLayoutStyled({ children }) {
    return (
        <div style={{ minHeight: '100vh', width: '100%', height: '100%' }}>
            <Global
                styles={css`
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed,
        figure, figcaption, footer, header, hgroup,
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        }

        :focus {
            outline: 0;
        }

        article, aside, details, figcaption, figure,
        footer, header, hgroup, menu, nav, section {
        display: block;
        }

        body {
        line-height: 1;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: 'Playfair Display', serif;
        }

        ol, ul {
        list-style: none;
        }

        blockquote, q {
        quotes: none;
        }

        blockquote:before, blockquote:after,
        q:before, q:after {
        content: '';
        content: none;
        }

        table {
        border-collapse: collapse;
        border-spacing: 0;
        }

        input[type=search]::-webkit-search-cancel-button,
        input[type=search]::-webkit-search-decoration,
        input[type=search]::-webkit-search-results-button,
        input[type=search]::-webkit-search-results-decoration {
            -webkit-appearance: none;
            -moz-appearance: none;
        }

        input[type=search] {
            -webkit-appearance: none;
            -moz-appearance: none;
            -webkit-box-sizing: content-box;
            -moz-box-sizing: content-box;
            box-sizing: content-box;
        }

        textarea {
            overflow: auto;
            vertical-align: top;
            resize: vertical;
        }

        audio,
        canvas,
        video {
            display: inline-block;
            *display: inline;
            *zoom: 1;
            max-width: 100%;
        }

        audio:not([controls]) {
            display: none;
            height: 0;
        }

        [hidden] {
            display: none;
        }

        html {
            font-size: 100%;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        a:focus {
            outline: thin dotted;
        }

        a:active,
        a:hover {
            outline: 0;
        }

        img {
            border: 0;
            -ms-interpolation-mode: bicubic;
        }

        figure {
            margin: 0;
        }

        form {
            margin: 0;
        }

        fieldset {
            border: 1px solid #c0c0c0;
            margin: 0 2px;
            padding: 0.35em 0.625em 0.75em;
        }

        legend {
            border: 0;
            padding: 0;
            white-space: normal;
            *margin-left: -7px;
        }

        button,
        input,
        select,
        textarea {
            font-size: 100%;
            margin: 0;
            vertical-align: baseline;
            *vertical-align: middle;
        }


        button,
        input {
            line-height: normal;
        }

        button,
        select {
            text-transform: none;
        }

        button,
        html input[type="button"],
        input[type="reset"],
        input[type="submit"] {
            -webkit-appearance: button;
            cursor: pointer;
            *overflow: visible;
        }

        button[disabled],
        html input[disabled] {
            cursor: default;
        }

        input[type="checkbox"],
        input[type="radio"] {
            box-sizing: border-box;
            padding: 0;
            *height: 13px;
            *width: 13px;
        }

        input[type="search"] {
            -webkit-appearance: textfield;
            -moz-box-sizing: content-box;
            -webkit-box-sizing: content-box;
            box-sizing: content-box;
        }

        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-decoration {
            -webkit-appearance: none;
        }

        button::-moz-focus-inner,
        input::-moz-focus-inner {
            border: 0;
            padding: 0;
        }

        /**
        * 1. Remove default vertical scrollbar in IE 6/7/8/9.
        * 2. Improve readability and alignment in all browsers.
        */

        textarea {
            overflow: auto; /* 1 */
            vertical-align: top; /* 2 */
        }

        /**
        * Remove most spacing between table cells.
        */

        table {
            border-collapse: collapse;
            border-spacing: 0;
        }

        html,
        button,
        input,
        select,
        textarea {
            color: #222;
        }


        ::-moz-selection {
            background: #b3d4fc;
            text-shadow: none;
        }

        ::selection {
            background: #b3d4fc;
            text-shadow: none;
        }

        img {
            vertical-align: middle;
        }

        fieldset {
            border: 0;
            margin: 0;
            padding: 0;
        }

        textarea {
            resize: vertical;
        }

        .chromeframe {
            margin: 0.2em 0;
            background: #ccc;
            color: #000;
            padding: 0.2em 0;
        }

        a{
            text-decoration: none;
            color: #7b7b7b;
        }
      `}
            />
            {children}
        </div>
    )
}
