import { setter } from '@store/utils';
import { atom } from 'jotai';

import { UiView } from '@common/models/enums';

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

export const uiViewAtom = atom<ActiveUiViewAtom>({
    activeView: UiView.Default,
    props: '',
});

export const openTileCardAtom = atom(
    () => '',
    (_get, set, props: TileCardProps) => {
        console.log('opening');
        set(uiViewAtom, { activeView: UiView.TileCard, props });
    },
);

export const closeUiViewAtom = setter((_get, set, _) => {
    set(uiViewAtom, { activeView: UiView.Default, props: '' });
});
