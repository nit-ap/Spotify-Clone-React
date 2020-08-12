import React from 'react'
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from "./DataLayer";
function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
        <img className="sidebar-logo" src="https://seeklogo.com/images/S/spotify-logo-8726BE1D50-seeklogo.com.png" alt=""/>
        <SidebarOption Icon={HomeIcon} title="Home"/>
        <SidebarOption Icon={SearchIcon} title="Search"/>
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
        <br/>
        <strong className="sidebar_title">PLAYLISTS</strong>
        <hr/>
        {playlists?.items?.map((playlist) => (
            <SidebarOption title={playlist.name}/>
        ))}
    </div>);
}

export default Sidebar
