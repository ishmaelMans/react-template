import styled from "styled-components";
const WhyChooseUs = styled.section`
  display: flex;
  margin-bottom: 100px;
  height: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    height: 900px;
  }

  .row {
    display: flex;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column;
      text-align: center;
    }

    .col-1 {
      width: 50%;
      padding: 20px 50px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
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
      }

      p {
        line-height: 1.7;
        margin-bottom: 20px;
      }
      .btn {
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
    .col-2 {
      width: 50%;
      background-color: rgb(255, 255, 255);

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
      }

      img {
        max-width: 100%;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export { WhyChooseUs };
