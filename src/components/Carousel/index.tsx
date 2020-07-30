import React from 'react';
import { Category, Title, VideoCard } from './style';
import Slider, { SliderItem } from "./components/Slider";

interface CarouselProps {
    category: {
        name: string,
        color: string,
        fontColor?: string | undefined,
        videos: string[]
    }
}

function getYouTubeId(youtubeURL: string) {
    return youtubeURL
        .replace(
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
            '$7',
        );
}

const Carousel: React.FC<CarouselProps> = ({
    category
}) => {
    const { name, color, fontColor, videos } = category;
    return (
        <Category>
            <Title color={color} fontColor={fontColor}>
                {name}
            </Title>
            <Slider>
                {videos.map((video: string) => {
                    const id = getYouTubeId(video);
                    return <SliderItem key={video}>
                        <VideoCard
                            key={id}
                            color={color}
                            href={video}
                            image={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                        />
                    </SliderItem>
                }
                )}
            </Slider>
        </Category>
    );
}

export default Carousel;