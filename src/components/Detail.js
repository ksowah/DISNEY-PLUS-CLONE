import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background src='/media/images/bg1.jpg'/>
            <ImageTitle src='/media/images/bao.jpg'/>

            <Controls>
                <PlayButton>
                <img src='/media/images/play-icon-black.png'/>
                <span>PLAY</span>
                </PlayButton>

                <Wrap>
                <TrailerButton>
                <img src='/media/images/play-icon-white.png'/>
                <span>TRAILER</span>
                </TrailerButton>

                <AddButton>
                    <span>+</span>
                </AddButton> 

                <GroupWatchButton>
                    <img src='/media/images/group-icon.png'/>
                </GroupWatchButton>  
                </Wrap>             
            </Controls>

            <SubTitle>
                2018 . 7s .family . Fantasy, Kids, Animation
            </SubTitle>
            <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Sint, saepe! Laudantium iure harum ad explicabo debitis 
            numquam iste eaque ex repellendus dolorum soluta, 
            reiciendis hic ut perferendis laboriosam, et enim.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    display: flex;
    flex-direction: column;

`

const Background = styled.img`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    object-fit: cover;


`

const ImageTitle = styled.img`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    

`

const Controls = styled.div`
display: flex;
align-items: center;
margin-top: 20px;

@media (max-width: 580px){
    align-items: start;
    flex-direction: column;
}

`
const PlayButton = styled.button`
    padding: 0 24px;
    border-radius: 4px;
    margin-right: 22px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: none;
    cursor: pointer;
    letter-spacing: 1.8px;

    span{
        color: black;
    }

    &:hover{
        background: rgb(198, 198, 198)
    }

    @media (max-width: 580px){
        margin-bottom: 1rem;
    }

`

const Wrap = styled.div`
    display: flex;
    align-items: center;
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    text-transform: uppercase;

    span{
        color: rgb(249, 249, 249);
    }


`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 20px;

    span{
        font-size: 30px;
        color: #fff;
    }

`

const GroupWatchButton = styled(AddButton)`
background-color: rgb(0, 0, 0);

`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    margin-top: 26px;
    min-height: 20px;

`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 36px;
    color: rgb(249, 249, 249);
    max-width: 760px;

`
