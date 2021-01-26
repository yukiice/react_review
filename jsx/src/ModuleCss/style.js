import styled from 'styled-components'

export const Home = styled.div`
font-size:16px;
color: #ccc;
.banner{
    background-color:#fff;
    span{
        &.active{
            color:red;
            
        }
        &:hover{
            color:green;
        }
    }
}
`


export const Img = styled.img`
src: url(${props => props.src});
`
