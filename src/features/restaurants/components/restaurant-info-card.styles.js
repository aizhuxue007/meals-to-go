import { styled } from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Text, View, Image } from "react-native";
import { Card, Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const RestaurantCard = styled(Card)`
  background: ${(props) => props.theme.colors.bg.primary};
  border: 1px solid grey;
`;
export const RestaurantCardCover = styled(Card.Cover)``;

export const RestaurantInfo = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[3]};
`;
export const RestaurantDescription = styled(View)`
  width: 60%;
`;

export const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.ui.primary};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const Address = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  margin-bottom: ${(props) => props.theme.space[4]};
`;

export const IsClosedTemporarily = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.error};
`;

export const Icons = styled(View)`
  align-items: flex-end;
`;

export const Status = styled(View)`
  flex-direction: row;
  gap: ${(props) => props.theme.space[3]};
`;

export const Icon = styled(Image)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
  margin-top: ${(props) => props.theme.space[1]};
`;

export const Ratings = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.space[1]} 0;
`;

export const Star = styled(SvgXml)``;

export const Open = styled(SvgXml)``;

export const OrderButton = styled(Button).attrs({ buttonColors: colors.brand.primary, mode: 'contained', icon: 'cash' })`
  width: 80%;
  align-self: center;
  padding: ${props => props.theme.space[2]};
  margin-bottom: ${props => props.theme.space[4]};
`;