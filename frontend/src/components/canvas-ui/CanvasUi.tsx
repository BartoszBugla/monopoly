import { uiViewAtom } from '@store/ui-view';
import { useAtomValue } from 'jotai';

import { Box, Button, styled } from '@mui/material';

import { UiView } from '@common/models/enums';

import TileCard from './views/tile-card';

const Overlay = styled(Box)({
    position: 'absolute',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    left: 0,
    top: 0,
    '*': {
        pointerEvents: 'all',
    },
});

const ViewLookup = (props: any) => ({
    [UiView.Default]: null,
    [UiView.TileCard]: <TileCard {...props} />,
});

const CanvasUi = () => {
    const { props, activeView } = useAtomValue(uiViewAtom);

    return (
        <Overlay component="div">
            {activeView == UiView.Default ? (
                <Button onClick={() => console.log('kulomy ni ')}>
                    Kulnij kosteczką
                </Button>
            ) : (
                ViewLookup(props)[activeView]
            )}
        </Overlay>
    );
};

export { CanvasUi };
