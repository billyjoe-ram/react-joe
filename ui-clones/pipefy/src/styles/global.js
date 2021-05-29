import { createGlobalStyle } from 'styled-components';

// Global styles from application
export default createGlobalStyle `
    // Importing Roboto Font
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    // Styles applied to all elements
    * {
        margin: 0;
        padding: 0;
        outline: 0;

        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;

        font: 14px "Roboto", sans-serif;
        background-color: #ecf1f8;
        color: #333;        
        --webkit-font-smoothing: antialised !important;
    }

    ul {
        list-style-type: none;
    }
`;
