import React from 'react';
import classNames from 'classnames';
import { Button as ReakitButton } from 'reakit';

const Button = (props) => {
  const {
    className,
    children,
    primary,
    secondary,
    formatting,
  } = props;
  const borderClasses =
    'border rounded focus:outline-none focus:shadow-outline focus:border-6 focus:border-purple-500';

  const classes = classNames(
    formatting,
    'border',
    'rounded',
    'hover:shadow-inner',
    'transition',
    'active:transform',
    'active:scale-95',
    'shadow-xs',
    'active:shadow-xs',
    'outline-none',
    {
      'bg-pink-400': primary,
      'hover:bg-pink-300': primary,
      'focus:border-pink-500': primary,
      'text-gray-900': primary || secondary,
      'bg-purple-400': secondary,
      'hover:bg-purple-300': secondary,
      'focus:border-purple-500': secondary,
    },
  );

  return (
    <ReakitButton className={classes} {...props}>
      {children}
    </ReakitButton>
  );
};

export default Button;
