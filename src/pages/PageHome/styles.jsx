import styled from "styled-components";


export const Container = styled.div`
    background-image: url(${(props) => props.img});
    height: calc( 100vh - 80px );
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
   
 &::before{
     content: "";
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(0, 0, 0, 0.5);
 }
   
`;

export const ContainerMain = styled.div`
  color: white;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left:800px;


`
export const ContainerCard = styled.div`
    background: white;
    border-radius: 10px;
    color: black;
    height: 250px;
    width: 300px;
    margin-top: 50px;

    h2{
        font-weight: 500;
        font-size: 20px;
        padding: 20px 0;
        
    }


`

export const Input = styled.input`
    font-weight: 500;
    width: 80%;
    height: 40px;
    border-radius: 10px;
    margin-bottom: 50px;
    border: 1px solid #000;
    outline: none;
    padding: 0 5px;
    
     &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

`

export const Button = styled.button`
    background-color: #26E48F;
    border-radius: 30px;
    width: 80%;
    height: 35px;
    font-size: 15px;
    font-weight: bold;
    border: 1px solid #000;
    outline: none;
    min-width: 150px;
    cursor: pointer;

   

    &:hover {
        background-color: #60be94;
        transition: 0.3s;
    }

    `



export const ContainerText = styled.div`
    z-index: 3;
    color: white;
   
    padding: 20px;
    width: 600px;
    margin-right: -550px;
    margin-bottom: -100px;

    h1{
        font-weight: 700;
        font-size: 35px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    p{
        font-weight: 600;
    }








`