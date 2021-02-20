import React from "react"
import { Link, navigate } from "gatsby"
import styled from 'styled-components'
import {Button} from '../components/common/Button'

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const HeroWrapper = styled.header`
  height: 95vh;
  background-image: linear-gradient(
    to right bottom,
    rgba(210, 225, 163, 0.8),
    rgba(149, 175, 186, 0.8)), 
    url("https://i.imgur.com/kaPDNrn.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 70vh, 0 100%);

    >div {
      position: absolute;
      top: 20px;
      left: 20px;

      >img {
        height: 200px;
      }
    }

    >.text-box {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;

      >.heading-primary {
        color: #3f7cac;
        text-transform: uppercase;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-align: center;

        backface-visibility: hidden;
        margin-bottom: 60px;

        >.heading-primary-main {
          display: block;
          font-size: 60px;
          font-weight: 400;
          letter-spacing: 35px;

          animation-name: moveInLeft;
          animation-duration: 1s;
          animation-timing-function: ease-out;

        }

        >.heading-primary-sub {
          display: block;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 17.4px;
          margin-top: 16px;
          animation: moveInRight 1s ease-out;
        }
      }
    }

    @keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(-200px);
    }

    80% {
        transform: translateX(20px);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}

    @keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(200px);
    }

    80% {
        transform: translateX(-20px);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}
`


const IndexPage = () => {

  function handleLoginClick() {
    navigate('/login')
  }

  function handleRegisterClick() {
    navigate('/register')
  }

  return (
  <HeroWrapper>
    <SEO title="Seido Dojo Management" />
    <div>
      <img src="https://i.imgur.com/UiJvevR.png" alt="logo" />
    </div>
      
      <div className='text-box'>
        <h1 className="heading-primary">
            <span className="heading-primary-main">Seido Karate</span>
            <span className="heading-primary-sub">Dojo Member Portal</span>
        </h1>
        <Button type="submit" onClick={handleLoginClick}>
            Login
        </Button>
        <Button type="submit" register onClick={handleRegisterClick}>
          
            Register
         
        </Button>
      </div>
  </HeroWrapper>
  )
}

export default IndexPage
