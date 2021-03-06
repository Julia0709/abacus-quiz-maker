import * as React from 'react';
import { Theme, Typography } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

import { createStyled } from '../../utils';
import { Abacus } from '../../components';

interface Props {
  readonly text?: string;
}

export const Logo = ({ text = '' }: Props) => (
  <Styled>
    {({ classes }) => (
      <div className={classes.container}>
        <Abacus className={classes.icon} color="primary" />
        <Typography variant="h6" color="inherit">
          {text}
        </Typography>
      </div>
    )}
  </Styled>
);

type ClassKey = 'container' | 'icon';
const Styled = createStyled(
  (theme: Theme): StyleRules<ClassKey> => ({
    container: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    icon: {
      marginRight: theme.spacing.unit * 0.25,
      width: theme.spacing.unit * 4,
    },
  }),
);
