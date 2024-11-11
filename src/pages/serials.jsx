import { Outlet, useNavigate } from "react-router-dom";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import Filter from "../components/filter.jsx";
import { useFavorites } from "../context/favouritesContext.jsx";
import serials from "../data/serials.jsx";

export default function SerialsPage() {
    const { favorites, addToFavorites } = useFavorites();
    const navigate = useNavigate();

    const handleCardClick = (title, e) => {
        e.preventDefault();
        navigate(`/serialInfo/${title}`);
    };

    const handleClick = (serial) => {
        addToFavorites(serial);
    };

    return (
        <div>
            <Filter />
            <div className="mt-3 flex flex-row flex-wrap gap-2">
                {serials.map((serial, index) => (
                    <Card
                        style={{ width: 240, height: 400, backgroundColor: '#373636' }}
                        shadow="sm"
                        key={index}
                        isPressable
                        onClick={(e) => handleCardClick(serial.title,e)}
                    >
                        <CardBody
                            className="overflow-visible p-0"
                            onClick={() => handleCardClick(serial.title)}
                        >
                            <Image
                                style={{ border: 'none', borderRadius: 'none' }}
                                width={240}
                                height={300}
                                alt={serial.title}
                                className="w-full object-cover"
                            
                            />
                        </CardBody>

                        <CardFooter>
                            <div className="bg-transparent text-small">
                                <p>
                                    <b className="text-white">{serial.title}</b>
                                    <p className="text-default-400 text-small">{serial.genre}</p>
                                </p>
                                <div className="flex items-center mt-2">
                                    <p style={{ color: 'yellow' }} className="flex items-center text-small">
                                        <StarIcon style={{ height: 16 }} /> {serial.grade}
                                    </p>
                                    <p className="ml-2 text-default-400">{serial.year}</p>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleClick(serial);
                                        }}
                                        style={{ marginLeft: 120 }}
                                    >
                                        {favorites.some(fav => fav.title === serial.title) ? (
                                            <HeartIconSolid style={{ height: 24, color: 'red' }} />
                                        ) : (
                                            <HeartIconOutline style={{ height: 24, color: 'gray' }} />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <Outlet />
        </div>
    );
}
