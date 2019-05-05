import styled from 'styled-components';
import { FavoriteBorder } from 'styled-icons/material/FavoriteBorder';

const RedFavoriteEmpty = styled(FavoriteBorder)`
  color: rgba(0, 0, 0, 0.3);
  width: 30px;
  height: 30px;
  color: red;
  cursor: pointer;
`;
export default RedFavoriteEmpty;
