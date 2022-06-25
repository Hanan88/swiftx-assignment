import styled from 'styled-components';

const BarApp = styled.header`
    display: flex;
    padding: 20px 30px;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
    color: #52D67A;   
`;

const ItemList = styled.li`
    list-style: none;
    float: left;
    margin-right: 30px;
`;

const Width = styled.div`
    width: 125px;   
`;

export { BarApp, ItemList, Width, Logo };
