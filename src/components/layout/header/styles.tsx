import styled from 'styled-components';

const BarApp = styled.header`
    display: flex;
    padding: 0 30px;
    align-items: center;
    justify-content: space-between;
`;

const ItemList = styled.li`
    list-style: none;
    float: left;
    margin-right: 30px;
`;

export { BarApp, ItemList };