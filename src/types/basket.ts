import {ImageProps} from "react-native";

export interface BasketProps {
  basketTop: BasketTopProps;
  basketDetails: BasketDetailsProps;
}

export interface BasketTopProps {
  title: string;
}

export interface BasketDetailsProps {
  name: string;
  farmLogo: ImageProps | Readonly<ImageProps>,
  farmTitle: string;
  description: string;
  price: string;
  button: string;
}