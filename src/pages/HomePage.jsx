import MenuBar from '../components/menu';
import Search from '../components/search';
// import Filter from '../components/filter'
import '../index.css';
import HomeCard from '../components/homeCard';
import ProfileBadge from "../components/profileBadge";
import {useLocation , Outlet} from "react-router-dom";
import {useSearch} from "../context/searchContext.jsx";

export default function HomePage() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const { searchQuery, setSearchQuery } = useSearch();

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };


    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <MenuBar />
            <div style={{ display: 'flex', flexDirection: 'column', flex: 2 }}>

               <div style={{backgroundColor: '#403f3e', padding: 20, display: 'flex', flexDirection: 'row'}}>
                <Search
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                   <ProfileBadge />
               </div>

                <div style={{ overflowY: 'scroll', height: 'calc(100vh - 60px)', padding: '10px' }}>
                    {isHome && <HomeCard />}
                <Outlet />
                </div>
            </div>

        </div>
    );
}
