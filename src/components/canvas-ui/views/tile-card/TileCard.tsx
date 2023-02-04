import { useUiViewGetter, useUiViewSetters } from '@store/ui-view';
import { TileCardProps } from '@store/ui-view/ui-view.atoms';

import { Card as BaseCard, styled } from '@mui/material';

const Container = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
});

const Card = styled(BaseCard)({
    width: '20vw',
    height: '20vh',
});

const TileCard = () => {
    const { closeUiView } = useUiViewSetters();
    const { props } = useUiViewGetter();
    const { city } = props as TileCardProps;

    console.log('rerender card');
    return (
        <Container onClick={closeUiView}>
            {/* <Card>Hello world i am centered {city} </Card> */}
        </Container>
    );
};

export default TileCard;
