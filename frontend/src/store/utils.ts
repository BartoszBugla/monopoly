import { Getter, Setter, atom } from 'jotai';

import { VoidFn } from '@common/models/types';

export const empty = () => '';

type SetterType = (getter: Getter, set: Setter, args: any) => void;

export const setter = (fn: SetterType) => atom(empty, fn);
