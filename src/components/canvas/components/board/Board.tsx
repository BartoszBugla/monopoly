import { Color3, Mesh, Nullable, Vector3 } from '@babylonjs/core';
import { useRef, useState } from 'react';

import { Button } from '@mui/material';

import { TILE_SIZE, Tile } from '../tile';

interface BoardProps {
    name: string;
    position: Vector3;
}
const fields = [
    { name: 'start', event: 'give money', color: new Color3(0, 1, 0) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Madryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
];

const FIELD_AMOUNT = 9;

const Board = ({ name, position }: BoardProps) => {
    const boardRef = useRef<Nullable<Mesh>>(null);

    const startX = (FIELD_AMOUNT - 1) / 2;
    const startZ = -4;

    return (
        <box name={name} ref={boardRef} height={0.1} position={position}>
            {fields.map(({ name, event, color }, i) => {
                const iteration = Math.floor(i / (FIELD_AMOUNT - 1));

                let [x, z] = [0, 0];

                if (iteration == 0) {
                    x = startX - (i % FIELD_AMOUNT);
                    z = startZ;
                }
                if (iteration == 1) {
                    x = startX - FIELD_AMOUNT + 1;
                    z = startZ + (i % (FIELD_AMOUNT - 1));
                }
                if (iteration == 2) {
                    x = startX - (i % (FIELD_AMOUNT - 1)) - 1;
                    z = startZ + FIELD_AMOUNT - 1;
                }
                if (iteration == 3) {
                    x = startX;
                    z = startZ + (i % (FIELD_AMOUNT - 1)) + 1;
                }

                return (
                    <Tile
                        key={i}
                        name={name}
                        position={position.add(new Vector3(x, 0.1, z))}
                        color={new Color3(0, 0, 1 - i / 100)}
                        hoveredColor={new Color3(0, 0, 0)}
                    />
                );
            })}
        </box>
    );
};

export { Board };
