import { css } from "@emotion/css";

export const styleAccordionBox = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const styleAccordionContent = css`
  width: 100vw;
  border-radius: 8px;
  padding: 28px 38px 28px 38px;
  font-weight: 600;
  line-height: 1.17;
  font-size: 2.25rem;

  .border {
    border-image-slice: 53 47 58 40;
    border-image-width: 20px 20px 20px 20px;
    border-image-outset: 0px 0px 0px 0px;
    border-image-repeat: stretch stretch;
    border-image-source: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDU3IiBoZWlnaHQ9IjYyOCIgdmlld0JveD0iMCAwIDQ1NyA2MjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MTAuMTA5IDEuMjVIMjI1LjY5Mkg0MS4yNzU5IiBzdHJva2U9IiM0QTkwRTIiIHN0cm9rZS13aWR0aD0iMi41Ii8+CjxwYXRoIGQ9Ik00Mi4yNzU5IDYyNi4yNUg0MS41NDI0TDEuMjc1ODggNTk0LjcxN0wyNC45NjgyIDI2Ljk3NTZDMjQuOTY4MiAyNi45NzU2IDMyLjE5ODcgMTEuNDI4OSAzNy4xOTA5IDEuMjVINDIuMjc1OSIgc3Ryb2tlPSIjNEE5MEUyIiBzdHJva2Utd2lkdGg9IjIuNSIvPgo8cGF0aCBkPSJNNDExLjEwOSA2MjYuMjVIMjI2LjY5Mkg0Mi4yNzU5IiBzdHJva2U9IiM0QTkwRTIiIHN0cm9rZS13aWR0aD0iMi41Ii8+CjxwYXRoIGQ9Ik00MDkuMjc2IDEuMjVINDEzLjE2Nkw0MjUuMzUyIDM3LjQxMTFMNDQ2LjY3NyA1MS42NzM3TDQ1NS4yNzYgNTM0Ljk3TDQxMy4xNjYgNjI2LjI1TDQwOS4yNzYgNjI2LjI1IiBzdHJva2U9IiM0QTkwRTIiIHN0cm9rZS13aWR0aD0iMi41Ii8+Cjwvc3ZnPgo=");
    border-style: solid;
  }
  .sun {
    transform: rotate(0deg);
    transition: transform 0.3s ease; /* anima ida e volta */
  }

  .sun:hover {
    transform: rotate(90deg); /* gira 90° no hover */
  }
  .arrow {
    width: 60px;
  }

  @media screen and (max-width: 768px) {
    max-width: 614px;
    font-size: 2em;
    padding: 14px 24px 14px 24px;
  }

  @media screen and (max-width: 650px) {
    max-width: 534px;
    font-size: 2em;
  }

  @media screen and (max-width: 560px) {
    max-width: 432px;
    font-size: 1.875em;
    padding: 8px 12px 8px 12px;
  }

  @media screen and (max-width: 454px) {
    max-width: 351px;
    font-size: 1.875em;
  }

  @media screen and (max-width: 375px) {
    max-width: 300px;
    font-size: 1.375em;
  }

  @media screen and (max-width: 280px) {
    max-width: 224px;
    font-size: 1.375em;
  }
`;
