import { Color3, Vector3 } from '@babylonjs/core';
import { Engine, Scene, Skybox } from 'react-babylonjs';

import { styled } from '@mui/material';

import { CanvasUi } from '@components/canvas-ui';

import { TextMesh } from './base-components';
import { Board } from './components';

const Container = styled('div')({
    position: 'relative',
});

export const Canvas = () => (
    <Container>
        <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
            <Scene>
                <arcRotateCamera
                    name="camera1"
                    target={Vector3.Zero()}
                    alpha={Math.PI / 2}
                    beta={0}
                    radius={12}
                />
                <hemisphericLight
                    name="light1"
                    intensity={0.7}
                    direction={Vector3.Up()}
                />
                <Skybox rootUrl="/SkyWater.dds" />
                <Board name="mainBoard" position={new Vector3(0, 0, 0)} />
                <TextMesh
                    text="Testowy string"
                    position={new Vector3(1, 1, 1)}
                    name="test"
                />
            </Scene>
        </Engine>
        <CanvasUi />
    </Container>
);
