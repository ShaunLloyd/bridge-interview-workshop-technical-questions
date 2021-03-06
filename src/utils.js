import React from 'react';
import { List, Appear, ListItem } from 'spectacle';
import { typeScale } from './theme';

export const appear = InnerComponent => {
  const WrappedComponent = ({ children, ...props }) => (
    <Appear>
      <div>
        <InnerComponent {...props}>{children}</InnerComponent>
      </div>
    </Appear>
  );

  return WrappedComponent;
};

export const PlainList = ({ children, style = {}, ...props }) => (
  <List style={{ 'list-style': 'none', ...style }} {...props}>
    {children}
  </List>
);

export const ListItemText = ({ children, size = 2, ...props }) => (
  <ListItem
    textSize={typeScale[size]}
    textColor="tertiary"
    padding="20px 0"
    {...props}
  >
    {children}
  </ListItem>
);

export const AppearingListItem = appear(ListItemText);
