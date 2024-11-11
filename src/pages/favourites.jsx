import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { useFavorites } from "../context/favouritesContext.jsx";
import { StarIcon } from "@heroicons/react/24/solid/index.js";
import { useNavigate } from "react-router-dom";

export default function FavoritesPage() {
    const { favorites, clearFavorites } = useFavorites();
    const navigate = useNavigate();

    const handleCardClick = (title) => {
        navigate(`/filmInfo/${title}`);
    };

    return (
        <div className="mt-3 flex flex-col">
            
            <div className="w-full flex justify-end pr-5">
                {favorites && favorites.length > 0 && (
                    <Button
                        auto
                        flat
                        color="error"
                        onClick={clearFavorites}
                        className="mb-4"
                    >
                        Remove All
                    </Button>
                )}
            </div>

            <div className="flex flex-row flex-wrap gap-2 justify-start">
                {favorites && favorites.length > 0 ? (
                    favorites.map((film, index) => (
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
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <h1 className="ml-32 text-white text-lg">Your favourite videos</h1>
                )}
            </div>
        </div>
    );
}
