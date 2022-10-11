import React from 'react';

import {
    faLeaf,
    faSeedling,
    faHouseChimney,
    faInbox,
    faEnvelope,
    faTrash,
    faAddressBook,
    faAddressCard,
    faStar,
    faCalendarDays,
    faPersonChalkboard,
    faClipboardList,
    faChartLine,
} from '@fortawesome/free-solid-svg-icons'
import {
    faSquareFacebook,
    faSquareInstagram
} from '@fortawesome/free-brands-svg-icons'
import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome"

export const links = [
    {
        id: 1,
        path: '/dashboard',
        text: 'Home',
        icon: faHouseChimney,
    },
    {
        id: 2,
        path: '/messaging',
        text: 'Messaging',
        icon: faInbox,
        iconClosed: <FontAwesomeIcon icon={faLeaf} className={`w-5 h-5 text-leafGreen`} />,
        iconOpened: <FontAwesomeIcon icon={faSeedling} className={`w-5 h-5 text-seedlingGreen hover:shadow-white`} />,
        subNav: [
            {
                id: 1,
                path: '/messaging/inbox',
                text: 'Inbox',
                icon: faEnvelope,
                cName: "sub-nav",
            },
            {
                id: 2,
                path: '/messaging/trash',
                text: 'Trash',
                icon: faTrash,
                cName: "sub-nav"
            }
        ]
    },
    {
        id: 3,
        path: '/contacts',
        text: 'Contacts',
        icon: faAddressBook,
        iconClosed: <FontAwesomeIcon icon={faLeaf} className={`w-5 h-5 text-leafGreen`} />,
        iconOpened: <FontAwesomeIcon icon={faSeedling} className={`w-5 h-5 text-seedlingGreen`} />,
        subNav: [
            {
                id: 1,
                path: '/contacts/all',
                text: 'All Contacts',
                icon: faAddressCard,
                cName: "sub-nav"
            },
            {
                id: 2,
                path: '/contacts/favorites',
                text: 'Favorites',
                icon: faStar,
                cName: "sub-nav"
            }
        ]
    },
    {
        id: 4,
        path: '/calendar',
        text: 'Calendar',
        icon: faCalendarDays
    },
    {
        id: 5,
        path: '/meetings',
        text: 'Meetings',
        icon: faPersonChalkboard
    },
    {
        id: 6,
        path: '/resources',
        text: 'Resources',
        icon: faClipboardList
    },
    {
        id: 7,
        path: '/reports',
        text: 'Reports',
        icon: faChartLine
    },
];

export const social = [
    {
        id: 1,
        path: 'https://www.facebook.com/groups/1567776933533713',
        icon: faSquareFacebook,
    },
    {
        id: 2,
        path: 'https://www.instagram.com/nenyos',
        icon: faSquareInstagram,
    }
];