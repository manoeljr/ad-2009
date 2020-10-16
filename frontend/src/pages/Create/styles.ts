import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const TableContainer = styled.section`
    padding: 10px 10px;
    border: 0;
    background: #fff;
    font-size: 16px;
    font-weight: normal;
    color: #969cb3;
    border-radius: 10px;

    input {
        width: 100%;
        margin-top: 5px;
        margin-bottom: 5px;
        border-radius: 5px;
        padding: 5px;
        outline: 0;
        border: 1px solid #aaa;
    }

    button {
        background: #5636d3;
        margin: 10px 0;
        padding: 5px 20px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button:hover {
        background: #5636f9;
    }

`;