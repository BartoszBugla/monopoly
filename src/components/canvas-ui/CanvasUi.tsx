import { isOverlayAtom } from '@store/canvas';
import { useAtom } from 'jotai';

import { Box, Button, styled } from '@mui/material';

// interface CanvasUiProps {}

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

const CanvasUi = () => {
    const [isOverlay, setOverlay] = useAtom(isOverlayAtom);

    return (
        <Overlay component="div" visibility={isOverlay ? 'visible' : 'hidden'}>
            <Button onClick={() => setOverlay(false)} variant="contained">
                Click me to close
            </Button>
        </Overlay>
    );
};

export { CanvasUi };
