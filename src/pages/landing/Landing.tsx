import { Box, Button, Stack } from '@mui/material';

import { Canvas } from '@components/canvas';

const Landing = () => {
    return (
        <Box component="div">
            <Stack>
                <Canvas />
            </Stack>
        </Box>
    );
};
export { Landing };
