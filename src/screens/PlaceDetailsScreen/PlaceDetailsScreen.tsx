import type { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, Pressable, ScrollView, View } from 'react-native';

import { styles } from './styles';

import {
  BackArrow,
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
  LocationIcon,
  SaveIcon,
  ShareIcon,
} from 'src/components';
import { COLORS } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectIsPlaceSaved } from 'src/redux/places/selectors';
import { toggleFavoritePlace } from 'src/redux/places/slice';
import type {
  MainStackNavigationParamsList,
  MainStackNavigationProp,
} from 'src/types';
import { handleShare, hp, wp } from 'src/utils';

const PlaceDetailsScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();
  const route =
    useRoute<RouteProp<MainStackNavigationParamsList, 'PlaceDetailsScreen'>>();

  const place = route.params.place;

  const isPlaceSaved = useAppSelector(selectIsPlaceSaved(place.id));

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSharePress = () => {
    handleShare();
  };

  const handleSavePress = () => {
    dispatch(toggleFavoritePlace(place));
  };

  const handleOpenOnMapPress = () => {
    navigation.navigate('MapDetailsScreen', { place });
  };

  return (
    <CustomScreenWrapper
      extraStyle={styles.container}
      edges={['bottom', 'left', 'right']}
    >
      <Pressable
        style={styles.backBtn}
        onPress={handleBackPress}
        hitSlop={wp(10)}
      >
        <BackArrow width={wp(33)} height={hp(33)} />
      </Pressable>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainScroll}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.imageContainer}>
          <Image
            source={place.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.shareBookmarkContainer}>
          <CustomButton
            variant="golden"
            extraStyle={styles.shareButton}
            onPress={handleSharePress}
          >
            <CustomText extraStyle={styles.shareButtonText}>
              Share location
            </CustomText>
            <ShareIcon
              width={wp(20)}
              height={hp(20)}
              color={COLORS.darkBrown}
            />
          </CustomButton>
          <CustomButton
            variant="golden"
            extraStyle={styles.bookmarkButton}
            onPress={handleSavePress}
          >
            <SaveIcon
              width={wp(20)}
              height={hp(20)}
              color={isPlaceSaved ? COLORS.darkBrown : COLORS.white}
            />
          </CustomButton>
        </View>

        <CustomContainer
          variant="brown"
          extraStyle={styles.descriptionContainer}
        >
          <CustomText extraStyle={styles.descriptionText}>
            {`${place.description}\n\nFun facts:`}
          </CustomText>
          {place.facts.map((fact, idx) => (
            <CustomText key={idx + fact} extraStyle={styles.descriptionText}>
              {`• ${fact}`}
            </CustomText>
          ))}
        </CustomContainer>
      </ScrollView>

      <CustomButton
        variant="golden"
        extraStyle={styles.mapButton}
        onPress={handleOpenOnMapPress}
      >
        <CustomText extraStyle={styles.mapButtonText}>Open on map</CustomText>
        <LocationIcon width={wp(20)} height={hp(20)} color={COLORS.darkBrown} />
      </CustomButton>
    </CustomScreenWrapper>
  );
};

export default PlaceDetailsScreen;
