import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const Text = styled.p`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.14;
  letter-spacing: 0.02857em;
  margin: 0;
`;

export const DeleteBtn = styled(Button)`
  border: 1px solid;
  border-color: #1f398786;
  &:hover,
  :active,
  :focus {
    border-color: rgba(3, 44, 84, 0.5);
    box-shadow: 0 0 0 1px rgba(3, 44, 84, 0.5);
  }
`;