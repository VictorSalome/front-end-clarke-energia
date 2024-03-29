import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
   

`

export const Logo = styled.img`

    height: 25px;
    width: 60px; 
    margin-right: 100px;
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
            gap: 2rem;
            list-style: none;
            
            li{
                cursor: pointer;

                &:hover {
                    color: #007DC4;
                    transition: 0.3s;
                }
            } 
            
        }
    

    }

    
`

export const Button = styled.button`
    /* margin-left: 180px; */
    background-color: #007DC4;
    border-radius: 30px;
    width: 175px;
    height: 35px;
    font-size: 15px;
    font-weight: bold;
    border: 1px solid #000;
    outline: none;
    min-width: 150px;
    margin-left: 5rem;

    cursor: pointer;

    &:hover {
        color: white;
        transition: 0.3s;
    }

    `
