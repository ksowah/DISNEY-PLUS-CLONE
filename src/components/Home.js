import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewers from './Viewers'

function Home() {

    return (
        <Container>
            <ImageSlider/>
            <Viewers/>
            <Movies/>
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before{
        content: '';
        background-image: url('/media/images/home-background.png');
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        z-index: -1;
    }
    
`
