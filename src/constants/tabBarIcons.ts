import type { SvgProps } from 'react-native-svg';

import { HomeIcon, LocationIcon, SaveIcon, SettingsIcon } from 'src/components';
import type { TabNavigationParamsList } from 'src/types';

type IconComponent = React.ComponentType<SvgProps>;

export const TAB_BAR_ICONS: Record<
  keyof TabNavigationParamsList,
  IconComponent
> = {
  HomeScreen: HomeIcon,
  SavedPlacesScreen: SaveIcon,
  MapsScreen: LocationIcon,
  SettingsScreen: SettingsIcon,
};
