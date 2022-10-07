import { faHouseChimney, faInbox, faCalendarDays, faPersonChalkboard, faClipboardList, faChartLine, faEnvelope, faTrash } from '@fortawesome/free-solid-svg-icons'

const MenuOptions = [
     {
        label: 'Home',
        Icon: faHouseChimney,
        to: '/'
     },
     {
        label: 'Messaging',
        Icon: faInbox,
        to: '/messaging',
        children: [
            {
                label: 'Inbox',
                Icon: faEnvelope,
                to: '/messaging/inbox',
            },
            {
                label: 'Deleted',
                Icon: faTrash,
                to: '/messaging/inbox',
            },
        ]
     },
     {
        label: 'Calendar',
        Icon: faCalendarDays,
        to: '/calendar'
     },
     {
        label: 'Meetings',
        Icon: faPersonChalkboard,
        to: '/meetings'
     },
     {
        label: 'Resources',
        Icon: faClipboardList,
        to: '/resources'
        },
     {
        label: 'Reports',
        Icon: faChartLine,
        to: '/reports'
    },
]

export default MenuOptions