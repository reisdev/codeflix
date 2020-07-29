import styled from "styled-components";
import ButtonLink from "../../components/ButtonLink";

export const HomeStyle = styled.main`
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;    
`;

export const MainSection = styled.section`
    display: flex;
    height: 80vh;
    background-image: url(https://img.youtube.com/vi/zVdnopPLnKE/maxresdefault.jpg);
    background-position: center center;
    background-size: cover;
    position: relative;

    &::before {
        background-color: rgb(0,0,0,.5);
        height: 100%;
        z-index: 0;
        position: relative;
    }

    &::after,&::before {
        content: "";
        display: block;
        position: absolute;
        left: 0px;
        right: 0px;
        margin: auto;
    }
`

export const MainTitle = styled.h2`
    font-size: 4rem;
    margin-bottom: 30px;
`

export const MainContent = styled.section`
    flex: 1;
    display: flex;
    padding-right: 10px;    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 5%;

    z-index: 2;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`

export const MainText = styled.p`
    font-size: 2rem;
    padding: 20px;
`

export const MainBanner = styled.section`
    flex: 1;
    position: relative;
    margin: 20px;
    margin-right: 5%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const IframeWrapper = styled.section`
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9, for an aspect ratio of 1:1 change to this value to 100% */ 
    overflow: hidden;
`

export const IFrame = styled.iframe.attrs({
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
})`
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
`

export const WatchButton = styled(ButtonLink)`
    margin-top: 20px;
    @media screen and (min-width: 768px){
        display: none;
    }
`

export const CategorySession = styled.section`
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const CategoryTitle = styled.h2`
    padding: 20px;
    margin-left:20px;
    font-size: 2rem;
    font-weight: 600;
    width: fit-content;
    background-color: ${props => props.color};
    color: var(--white);
    border-radius: 10px;
    /* box-shadow: 2px 3px 15px black; */
`

export const ScrollContainer = styled.div`
    overflow-x: auto;
    display: flex;
    width: auto;
    padding: 10px;
`


interface VideoPreviewProps {
    color: string;
    image: string;
}

export const VideoPreview = styled.a.attrs({
    target: "_blank",
    rel: "noopener noreferrer"
}) <VideoPreviewProps>`
    border: 5px solid ${props => props.color};
    background-image: url(${props => props.image});
    background-position: center center;
    background-size: cover;
    min-height: 270px;
    min-width: 475px;
    margin: 10px;
    border-radius: 8px;
`