import { Color3, Mesh, Vector3 } from '@babylonjs/core';
import { isOverlayAtom } from '@store/canvas';
import { Nullable } from 'babylonjs';
import { useAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import { Html, useBeforeRender, useClick, useHover } from 'react-babylonjs';

interface TileProps {
    name: string;
    position: Vector3;
    color: Color3;
    hoveredColor: Color3;
}

export const TILE_SIZE = 1;

const Tile = ({ name, position, hoveredColor, color }: TileProps) => {
    const boxRef = useRef<Nullable<Mesh>>(null);

    const [_, setOverlay] = useAtom(isOverlayAtom);

    const [clicked, setClicked] = useState(false);

    useClick(() => setOverlay(true), boxRef);

    const [hovered, setHovered] = useState(false);

    useHover(
        () => setHovered(true),
        () => setHovered(false),
        boxRef,
    );

    useEffect(() => {
        if (boxRef.current) {
            boxRef.current.drawText(
                'textttt',
                75,
                135,
                font,
                'green',
                'white',
                true,
                true,
            );
        }
    }, [boxRef.current]);
    return (
        <box
            name={name}
            ref={boxRef}
            size={TILE_SIZE}
            position={position}
            height={0.1}
        >
            <Html name="html" center>
                {
                    <div
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '5px',
                            padding: '2px',
                        }}
                    >
                        Text
                    </div>
                }
            </Html>
            <standardMaterial
                name={`${name}-mat`}
                diffuseColor={hovered ? hoveredColor : color}
                specularColor={Color3.Black()}
            />
        </box>
    );
};

export { Tile };
