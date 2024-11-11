import {  Listbox, ListboxItem} from "@nextui-org/listbox";
import { FilmIcon, PlayIcon, HeartIcon, EyeIcon, ArrowDownTrayIcon, VideoCameraIcon, TvIcon } from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";
import '../index.css'


const ListboxWrapper = ({children}) => (
    <div style={{margin: "0", padding: "0", border: "none"}} className="w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
      {children}
    </div>
  );
export default function MenuBar() {

  

  return (
      <ListboxWrapper
      className = "sm:w-2/12"
      >
          <Listbox
              style={{
                  cursor: "pointer",
                  height: '100vh',
                  backgroundColor: "#373636",
                  color: 'white',

              }}
              aria-label="Actions"
          >
              <ListboxItem  style={{
                  paddingLeft: "20px",paddingTop: "10px", height: 'fit-content', cursor: 'default',
                  background: 'transparent',
                  pointerEvents: 'none',transition: 'none',
                  '&:hover': {
                      background: 'transparent',
                      color: 'inherit'}}}
                            key="brand">
                   <h1 style={{fontSize: "40px"}}><Link to="/" >KinoMania</Link></h1>
              </ListboxItem>
              <ListboxItem as={Link} to="newfilms" startContent={<FilmIcon className="w-5 h-5 text-gray-500" />} style={{ marginTop: "40px" }} className="hover:bg-gray-200" key="new_films">
                  New films
              </ListboxItem>
              <ListboxItem as={Link} to="films" startContent={<VideoCameraIcon className="w-5 h-5 text-gray-500" />} className="hover:bg-gray-200" key="films">Films</ListboxItem>
              <ListboxItem as={Link} to="serials" startContent={<TvIcon className="w-5 h-5 text-gray-500" />} className="hover:bg-gray-200" key="serials">Serials</ListboxItem>
              <ListboxItem as={Link} to="trailers" startContent={<PlayIcon className="w-5 h-5 text-gray-500" />} className="hover:bg-gray-200" key="Trailers">Trailers</ListboxItem>
              <ListboxItem as={Link} to="favourites" startContent={<HeartIcon className="w-5 h-5 text-gray-500" />} className="hover:bg-gray-200" key="delee">Favorites</ListboxItem>
              <ListboxItem as={Link} to="watched" startContent={<EyeIcon className="w-5 h-5 text-gray-500" />} className="hover:bg-gray-200" key="watched">Watched</ListboxItem>
              <ListboxItem startContent={<ArrowDownTrayIcon className="w-5 h-5 text-gray-500" />} className="hover:bg-gray-200" key="downloads">Downloads</ListboxItem>
          </Listbox>
      </ListboxWrapper>
  );
}