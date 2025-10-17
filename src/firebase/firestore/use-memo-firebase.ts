
'use client';
import { useMemo, type DependencyList } from 'react';
import { isEqual } from 'lodash';

export function useMemoFirebase<T>(
  factory: () => T,
  deps: DependencyList | undefined
): T {
  return useMemo(factory, deps, isEqual);
}
