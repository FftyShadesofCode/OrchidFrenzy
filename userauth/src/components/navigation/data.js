import React from 'react';

import {
    faChevronDown,
    faChevronUp,
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

import { HiDocument } from 'react-icons/hi';
export const links = [
    {
        id: 1,
        path: '/dashboard',
        text: 'Home',
        icon: <FontAwesomeIcon icon={faHouseChimney} className="w-10 h-10" />,
    },
    {
        id: 2,
        path: '/messaging',
        text: 'Messaging',
        icon: <FontAwesomeIcon icon={faInbox} className="w-10 h-10" />,
        iconClosed: <FontAwesomeIcon icon={faChevronDown} className={`w-10 h-10`} />,
        iconOpened: <FontAwesomeIcon icon={faChevronUp} className={`w-10 h-10`} />,
        subNav: [
            {
                id: 1,
                path: '/messaging/inbox',
                text: 'Inbox',
                icon: <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />,
                cName: "sub-nav",
            },
            {
                id: 2,
                path: '/messaging/trash',
                text: 'Trash',
                icon: <FontAwesomeIcon icon={faTrash} className="w-5 h-5" />,
                cName: "sub-nav",
            }
        ]
    },
    {
        id: 3,
        path: '/contacts',
        text: 'Contacts',
        icon: <FontAwesomeIcon icon={faAddressBook} className="w-10 h-10" />,
        iconClosed: <FontAwesomeIcon icon={faChevronDown} className={`w-10 h-10`} />,
        iconOpened: <FontAwesomeIcon icon={faChevronUp} className={`w-10 h-10`} />,
        subNav: [
            {
                id: 1,
                path: '/contacts/all',
                text: 'All Contacts',
                icon: <FontAwesomeIcon icon={faAddressCard} className='w-5 h-5' />,
                cName: "sub-nav",
            },
            {
                id: 2,
                path: '/contacts/favorites',
                text: 'Favorites',
                icon: <FontAwesomeIcon icon={faStar} className='w-5 h-5' />,
                cName: "sub-nav",
            }
        ]
    },
    {
        id: 4,
        path: '/calendar',
        text: 'Calendar',
        icon: <FontAwesomeIcon icon={faCalendarDays} className="w-10 h-10" />,
    },
    {
        id: 5,
        path: '/meetings',
        text: 'Meetings',
        icon: <FontAwesomeIcon icon={faPersonChalkboard} className="w-10 h-10" />,
    },
    {
        id: 6,
        path: '/resources',
        text: 'Resources',
        icon: <FontAwesomeIcon icon={faClipboardList} className="w-10 h-10" />,
    },
    {
        id: 7,
        path: '/reports',
        text: 'Reports',
        icon: <FontAwesomeIcon icon={faChartLine} className="w-10 h-10" />,
    },
];

export const social = [
    {
        id: 1,
        path: 'https://www.facebook.com',
        icon: <FontAwesomeIcon icon={faSquareFacebook} />,
    },
    {
        id: 2,
        path: 'https://www.instagram.com',
        icon: <FontAwesomeIcon icon={faSquareInstagram} />,
    }
];