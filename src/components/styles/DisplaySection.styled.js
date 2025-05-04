import styled from "styled-components";
const DisplaySection = styled.div`
  display: flex;
  color: #fff;
  // position: absolute;
  // z-index: 999;
  // top: 350px;
  margin-top: 200px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 60px;
  }

  .row {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }

    .showcase {
      width: 65%;
      padding-right: 60px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        padding: 0 60px;
      }

      h1 {
        font-size: 70px;
        line-height: 1.2;
        font-family: "Poppins", sans-serif;
        font-optical-sizing: auto;
        font-optical-sizing: auto;
        font-weight: 800;
        margin-bottom: 40px;

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          font-size: 50px;
        }
      }
      .btn {
        color: rgb(18, 35, 107);
        font-weight: bold;
        font-size: 1.1rem;
        margin-top: 40px;
        border-radius: 30px;
        border: none;
        padding: 20px 40px;
        transition: background 300ms ease-in-out;

        &:hover {
          background-color: green;
          color: #fff;
        }
      }
    }
    .form {
      padding: 30px;
      width: 35%;
      height: 600px;
      background-color: #fff;
      box-shadow: 7px 10px 10px rgba(0, 0, 0, 0.1);
      color: #000;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        padding: 30px 60px;
        margin-top: 100px;
      }

      h3 {
        color: rgb(15, 51, 101);
        font-size: 30px;
        margin-bottom: 30px;
      }

      .main_form {
        width: 100%;

        input,
        select,
        textarea,
        button {
          width: 100%;
          outline: none;
          border: none;
          height: 60px;
          padding: 20px 20px;
          margin-bottom: 25px;
          background-color: rgb(231, 231, 231);
          color: rgb(63, 63, 63);
          border-radius: 3px;
        }

        textarea {
          height: 100px;
        }
        button {
          font-size: 1rem;
          color: #fff;
          font-weight: bold;
          background-color: rgb(57, 170, 84);
        }
      }
    }
  }
`;

export { DisplaySection };
