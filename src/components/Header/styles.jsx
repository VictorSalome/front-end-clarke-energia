import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 80px;
    width: 100%;
    padding: 0 200px;

`

export const Logo = styled.img`

    height: 50px;
    width: auto; 
    margin-right: 20px;
    cursor: pointer;
    `


export const MainHeader = styled.div`
    display: flex;
    gap: 20px;
    font-size: 14px;
    font-weight: bold;
    padding-right: 230px;
    cursor: pointer;

    h3{
        &:hover {
        color: #00E082;
    }
    }
    
`

export const Button = styled.button`
    margin-left: 180px;
    background-color: #26E48F;
    border-radius: 30px;
    width: 175px;
    height: 35px;
    font-size: 15px;
    font-weight: bold;
    border: 1px solid #000;
    outline: none;
    min-width: 150px;

    cursor: pointer;

    &:hover {
        color: white;
        transition: 0.3s;
    }

    `
