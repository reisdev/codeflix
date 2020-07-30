import styled from 'styled-components';

export const Category = styled.section`
    display: flex;
    flex-direction: column;
    padding: 20px;
`

interface VideoCardProps {
    color: string;
    image: string;
}

export const VideoCard = styled.a.attrs({
    target: "_blank",
    rel: "noopener noreferrer"
}) <VideoCardProps>`
    border: 5px solid ${props => props.color};
    background-image: ${({ image }) => `url(${image})`};
    background-position: center center;
    background-size: cover;
    min-height: 230px;
    min-width: 400px;
    margin: 15px;
    border-radius: 8px;
    transition: all 100ms ease-in;
    flex: 0 0 400px;
    position: relative;
    display:flex;
    cursor: pointer;
    align-items: flex-end;

    &:hover {
        opacity: .7;
        transform: scale(1.05);
    }
`

interface TitleProps {
    fontColor?: string;
    color: string;
}

export const Title = styled.h2<TitleProps>`
    padding: 20px;
    margin-left:15px;
    font-size: 2rem;
    font-weight: 600;
    width: fit-content;
    background-color: ${props => props.color};
    color: ${props => props.fontColor || "var(--white)"};
    border-radius: 10px;
    margin-bottom: 10px;
    /* box-shadow: 2px 3px 15px black; */
`
