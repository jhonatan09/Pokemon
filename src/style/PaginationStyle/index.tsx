import styled from "styled-components";
import {black, colorBtnPagination} from '../colors'

export const PaginationContent = styled.div`
width: 80%;
display: flex;
justify-content: center;
flex-wrap: wrap;
margin: 0 auto;
`
export const PaginationContentBtn = styled.button`
  background: transparent;
  border: 1px solid ${black};
  width: 30px;
  border-radius: 4px;
  margin: 8px 16px;
  font-size: 1rem;
  font-weight: 600;
  padding: 2px;
  cursor: pointer;
  color: ${colorBtnPagination};
  &:hover {
    background: ${colorBtnPagination};
    color: white;
  }
`