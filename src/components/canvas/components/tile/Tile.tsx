import { Color3, Mesh, Vector3 } from '@babylonjs/core';
import { Rectangle } from '@babylonjs/gui';
import { useUiViewSetters } from '@store/ui-view';
import { Nullable } from 'babylonjs';
import { useAtom } from 'jotai';
import { useRef, useState } from 'react';
import {
    Html,
    TextBlock,
    useBeforeRender,
    useClick,
    useHover,
} from 'react-babylonjs';

import { UiView } from '@common/models/enums';

interface TileProps {
    name: string;
    position: Vector3;
    color: Color3;
    hoveredColor: Color3;
}

export const TILE_SIZE = 1;

const Tile = ({ name, position, hoveredColor, color }: TileProps) => {
    const rectRef = useRef<Nullable<Mesh>>(null);

    const { openTileCard } = useUiViewSetters();

    useClick(() => openTileCard({ city: name }), rectRef);
    console.log('rerender');
    const [hovered, setHovered] = useState(false);

    useHover(
        () => setHovered(true),
        () => setHovered(false),
        rectRef,
    );

    return (
        <box name={name} size={TILE_SIZE} position={position} height={0.1}>
            <standardMaterial
                name={`${name}-mat`}
                diffuseColor={Color3.Black()}
                specularColor={Color3.Black()}
            >
                <plane
                    name="dialog"
                    ref={rectRef}
                    size={1}
                    position={position.add(new Vector3(0, 0.1, 0))}
                    rotation={new Vector3(1.6, 0, 1.57)}
                >
                    <advancedDynamicTexture
                        name="dialogTexture"
                        height={1024}
                        width={1024}
                        createForParentMesh={true}
                        hasAlpha={true}
                    >
                        <rectangle
                            name="rect-1"
                            height={1}
                            width={1}
                            thickness={12}
                            cornerRadius={12}
                        >
                            <rectangle>
                                <babylon-button
                                    name="close-icon"
                                    background="green"
                                >
                                    <textBlock
                                        text={name}
                                        fontFamily="FontAwesome"
                                        fontStyle="bold"
                                        fontSize={200}
                                        color="white"
                                    />
                                </babylon-button>
                            </rectangle>
                        </rectangle>
                    </advancedDynamicTexture>
                </plane>
            </standardMaterial>
        </box>
    );
};

export { Tile };
