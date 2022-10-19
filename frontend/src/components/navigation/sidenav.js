import React from 'react'
import {
    ProSidebarProvider,
    Menu,
    MenuItem,
    SubMenu,
    Sidebar
} from 'react-pro-sidebar'
import {
    FaInbox,
    FaEnvelopeOpenText,
    FaStar,
    FaRegFolderOpen,
    FaRocketchat
} from 'react-icons/fa'
import {
    GiEnvelope
} from 'react-icons/gi'

import Logo from '../../assets/logo-solid.png'
import LogoText from '../../assets/logo-text.png'

const Sidenav = ({ image, collapsed, toggled, handleToggleSidebar }) => {
    return (
        <ProSidebarProvider
            collapsed={collapsed}
            toggled={toggled}
            breakPoint='md'
            onToggle={handleToggleSidebar}
        >
            <Sidebar className={`bg-gradient-to-tl from-darkPurple to-teal border-2 border-primaryPurple ml-[25px] mt-[25px] rounded-[20px] h-[750px] w-[250px] m-0 p-0`}>
                <div>
                    <img
                        src={image ? LogoText : Logo}
                        alt=''
                    />
                </div>


                <Menu iconShape='circle' className={`bg-gradient-to-tl from-darkPurple to-teal m-0 p-0`}>
                    <SubMenu
                        suffix={<span className={`text-center`}>Messaging</span>}
                        title='Messaging'
                        icon={<FaInbox />}
                    >
                        <MenuItem
                            icon={<FaEnvelopeOpenText />}>Inbox</MenuItem>
                        <MenuItem
                            icon={<GiEnvelope />}>Sent</MenuItem>
                        <MenuItem
                            icon={<FaStar />}>Favorites</MenuItem>
                    </SubMenu>
                    <MenuItem
                        icon={<FaRegFolderOpen />}>My Orchids</MenuItem>
                    <MenuItem
                        icon={<FaRocketchat />}>Forums</MenuItem>
                </Menu>
            </Sidebar>
        </ProSidebarProvider>
    )
}

export default Sidenav