import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { faGlobe, faPlus, faClock } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faGlobe, faPlus, faClock);

/*
  Use it like that on the desired component:
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    <FontAwesomeIcon icon="name-like-that-without-fa" />
*/
