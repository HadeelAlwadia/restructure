import { flatten } from "@app/utils/helpers/route.helper";
import NestedRouteWrapper from "@app/utils/redux/routes/NestedRouteWrapper";

import { SETTINGS_ROUTES } from "./settings.routes";

const SettingsRoutes = () => {
  const routesWithComponents = flatten(SETTINGS_ROUTES);

  return <NestedRouteWrapper routesWithComponents={routesWithComponents} />;
};

export default SettingsRoutes;
