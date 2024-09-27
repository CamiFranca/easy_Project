import styled from "styled-components"

export const AddButton = styled.button`

    background-color: cyan;
    color: #000;
    height:35px;
    padding:9px;
    border-radius: 6px;
    border:none;
    margin-left: 12px;
    cursor: pointer;

    &:hover{
        opacity:0.8
    }
`
export const SectionContainer = styled.section`
    padding:18px;
    border-radius: 12px;
    background-color: blue;

    h1{
        color:#fff;
        margin:16px;
        text-align:center;
    }

    .inputProduct{
        padding:9px;
        height: 35px;
        border-radius: 6px;
        margin-bottom: 20px;
        border:none;
        outline:none;
        
    }

    .delet{
        background-color: red;
        border-radius: 6px;
        text-align:center;
        height:35px;
        padding:6px;
        &:hover{
        opacity:0.8
    }
    }

    .btnPrice{
        background-color: greenyellow;
        border-radius: 6px;
        text-align:center;
        height:35px;
        padding:6px;
        margin: 0 6px 0 6px;
        &:hover{
        opacity:0.8;
        
        }
    }
    .inputPrice{
        padding:9px;
        height: 35px;
        border-radius: 6px;
        border:none;
        outline:none;
        text-align:center;
        width:88px;
        background-color:lightgrey;
    }
    div{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom: 16px;
        background-color:white;
        padding: 16px;
        border-radius:6px;
    }

    #preço{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom: 16px;
        background-color:white;
        padding: 16px;
        border-radius:6px;
    }

    ul{
        padding:12px;
        list-style:none;
    }

    li{
        padding:6px;
        text-transform:capitalize;
    }

    p{
        color:black;
        font-weight:bold;
        margin: 5px;
        padding:15px;
       
    }


`