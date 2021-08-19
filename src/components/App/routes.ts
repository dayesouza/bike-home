import { Add } from "../pages/Add";
import { Home } from "../pages/Home";
import { NotFoundPage } from "../pages/NotFound";

interface Route {
  path: string;
  component: React.FC;
  exact?: boolean;
}

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/add",
    component: Add,
  },
  {
    path: "**",
    component: NotFoundPage,
  },
] as Route[];
