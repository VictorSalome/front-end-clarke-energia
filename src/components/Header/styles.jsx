import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
   

`

export const Logo = styled.img`

    height: 50px;
    width: auto; 
    margin-right: 20px;
    cursor: pointer;
    `


export const MainHeader = styled.header`
    display: flex;
    gap: 20px;
    font-size: 14px;
    font-weight: bold;

    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;

    nav{
        display: flex;
        justify-content:space-between;
        align-items: center;
        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3rem;
            list-style: none;
            li{
             
            
            }
        }
       

    }

    h3{
        &:hover {
        color: #00E082;
    }
    }
    
`

export const Button = styled.button`
    /* margin-left: 180px; */
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
