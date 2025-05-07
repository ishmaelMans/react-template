import styled from "styled-components";

const Reviews = styled.section`
  background-color: ${({ theme }) => theme.color.darkBlue};
  margin-bottom: 50px;

  .row {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .heading {
    font-family: "Poppins", sans-serif;
    width: 60%;
    padding: 100px 0 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 100%;
    }
    h3 {
      color: ${({ theme }) => theme.color.lightBlue};
      font-weight: 500;
    }
    h1 {
      color: #fff;
      font-size: 3.5rem;
      line-height: 1.4;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 2.5rem;
      }
    }
  }

  .carousel-container {
    display: flex;
    align-items: center;
    height: 450px;
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: 1650px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      max-width: 100%;
    }

    .carousel-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: #333;
      color: white;
      border: none;
      padding: 10px 15px;
      cursor: pointer;
      border-radius: 50%;
    }

    .carousel-button:hover {
      background: #555;
    }

    .left-button {
      left: 10px;
    }

    .right-button {
      right: 10px;
    }

    .carousel {
      gap: 30px;
      display: flex;
      align-items: flex-start;
      transition: transform 0.5s ease-in-out;

      .review {
        font-family: "Poppins", sans-serif;
        display: flex;
        min-width: 410px;
        padding: 20px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 300px;
        background-color: #fff;
        text-align: center;

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          max-width: 100%;
        }

        .content {
          text-align: center;
          margin-top: 20px;
        }

        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          overflow: hidden;
          background-size: cover;
          margin-bottom: 10px;
        }
      }
    }
  }
`;
export { Reviews };
