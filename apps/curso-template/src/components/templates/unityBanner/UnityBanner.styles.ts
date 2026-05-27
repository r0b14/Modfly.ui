import { css } from "@emotion/css";

export const container = css`
  width: 100%;
  /* position: fixed; */
  top: 0;
  left: 0;
`;


export const titles = css`
  padding: 50px;
`;

export const title1 = css`
  background: #221d70;
  border-radius: 16px 0px;
  color: white;

  padding: 10px 30px 10px 24px;
  gap: 8px;
  margin: 0px 0px 20px 0px;

  max-width: 830px;
  width: fit-content;
  font-size: 1.5rem;

  @media screen and (max-width: 992px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 640px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

export const title2Main = css`
  background: #ffffff;
  border-radius: 0px 50px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 44px 24px 24px;

  width: fit-content;

  p {
    padding: 0px 0px 0px 10px;
    font-size: 3.2rem;
    font-weight: 1000;

    @media screen and (max-width: 992px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 2.8rem;
    }

    @media screen and (max-width: 640px) {
      font-size: 2.4rem;
    }

    @media screen and (max-width: 576px) {
      font-size: 2rem;
    }
  }

  span {
    padding: 0px 0px 0px 10px;
    font-size: 2.8rem;
    font-weight: 800;

    @media screen and (max-width: 992px) {
      font-size: 2.6rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 2.4rem;
    }

    @media screen and (max-width: 640px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 576px) {
      font-size: 1.6rem;
    }
  }
`;

export const title2Sec = css`
  background: #ffffff;
  border-radius: 0px 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 24px 44px 24px 24px;

  p {
    padding: 0px 0px 0px 10px;
    font-size: 3.4rem;
    font-weight: 1000;
    white-space: nowrap;
  }

  span {
    padding: 0px 0px 0px 10px;
    font-size: 2.8rem;
    font-weight: 800;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;

    p {
      font-size: 3.2rem;
    }

    span {
      font-size: 2.6rem;
    }
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 3rem;
    }
    span {
      font-size: 2.4rem;
    }
  }

  @media screen and (max-width: 640px) {
    p {
      font-size: 2.6rem;
    }
    span {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 576px) {
    p {
      font-size: 2.2rem;
    }
    span {
      font-size: 1.6rem;
    }
  }
`;
