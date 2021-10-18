import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import { Link, useHistory } from 'react-router-dom';
import { selectUserName, 
         selectUserPhoto, 
         setUserLogin, 
         setSignOut, 
         selectUserEmail} 
from '../features/user/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import app from '../firebase'
import  { getAuth,
          signInWithPopup,
          GoogleAuthProvider, 
          signOut, 
          onAuthStateChanged,
          getRedirectResult,
          signInWithRedirect  } 
from "firebase/auth";


function Header() {
    const dispatch = useDispatch()
    const history = useHistory()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)
    const userEmail = useSelector(selectUserEmail)

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    const signIn = () =>{
        

        if(window.innerWidth <= 900){
            signInWithRedirect(auth, provider);
            getRedirectResult(auth)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))

            
                history.push('/home')
    
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
        }else{
            
            signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))

                history.push('/home')

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
               alert(errorCode)
  });
        }

    }

    const logOut = () =>{
        signOut(auth)
        .then(() => {
            dispatch(setSignOut())
            history.push('/')

        }).catch((error) => {
        alert(error)
});

    }

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))

                history.push('/home')
            } 
          });
    }, [])
      

    const [mobileView, setMobileView] = useState('false')
    const [click, setClick] = useState('false')

    const showMobileMenu = () =>{
            if(window.innerWidth <= 900){
                setMobileView(setMobileView('true'))
            }else{
                setMobileView('false')
            }
    }

    const checkClick = ()=> setClick(!click)

    useEffect(() =>{
        showMobileMenu()

    }, [])

    window.addEventListener('resize', showMobileMenu)

    return (
        
            <Nav>
                <Disney src='/media/images/logo.svg' alt='disney-logo'/>                

                    {
                        !userName  ?
                        <LoginContainer>
                            <Login onClick={signIn}>Login</Login>
                        </LoginContainer>      :
                    <>
                        <NavMenu>
                        <a>
                            <Link to='/home'>
                    <i class="fas fa-home"></i><span>HOME</span>
                            </Link>
                        </a>
                        <a>
                    <i class="fas fa-search"></i><span>SEARCH</span>
                        </a>
                        <a>
                    <i class="fas fa-plus"></i><span>WATCHLIST</span>
                        </a>
                        <a>
                    <i class="fas fa-star"></i><span>ORIGINALS</span>
                        </a>
                        <a>
                    <i class="fas fa-film"></i><span>MOVIES</span>
                        </a>
                        <a>
                    <i class="fas fa-tv"></i><span>SERIES</span>
                        </a>
                    </NavMenu>
                
                    <Profile>
                        {!mobileView ? <i onClick={checkClick} class="fas fa-bars"></i> :  <User onClick={logOut}><img src={userPhoto}/></User> }
                    
                    </Profile>
                </>

                    }
               
                {!click &&
                   
                    <Wrap onClick={checkClick}>
                        <MenuItems>
                        <Fade right>
                            <MobileUser>
                                <img src={userPhoto}  onClick={logOut}/>
                                <NameWrapper>
                                    <p>{userName}</p>
                                    <p>{userEmail}</p>
                                </NameWrapper>
                            </MobileUser>

                            <Link to='/home'>
                                <li><a onClick={checkClick}>HOME</a></li>
                            </Link>
                            <li><a onClick={checkClick} >SEARCH</a></li>
                            <li><a onClick={checkClick} >WATCHLIST</a></li>
                            <li><a onClick={checkClick} >ORIGINALS</a></li>
                            <li><a onClick={checkClick} >MOVIES</a></li>
                            <li><a onClick={checkClick} >SERIES</a></li>
                            </Fade>
                        </MenuItems>
                    </Wrap>
                    
                    }

            </Nav>
        
    )
}

export default Header


const Nav = styled.div`
    height: 70px;
    width: 100vw;
    background-color: #090b13;
    align-items: center;
    text-align: center;
    display: flex;
    padding: 0 36px;
    overflow: hidden;

     @media (max-width: 900px){
       flex-direction: row;
       justify-content: space-between;
   }
    
`

const Disney = styled.img`
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: left;
    margin: 0 24px;

`

const NavMenu = styled.div`
   align-items: center;
   margin-left: 25px;
   display: flex;
   flex: 1;

   a{
       padding: 0 12px;
       cursor: pointer;
       text-decoration: none;

       i{
           height: 20px;
           padding: 0 5px;
       }

       span{
           font-size: 13px;
           letter-spacing: 1.42px;
           position: relative;

           &:after{
               content: '';
               height: 2px;
               background-color: #fff;
               position: absolute;
               left: 0;
               right: 0;
               bottom: -6px;
               opacity: 0;
               transform-origin: bottom center;
               transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
               transform: scaleX(0);
           }
       }

       &:hover{
           span:after{
            opacity: 1;
            transform: scaleX(1);
           }
       }
   }

   @media (max-width: 900px){
       display: none;
   }

`

const User = styled.div`
        
         img{
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            display: flex;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            margin-right: 40px; 
            cursor: pointer;
   
         }


`

const Profile = styled.div`
    cursor: pointer;
    border: none;

`

const Wrap = styled.div`
        position: fixed;
        top: 0;
        buttom: 0;
        right: 0; 
        z-index: 50;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.6);

`

const Login = styled.div`
        border: 1px solid #f9f9f9;
        padding: 8px 16px;
        border-radius: 4px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        background-color: rgba(0, 0, 0, 0.6);
        transition: all 0.2s ease 0s;
        cursor: pointer;

        &:hover{
            background-color: #f9f9f9;
            color: #000;
            border-color: transparent;
        }

`

const LoginContainer = styled.div`
        flex: 1;
        display: flex;
        justify-content: flex-end;

`

const MenuItems = styled.div`
position: fixed;
top: 0;
buttom: 0;
right: 0; 
background-color: #fff;
width: 300px;
height: 100vh;
list-style: none;
display: flex;
flex-direction: column;
text-align: start;
z-index: 100;
text-decoration: none;


li{
    cursor: pointer;
    padding: 15px 0;
}
    
    a{
        padding: 0 15px;
        margin-left: 10px;
        color: #000;
        font-weight: 600;
        text-decoration: none;

        &:hover{
            color: gray;
        }
    }

    a:hover{
        color: grey;
    }

    @media (max-width: 700px){
        width: 87vw;
    }


`


const MobileUser = styled.div`

background: linear-gradient(110deg, #0b0bb8 60%, #0a0ac4 60%);
width: 100%;
padding: 20px;
    img{
            display: flex;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            margin: 0 10px; 
            cursor: pointer;
    }

    
`

const NameWrapper = styled.div`
padding-top: 20px;

p{
    color: #fff;
    padding: 4px 15px;
    font-weight: normal;
    letter-spacing: 1.5px;
    font-style: italic;
}

`
