import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    display:flex;
    flex-direction:column;
    overflow:hidden;
    text-align:center;
    height:100vh;
`
const Content = styled.div`
    margin-bottom:10vw;
    width:100%;
    min-height:100vh;
    /* Position Relative Will Make no Impact as there is no parent with position absolute */
    position:relative;
    box-sizing:border-box;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:80px 40px;
    /* Height 100% makes no sense as its min-height is already same as parent height so what if i just say that height is 100vh? */
    height:100%;
`
const BgImg = styled.div`
    background-image:url("images/login-background.jpg");
    height:100%;
    background-position:top;
    background-size:cover;
    background-repeat:no-repeat;
    /* Position Absolute makes no sense */
    position:Absolute;
    top:0;
    left:0;
    right:0;
    z-index:-1;
`

const Login = () => {
  return (
    <Container>
        <Content><BgImg/></Content>
    </Container>
  )
}

export default Login
