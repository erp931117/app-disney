import { Container, Avatar, AvatarContainer, Degrade } from '../styled.components'
import { useEffect, useState } from 'react';
import BlackWidow from '../../assets/black-widow.png'

interface Hero {
    name: string;
    imageUrl: string;
}

interface Item {
    name: string;
    imageUrl: string;
}

const Carousel = (): JSX.Element => {

    const [data, setData] = useState<Hero[]>([]);

    const getData = async (): Promise<void> => {
        const url = import.meta.env.VITE_BASE_URL;
        const items = await fetch(url);
        const response: any = await items.json();
        const allItems = response.data.map((hero: Item) => {
            const obj: Hero = {
                name: hero.name,
                imageUrl: hero.imageUrl
            };
            return obj;
        });
        setData(allItems);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {data.length > 0 &&
                <>
                    <Container height={50} src={data[6].imageUrl}/>
                    <AvatarContainer height={50}>
                        <Avatar height={50} src={BlackWidow}></Avatar>
                    </AvatarContainer>
                    <Degrade height={50}/>
                </>
            }
        </>
    );
}

export default Carousel;