import { useParams } from 'react-router-dom';
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import serials from "../data/serials.jsx";
import { PlayIcon, StarIcon } from "@heroicons/react/24/solid";
import Actors from "../components/actors.jsx";
import Download from "../components/download.jsx";
import Recomended from "../components/recomended.jsx";

export default function SerialsInformation() {
    const { title } = useParams();
    const serial = serials.find((s) => s.title.toLowerCase() === title.toLowerCase());

    if (!serial) return <p>Film not found</p>;

    return (
        <div>
            <Card
                style={{ width: '100%', height: 350 }}
                isFooterBlurred
                radius="lg"
                className="border-none"
            >
                <Image
                    alt={serial.title}  
                    height={400}
                    src={serial.avatar}  
                    width={1000}
                />
                <CardFooter
                    className="justify-around before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <div className="flex flex-row items-center gap-1">
                        <StarIcon style={{ height: 20, color: 'yellow' }} />
                        <p className="text-default-400"> {serial.grade}</p>
                    </div>
                    <p className="text-default-300">{serial.genre}</p>
                    <p className="text-default-300">{serial.title}</p>
                    <Button color="primary" radius="none" variant="shadow">
                        <PlayIcon style={{ color: 'white', height: 24 }} />
                        Watch
                    </Button>
                </CardFooter>
            </Card>

            <div className="flex flex-row items-center">
                <Image
                    style={{ marginTop: 30, marginLeft: 60 }}
                    src={serial.img}
                    radius="none"
                    height={340}
                    width={240}
                />

                <div className="text-3xl mt-6 flex flex-col ml-28 gap-1">
                    <h1 className="text-3xl text-white">{serial.title}</h1>
                    <p className="text-default-400 text-small my-4">{serial.description}</p>
                    <p className="text-white text-small"><b className="text-default-400">Rating:</b> {serial.grade}</p>
                    <p className="text-white text-small"><b className="text-default-400">Budget:</b> {serial.budget}</p>
                    <p className="text-white text-small"><b className="text-default-400">Gross:</b> {serial.gross}</p>
                    <p className="text-white text-small"><b className="text-default-400">Country:</b> {serial.countries}</p>
                    <p className="text-white text-small"><b className="text-default-400">Genre:</b> {serial.genre}</p>
                    <p className="text-white text-small"><b className="text-default-400">Directors:</b> {serial.director}</p>
                    <p className="text-white text-small"><b className="text-default-400">Writers:</b> {serial.writers}</p>
                    <p className="text-white text-small"><b className="text-default-400">Release date:</b> {serial.releaseDate}</p>
                </div>
            </div>

            <Actors />
            <Download />
            <Recomended />
        </div>
    );
}
