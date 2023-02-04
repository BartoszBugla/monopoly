import { Vector3 } from '@babylonjs/core';

interface PlayerProps {
    position: Vector3;
}

const Pawn = ({ position }: PlayerProps) => {
    return <box name="player" position={position} size={0.3} />;
};

export { Pawn };
