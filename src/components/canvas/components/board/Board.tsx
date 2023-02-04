import { Color3, Mesh, Nullable, Vector3 } from '@babylonjs/core';
import { useRef, useState } from 'react';

import { Button } from '@mui/material';

import { Pawn } from '../pawn';
import { TILE_SIZE, Tile } from '../tile';

interface BoardProps {
    name: string;
    position: Vector3;
}
const fields = [
    { name: 'start', event: 'give money', color: new Color3(0, 1, 0) },
    { name: '12', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: '32', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: '42', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: '31', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: '23', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'Mad32ryt', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: '32', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: '32', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'asdsad', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'ds', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'fasds', event: 'give money', color: new Color3(0, 0.5, 0.1) },
    { name: 'dsadsa', event: 'give money', color: new Color3(0, 0.5, 0.1) },
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

    const players = [{ currentTile: 1 }];

    const tilePosition = (at: number) =>
        fields.map((_, i) => {
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
            return new Vector3(x, 0.1, z);
        })[at];

    return (
        <box name="board" size={9} height={0.1} position={position}>
            <standardMaterial name="board-mat" diffuseColor={Color3.Black()}>
                <>
                    {fields.map(({ name, event, color }, i) => {
                        return (
                            <Tile
                                key={i}
                                name={name}
                                position={position.add(tilePosition(i))}
                                color={new Color3(0, 0, 1 - i / 100)}
                                hoveredColor={new Color3(0, 0, 0)}
                            ></Tile>
                        );
                    })}

                    {players.map(({ currentTile }) => (
                        <Pawn
                            position={position
                                .add(tilePosition(currentTile))
                                .add(new Vector3(0, 0.2, 0))}
                        />
                    ))}
                </>
            </standardMaterial>
        </box>
    );
};

export { Board };
