import React from 'react';

import {
    HomeStyle, MainSection,
    MainTitle, MainText,
    MainContent,
    WatchButton, CategoryTitle,
    CategorySession, IframeWrapper,
    IFrame, MainBanner,
    VideoPreview, ScrollContainer
} from './style';

import data from "../../static/data.json";

const Home = () => {

    return <HomeStyle>
        <MainSection>
            <MainContent>
                <MainTitle>
                    Introdução ao Python
                </MainTitle>
                <MainText>
                    Este vídeo é um compilado de uma aula de Python apresentada no meu canal da Twitch, falando sobre tipos de dados, operadores numéricos e lógicos, comandos e laços de repetição.
                </MainText>
                <WatchButton as="a" href="https://youtu.be/zVdnopPLnKE" target="_blank" rel="noopener noreferrer">
                    Assistir
                </WatchButton>
            </MainContent>
            <MainBanner>
                <IframeWrapper>
                    <IFrame src="https://www.youtube.com/embed/zVdnopPLnKE?mute=0" />
                </IframeWrapper>
            </MainBanner>
        </MainSection>
        {data.categories.map((category) => (
            <CategorySession>
                <CategoryTitle color={category.color}>{category.name}</CategoryTitle>
                <ScrollContainer>
                    {category.videos.map(video =>
                        <VideoPreview
                            color={category.color}
                            href={`https://youtu.be/${video.id}`}
                            image={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        />)}
                </ScrollContainer>
            </CategorySession>
        ))}
    </HomeStyle >
}

export default Home;
