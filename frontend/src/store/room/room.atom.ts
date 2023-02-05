import { atom } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';

interface Estate {
    name: string;
}

interface Player {
    id: number;
    name: string;
    currentPosition: number;
    money: number;
    estates: Estate[];
    frozenFor: number;
}

interface Room {
    id: number;
    turn: number;
    currentPlayerId: number;
    players: Player[];
    settings?: string;
    modifiers?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const mockedPlayers = [
    {
        id: 0,
        name: 'Bartek',
        currentPosition: 0,
        money: 1000,
        estates: [],
        frozenFor: 0,
    },
    {
        id: 1,
        name: 'Kinga',
        currentPosition: 0,
        money: 1000,
        estates: [],
        frozenFor: 0,
    },
];

const mockedRoom: Room = {
    id: 0,
    turn: 0,
    currentPlayerId: 0,
    settings: '',
    players: mockedPlayers,
};

const roomAtom = atomsWih<Room>(mockedRoom);
