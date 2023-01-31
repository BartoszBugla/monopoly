import { Vector3 } from '@babylonjs/core';
import { useState } from 'react';
import { TextBlock } from 'react-babylonjs';

type CustomMeshType = {
    name: string;
    position: Vector3;
    text: string;
};

const TextMesh = ({ text, name, position }: CustomMeshType) => {
    return (
        <mesh
            name="mesh"
            fromInstance={customMesh}
            disposeInstanceOnUnmount
            position={position}
        >
            <standardMaterial name={`${name}-mat`} />
        </mesh>
    );
};

export { TextMesh };
