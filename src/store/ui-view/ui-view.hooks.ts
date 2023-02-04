import { useAtomValue, useSetAtom } from 'jotai';

import { UiViewAtom, closeUiViewAtom, openTileCardAtom } from './ui-view.atoms';

export const useUiViewSetters = () => {
    const openTileCard = useSetAtom(openTileCardAtom);
    const closeUiView = useSetAtom(closeUiViewAtom);

    return { openTileCard, closeUiView };
};

export const useUiViewGetter = () => useAtomValue(UiViewAtom);
