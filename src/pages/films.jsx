import { Outlet, useNavigate } from "react-router-dom";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useSearch } from "../context/searchContext.jsx";
import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import films from "../data/filmsdata.jsx";
import { useEffect, useState } from "react";
import { useFavorites } from "../context/favouritesContext.jsx";

export default function Films() {
    const { searchQuery } = useSearch();
    const [filteredMovies, setFilteredMovies] = useState([]);

    const navigate = useNavigate();
    const { favorites, addToFavorites } = useFavorites();

    const handleClick = (film) => {
        addToFavorites(film);
    };

    useEffect(() => {
        const filtered = films.filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredMovies(filtered);
    }, [searchQuery]);

    const handleCardClick = (title) => {
        navigate(`/filmInfo/${title}`);
    };

    return (
        <div>
            <div className="mt-3 flex flex-row flex-wrap gap-2">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((film, index) => (
                        <Card
                            style={{ width: 240, height: 400, backgroundColor: '#373636' }}
                            shadow="sm"
                            key={index}
                            isPressable
                        >
                            <CardBody
                                className="overflow-visible p-0"
                                onClick={() => handleCardClick(film.title)}
                            >
                                <Image
                                    style={{ border: 'none', borderRadius: 'none' }}
                                    width={240}
                                    height={300}
                                    alt={film.title}
                                    className="w-full object-cover"
                                    src={film.img}
                                />
                            </CardBody>

                            <CardFooter>
                                <div className="bg-transparent text-small">
                                    <p>
                                        <b className="text-white">{film.title}</b>
                                        <p className="text-default-400 text-small">{film.genre}</p>
                                    </p>
                                    <div className="flex items-center mt-2">
                                        <p style={{ color: 'yellow' }} className="flex items-center text-small">
                                            <StarIcon style={{ height: 16 }} /> {film.grade}
                                        </p>
                                        <p className="ml-2 text-default-400">{film.year}</p>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleClick(film);
                                            }}
                                            style={{ marginLeft: 120 }}
                                        >
                                            {favorites.some(fav => fav.title === film.title) ? (
                                                <HeartIconSolid style={{ height: 24, color: 'red' }} />
                                            ) : (
                                                <HeartIconOutline style={{ height: 24, color: 'gray' }} />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <p className="text-white">No films match your search.</p>
                )}
            </div>
            <Outlet />
        </div>
    );
}
