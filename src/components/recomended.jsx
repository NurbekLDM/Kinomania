import {useNavigate} from "react-router-dom";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import films from "../data/filmsdata.jsx";
export default function Recomended() {
    const navigate = useNavigate();
    const handleCardClick = (title) => {
        navigate(`/filmInfo/${title}`);
    };


    return (
        <div className="mb-14 mx-10">
            <h1 className="text-3xl mt-10 text-center font-medium">Recomended for you</h1>
        <div className="gap-2 mt-10 grid grid-cols-2 sm:grid-cols-5">
            { films.slice(0,5).map((film, index) => (
                <Card className="bg-transparent" shadow="sm" key={index}>
                    <CardBody className="overflow-visible p-0"
                              onClick={() => handleCardClick(film.title)}
                    >
                        <Image
                            shadow="sm"
                            radius="none"
                            width="100%"
                            alt={film.title}
                            className="w-full object-cover h-[140px]"
                            src={film.img}
                        />
                    </CardBody>
                    <CardFooter className="text-small">
                        <b>{film.title}</b>
                    </CardFooter>
                </Card>
            ))}
        </div>
        </div>
    )
}