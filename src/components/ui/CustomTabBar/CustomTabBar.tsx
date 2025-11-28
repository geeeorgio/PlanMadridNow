import { type BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Pressable, View } from 'react-native';

import CustomContainer from '../CustomContainer/CustomContainer';

import { styles } from './styles';

import { COLORS, TAB_BAR_ICONS } from 'src/constants';
import { hp, wp } from 'src/utils';

const CustomTabBar = (props: BottomTabBarProps) => {
  return (
    <CustomContainer variant="menu" extraStyle={styles.container}>
      <View style={styles.content}>
        {props.state.routes.map((route, index) => {
          const isActive = props.state.index === index;

          const Icon = TAB_BAR_ICONS[route.name as keyof typeof TAB_BAR_ICONS];

          const onPress = () => {
            const event = props.navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isActive && !event.defaultPrevented) {
              props.navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            props.navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              key={route.key}
              hitSlop={wp(5)}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.button}
              accessibilityRole="button"
              accessibilityState={{ selected: isActive }}
              accessibilityLabel={route.name}
            >
              <Icon
                width={wp(30)}
                height={hp(30)}
                color={isActive ? COLORS.white : COLORS.darkBrown}
              />
            </Pressable>
          );
        })}
      </View>
    </CustomContainer>
  );
};

export default CustomTabBar;
