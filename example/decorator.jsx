import React from 'react';
import {Entity} from 'draft-js';

import type {ContentBlock} from 'draft-js';

// TODO: Use a more specific type here.
type ReactNode = any;

type Props = {
  children: ReactNode,
  entityKey: string,
};

type EntityRangeCallback = (start: number, end: number) => void;

function Link(props_: Props): React.Element {
  const {className} = Entity.get(props_.entityKey).getData();
  return (
    <span className={className}>{props_.children}</span>
  );
}

function findLinkEntities(contentBlock: ContentBlock, callback: EntityRangeCallback) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey != null &&
      Entity.get(entityKey).getType() === 'LINK'
    );
  }, callback);
}

export default {
  strategy: findLinkEntities,
  component: Link,
};
