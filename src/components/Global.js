import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css");
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
 *,
  *::after,
  *::before {
    margin: 0;
    box-sizing: border-box;
  }

body{
font-family: 'Plus Jakarta Sans', sans-serif;
}

.container {
    margin: 0 auto;
    width: 85%;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
      width: 100%;
      // background-color: lightcoral;
      padding: 15px;
    }
  }

img{
max-width: 100%;
}
`;

export default GlobalStyles;
