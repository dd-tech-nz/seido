import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { FirebaseContext } from './Firebase'
import styled from 'styled-components'
import LogoSrc from '../images/logo_sm.png'


const LogoutLink = styled.span`
  cursor: pointer;
  color: brown;

  &:hover{
    text-decoration: underline
  }
`

const HeaderWrapper = styled.header`
    background: #95afba;
    margin-bottom: 1.45rem;
`

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  position: relative;

  >h1 {
    margin-left: 12.5rem;
    flex-grow: 1;

    >a{
      color: black;
      text-decoration: none;
    }
  }

  >div {
    margin: auto 0;
  }

`

const UserInfo = styled.div`
  text-align: right;
`

const Logo = styled.div`
  align-self: flex-start;
  margin-left: -100px;
  position: absolute;
  left: -150px;
  top: 3px;
  background-image: url(${LogoSrc});
  width: 94px;
  height: 90px;
`

const Header = ({ siteTitle }) => {
  const { firebase, user } = useContext(FirebaseContext)
  console.log(firebase, user)

  function handleLogoutClick() {
    firebase.logout().then(() => navigate('/'))
  }

  return (
  <HeaderWrapper>
  
      <HeaderContent>
        
        <Logo />
      
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
        </h1>
        
        <div>
          {!!user && !!user.email &&
            <UserInfo>
              Hello, {user.email}
              <div>
              <LogoutLink onClick={handleLogoutClick}>
                Logout
              </LogoutLink>
          </div>
            </UserInfo>
          }
          
          
        </div>

      
    </HeaderContent>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
