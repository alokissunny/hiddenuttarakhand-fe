import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

interface MaterialIconProps extends Omit<SvgIconProps, 'children'> {
  icon: string;
}

export const MaterialIcon: React.FC<MaterialIconProps> = ({ icon, ...props }) => (
  <SvgIcon {...props}>
    <span className="material-icons">{icon}</span>
  </SvgIcon>
); 