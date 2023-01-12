import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;@400;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.body};
    font-size: 16px;1.15em ;
}

p {
opacity: 0.6;
line-height: 1.5;
}

img {
    max-width: 100%;
}
`;

export default GlobalStyles;
