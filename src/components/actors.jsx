import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function Actors() {
    const list = [
        {
            title: "Actor name",
            img: "/images/fruit-1.jpeg",
        },
        {
            title: "Actor name",
            img: "/images/fruit-2.jpeg",

        },
        {
            title: "Actor name",
            img: "/images/fruit-3.jpeg",

        },
        {
            title: "Actor name",
            img: "/images/fruit-4.jpeg",

        },
        {
            title: "Actor name",
            img: "/images/fruit-5.jpeg",

        },
        {
            title: "Actor name",
            img: "/images/fruit-6.jpeg",

        },

    ];

    return (
        <div className="mx-14" >
            <h1 className="text-4xl text-white mt-10 text-center">Actors</h1>
        <div className="gap-2 grid grid-cols-2 mt-6 sm:grid-cols-6">
            {list.map((item, index) => (
                <Card shadow="sm" key={index} >
                    <CardBody className="overflow-visible p-0">
                        <Image
                            shadow="sm"
                            radius="none"
                            width="100%"
                            alt={item.title}
                            className="w-full object-cover h-[140px]"
                            src={item.img}
                        />
                    </CardBody>
                    <CardFooter className="text-small justify-center">
                        <b>{item.title}</b>

                    </CardFooter>
                </Card>
            ))}
        </div>
        </div>
            );
}