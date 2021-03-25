import propTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    html {
        --red: #ff0000;
        --black: #393939;
        --grey: #3a3a3a;
        --gray: var(--grey); // in case you forget how you spelled grey
        --lightGrey: #e1e1e1;
        --lightGray: var(--lightGrey);
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09); // boxshadow
        box-sizing: border-box;
        font-size: 62.5%;
    }

    // when adding border/padding it takes away from the size
    // of the element rather than adding to it -- prevents
    // horizontal scroll bugs
    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-family: 'radnika_next';
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }

    a {
        text-decoration: none;
        color: var(--black);
    }
    a:hover {
        text-decoration: underline;
    }

    button {
        font-family: 'radnika_next'; // for some reason applying font to body doesnt apply to buttons
    }
`;

// Above is global styles
// We also want to control the width of the inner content
const InnerStyles = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 2rem;
`;

const Page = ({children}) => {
    return (
        <>
        <GlobalStyles />
        <Header />
        <InnerStyles>
            {children}
        </InnerStyles>
        </>
    )
}

Page.propTypes = {
    obj: propTypes.string,
    children: propTypes.any // propTypes.any is appropriate for children since it could be anything
};

export default Page;