import React from 'react';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';

export interface MaterialIconProps {
  icon: string;
  sx?: SxProps<Theme>;
}

export const MaterialIcon: React.FC<MaterialIconProps> = ({ icon, sx }) => (
  <Box component="span" className="material-icons" sx={sx}>{icon}</Box>
);

export default MaterialIcon; 