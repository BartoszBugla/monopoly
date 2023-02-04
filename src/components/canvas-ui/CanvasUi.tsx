import { useUiViewGetter } from '@store/ui-view';
import { useAtom } from 'jotai';

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

const ViewLookup: { [key in UiView]: JSX.Element | null } = {
    [UiView.Default]: null,
    [UiView.TileCard]: <TileCard />,
};

const CanvasUi = () => {
    const { activeView } = useUiViewGetter();

    return (
        <Overlay component="div">
            {activeView == UiView.Default ? (
                <Button onClick={() => console.log('kulomy ni ')}>
                    Kulnij kosteczką
                </Button>
            ) : (
                ViewLookup[activeView]
            )}
        </Overlay>
    );
};

export { CanvasUi };
