import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const Form = styled.form`
    display: flex;
    gap: 15px;
    justify-content: start;
    align-items: baseline;
    margin-top: 40px;
    margin-bottom: 40px;

`

export const SubmitBtn = styled(Button)`
  border: 1px solid;
  border-color: #1f398786;
  &:hover,
  :active,
  :focus {
    border-color:rgba(3, 44, 84, 0.5);
    box-shadow: 0 0 0 1px rgba(3, 44, 84, 0.5);
  }
`;