import React from "react";

export const navLinks = [
    {
        "id": 1,
        "label": "Home",
        "path": "/"
    },
    {
        "id": 2,
        "label": "Gallery",
        "path": "/gallery"
    },
    {
        "id": 3,
        "label": "Resources",
        "path": "/resources"
    }
]

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
    faChevronDown,
    faChevronUp,
    faInbox,
    faEnvelopeOpenText,
    faEnvelopeCircleCheck,
    faStar,
    faUserGroup,
    faListCheck,
    faComments
} from '@fortawesome/free-solid-svg-icons'

export const sideMenuItems = [
    {
        "id": 1,
        "label": "Messaging",
        "path": "/messaging",
        "icon": faInbox,
        "iconOpened": <FontAwesomeIcon icon={faChevronUp} className={`w-5 h-5 text-white duration-200`} />,
        "iconClosed": <FontAwesomeIcon icon={faChevronDown} className={`w-5 h-5 text-white duration-200`} />,
        subNav: [
            {
                "id": 1,
                "label": "Inbox",
                "path": "/inbox",
                "icon": faEnvelopeOpenText,
            },
            {
                "id": 2,
                "label": "Sent",
                "path": "/sent",
                "icon": faEnvelopeCircleCheck,
            },
            {
                "id": 3,
                "label": "Favorites",
                "path": "/favorites",
                "icon": faStar,
            }
        ]
    },
    {
        "id": 2,
        "label": "Friendz",
        "path": "/friendz",
        "icon": faUserGroup,
    },
    {
        "id": 3,
        "label": "My Orchids",
        "path": "/my-orchids",
        "icon": faListCheck,
    },
    {
        "id": 4,
        "label": "Forums",
        "path": "/forums",
        "icon": faComments,
    }
]