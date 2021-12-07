import BlankLayout from "@app/components/BlankLayout/BlankLayout";
import { RouteItemDef } from "@app/utils/types/route.types";

import { AuthPathsEnum } from "../constants/auth.paths";
import LoginScreen from "../screens/LoginScreen/LoginScreen";

const LOGIN_SCREEN: RouteItemDef = {
  id: "login",
  path: AuthPathsEnum.LOGIN,
  component: LoginScreen,
  navigationTitle: "auth.loginTitle",
  layout: BlankLayout,
};

export const AUTH_ROUTES = [LOGIN_SCREEN];
