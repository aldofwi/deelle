import React from 'react'
import * as AiIcons from 'react-icons/ai'


export const SidebarData = [
    {
        title: 'Accueil',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Photos',
        path: '/photos',
        icon: <AiIcons.AiOutlinePicture />,
        cName: 'nav-text'
    },
    {
        title: 'Playlist',
        path: '/playlist',
        icon: <AiIcons.AiOutlineYoutube />,
        cName: 'nav-text'
    },
    {
        title: 'Infos',
        path: '/about',
        icon: <AiIcons.AiOutlineInfoCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact', 
        icon: <AiIcons.AiOutlineContacts />,
        cName: 'nav-text'
    },
]