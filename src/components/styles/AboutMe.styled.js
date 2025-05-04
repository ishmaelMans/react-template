import styled from "styled-components";

const AboutMe = styled.section`
  height: 600px;
  display: flex;
  margin-bottom: 60px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 900px;
  }

  .row {
    display: flex;
    height: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column;
      text-align: center;
    }

    .col-1 {
      height: 100%;
      width: 50%;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
      }

      img {
        max-width: 100%;
        width: 100%;
        height: 100%;
      }
    }
    .col-2 {
      font-family: "Poppins", sans-serif;
      padding: 0 50px;
      height: 100%;
      width: 50%;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        margin-top: 50px;
      }

      h3 {
        color: green;
        margin-bottom: 20px;
      }

      h1 {
        line-height: 1.3;
        font-size: 2.5rem;
        margin-bottom: 20px;
        font-weight: bold;

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          font-size: 1.8rem;
        }
      }

      p {
        line-height: 2;
        margin-bottom: 40px;
      }

      .btn {
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        padding: 20px 45px;
        border: none;
        border-radius: 35px;
        color: rgb(0, 0, 0);
        font-weight: bold;
        background-color: rgb(252, 210, 0);
      }
    }
  }
`;
export { AboutMe };
