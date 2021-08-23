import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import {
  faGlobe,
  faPlus,
  faClock,
  faCircleNotch,
  faUser,
  faMoon,
  faSun,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faGlobe,
  faPlus,
  faClock,
  faCircleNotch,
  faUser,
  faMoon,
  faSun,
  faCoffee
);

/*
  Use it like that on the desired component:
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    <FontAwesomeIcon icon="name-like-that-without-fa" />
*/
