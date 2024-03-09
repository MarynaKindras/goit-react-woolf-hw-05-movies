import styled from 'styled-components';
import { Link } from 'react-router-dom';
import noImage from '../../images/noImage.png';

export const List = styled.ul`
  list-style-type: none;
`;

export const Item = styled.li`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;

  &:hover {
    color: #c79b5d;
  }
`;

export const MovieLink = styled(Link)`
  &:hover::after,
  &:focus::after {
    content: '';
    background-image: ${props =>
      props.cover
        ? `url('https://image.tmdb.org/t/p/w500/${props.cover}')`
        : `url(${noImage})`};

    background-size: cover;
    width: 400px;
    height: 560px;
    display: block;
    border-radius: 4px;
    border: 1px solid rgba(199, 155, 93);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 20%;
    left: 50%;
    z-index: 1;
    color: #c79b5d;
  }
`;
