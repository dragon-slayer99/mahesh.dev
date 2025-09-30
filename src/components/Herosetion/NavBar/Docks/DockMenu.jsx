import { House, Mail, Rocket, User, Download } from 'lucide-react';
import Dock from './Docks';

import resume from '../../../../assets/MAHESH_GUDOORU.pdf'

// Define your dock items
const dockItems = [

    {
        icon: <House size={24} />,
        label: 'Home',
        link: '#'
    },
    {
        icon: <Rocket size={24} />,
        label: 'projects',
        link: '#projects'
    },
    {
        icon: <User size={24} />,
        label: 'About',
        link: '#about'
    },
    {
        icon: <Mail size={24} />,
        label: 'Contact',
        link: '#contact'
    },
    {
        icon: <Download size={24} />,
        label: 'Resume',
        link: resume
    },
];

function DockMenu() {
    return (
        <>
            <Dock
                items={dockItems}
                position="bottom"
                magnification={70}
                baseItemSize={50}
            />
        </>
    )
}
export default DockMenu
