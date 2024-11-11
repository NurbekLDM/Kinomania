import { Outlet, useNavigate } from "react-router-dom";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import Filter from "../components/filter.jsx";
import { useFavorites } from "../context/favouritesContext.jsx";
import films from "../data/filmsdata.jsx";
import { useState, useEffect, useMemo } from "react";

export default function Films() {
    const [isSortedDescending, setIsSortedDescending] = useState(true);
    const [selectedGenres, setSelectedGenres] = useState(new Set());
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredMovies, setFilteredMovies] = useState([]); 

    const { favorites, addToFavorites } = useFavorites();
    const navigate = useNavigate();

    const handleGenreChange = (genres) => {
        setSelectedGenres(genres);
    };

    const handleRatingSort = () => {
        const newSortOrder = !isSortedDescending;
        setIsSortedDescending(newSortOrder);

        const sorted = [...filteredMovies].sort((a, b) => {
            if (newSortOrder) {
                return b.rating - a.rating; 
            } else {
                return a.rating - b.rating; 
            }
        });

        setFilteredMovies(sorted);
    };

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
    };

    useEffect(() => {
        const filtered = films.filter(movie => {
            const genreMatch = selectedGenres.size === 0 || [...selectedGenres].some(genre => movie.genre.includes(genre));
            const countryMatch = !selectedCountry || movie.countries.includes(selectedCountry);
            return genreMatch && countryMatch;
        });
        setFilteredMovies(filtered);
    }, [selectedGenres, selectedCountry]);
    
    const randomFilms = useMemo(() => {
        const shuffled = [...films].sort(() => 0.5 - Math.random());
        return shuffled;
    }, []);

    const handleCardClick = (title) => {
        navigate(`/filmInfo/${title}`);
    };

    const handleClick = (film) => {
        addToFavorites(film);
    };

    return (
        <div>
            <Filter
                onGenreChange={handleGenreChange}
                onCountryChange={handleCountryChange}
                onRatingSort={handleRatingSort}
            />
            <div className="mt-3 flex flex-row flex-wrap gap-2">
                {filteredMovies.length > 0 ? ( 
                    randomFilms.map((film, index) => (
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
                    <p className="text-white">No films match the selected filters.</p>
                )}
            </div>
            <Outlet />
        </div>
    );
}
