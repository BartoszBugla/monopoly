import { empty, setter } from '@store/utils';
import {
    ExtractAtomUpdate,
    Getter,
    Setter,
    atom,
    useAtom,
    useAtomValue,
    useSetAtom,
} from 'jotai';
import { MouseEvent, useCallback, useMemo } from 'react';

import { UiView } from '@common/models/enums';
import { VoidFn } from '@common/models/types';

export interface TileCardProps {
    city: string;
}

type ActiveUiViewAtom =
    | {
          activeView: UiView.Default;
          props: '';
      }
    | {
          activeView: UiView.TileCard;
          props: TileCardProps;
      };

export const UiViewAtom = atom<ActiveUiViewAtom>({
    activeView: UiView.Default,
    props: '',
});

export const openTileCardAtom = atom(
    () => '',
    (_get, set, props: TileCardProps) => {
        console.log('opening');
        set(UiViewAtom, { activeView: UiView.TileCard, props });
    },
);

export const closeUiViewAtom = setter((_get, set, _) => {
    set(UiViewAtom, { activeView: UiView.Default, props: '' });
});
