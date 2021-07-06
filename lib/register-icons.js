import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'


export default function registerIcons() {
    config.autoAddCss = false;

    library.add(fab, faCheckCircle);
}