import { css } from "@emotion/css";


export const button = css`
  padding: 0 10px;
  display: flex;
  height: 70px;
  width: 210px;
  align-items: center;
  background: #fefefe;
  box-shadow: 3.32468px 3.32468px 4.98701px rgba(0, 0, 0, 0.25);
  border-radius: 26.5974px;
  font-style: normal;
  font-weight: 500;
  font-size: 19.9481px;
  line-height: 23px;
  color: #819594;

  span {
    margin: 0 25px;
  }
`;

export const divMain = css`
  background: #f0ede2;
  min-height: 309px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  margin-top: 64px;

  @media screen and (max-width: 540px) {
    .paginationResponsive {
      flex-direction: column;
    }
  }
`;
export const pageWrap = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  max-width: 200px;
  justify-content: center;
`;

export const pageNumber = css`
  cursor: pointer;
  background: #1e2b3b;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 912px) {
  }

  @media screen and (max-width: 820px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 540px) {
  }

  @media screen and (max-width: 414px) {
  }

  @media screen and (max-width: 375px) {
  }

  @media screen and (max-width: 280px) {
  }
`;