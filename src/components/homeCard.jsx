import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import picture from '/pic.jpg'
import {CardHeader, CardBody} from "@nextui-org/react";
import { Link } from "react-router-dom";
import trailers from '../data/trailers'


export default function HomeCard() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>

            <div style={{display: "flex", gap: 40, flexDirection: 'row', marginTop: 40, marginLeft: 50}}>

                <Card isFooterBlurred radius="lg" className="border-none relative" style={{height: "fit-content", width: "300px"}}>
                    <Image
                        alt="Venom 3"
                        className="object-cover"
                        src="https://i.pinimg.com/474x/d0/63/c0/d063c0be32a2267a7127b417d77b0554.jpg"
                        width={300}
                        height={300}/>
                    <CardFooter
                        className="absolute bottom-1 left-0 right-0 flex flex-col justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 rounded-large shadow-small z-10">
                        <h1 className="text-lg font-bold text-white">Venom 3</h1>
                        <div className="flex items-center gap-16 justify-between">
                            <p className="text-tiny text-white/80">Available soon</p>
                            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default"
                                    radius="lg" size="sm">
                                Notify me
                            </Button>
                        </div>
                    </CardFooter>
                </Card>


                <div style={{display: "flex", flexDirection: "column"}}>
                    <h1 style={{marginLeft: 180}} className="text-4xl text-amber-50 font-bold">New Premieres</h1>

                    <div style={{display: 'flex', flexDirection: 'row', gap: 20}}>
                        <Card
                            isFooterBlurred
                            radius="lg"
                            className="border-none"
                            style={{height: "fit-content", width: "300px", marginTop: 20}}>

                            <Image
                                alt="Woman listing to music"
                                className="object-cover"
                                src="https://i.pinimg.com/474x/02/8b/e0/028be07c833fdc28dee6d5b13fec5fa9.jpg"
                                width={300}
                                height={200}
                            />
                            <CardFooter
                                className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                <p className="text-tiny text-white/80">Avangers 3: Infinity war</p>
                                <Link to="newfilms">
                                <Button  className="text-tiny text-white bg-black/20" variant="flat" color="default"
                                        radius="lg" size="sm">
                                   Watch Now
                                </Button>
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card
                            isFooterBlurred
                            radius="lg"
                            className="border-none"
                            style={{height: "fit-content", width: "300px", marginTop: 20}}>

                            <Image
                                alt="Woman listing to music"
                                className="object-cover"
                                src="https://i.pinimg.com/474x/52/fd/06/52fd0618cbe230bea6816fcb4f0f0444.jpg"
                                width={300}
                                height={200}
                            />
                            <CardFooter
                                className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                <p className="text-tiny text-white/80">Joker</p>
                                <Link to="newfilms">
                                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default"
                                        radius="lg" size="sm">
                                    Watch Now
                                </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row', gap: 20}}>
                        <Card
                            isFooterBlurred
                            radius="lg"
                            className="border-none"
                            style={{height: "fit-content", width: "300px", marginTop: 20}}>

                            <Image
                                alt="Woman listing to music"
                                className="object-cover"
                                src="https://i.pinimg.com/474x/02/8b/e0/028be07c833fdc28dee6d5b13fec5fa9.jpg"
                                width={300}
                                height={200}
                            />
                            <CardFooter
                                className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                <p className="text-tiny text-white/80">Avangers 3: Infinity war</p>
                                <Link to="newfilms">
                                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default"
                                        radius="lg" size="sm">
                                    Watch Now
                                </Button>
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card
                            isFooterBlurred
                            radius="lg"
                            className="border-none"
                            style={{height: "200px", overflow: 'hidden', width: "300px", marginTop: 20}}>

                            <Image
                                className="object-cover "
                                layout='fill'
                                src={picture}
                                style={{objectFit: "cover", height: '100%', width: '100%'}}
                            />
                            <CardFooter
                                className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                <p className="text-tiny text-white/80">Love and Monsters</p>
                                <Link to="newfilms">
                                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default"
                                        radius="lg" size="sm">
                                    Watch Now
                                </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>


                </div>
            </div>


            <Card
                isFooterBlurred
                radius="lg"
                className="border-none relative"
                style={{height: "fit-content", width: "300px", marginTop: -160, marginLeft: 50}}
            >
                <Image
                    alt="Venom 3"
                    className="object-cover"
                    src="https://i.pinimg.com/474x/a8/98/ad/a898ad5434ec33bb4e0ded3e6966bb60.jpg"
                    width={300}
                    height={160}
                />
                <CardFooter
                    className="absolute bottom-1 left-0 right-0 flex flex-col justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-0 rounded-large shadow-small z-10">
                    <h1 className="text-lg font-bold text-white">The Forge</h1>
                    <div className="flex items-center gap-16 justify-between">
                        <p className="text-tiny text-white/80">Available soon</p>
                        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg"
                                size="sm">
                            Notify me
                        </Button>
                    </div>
                </CardFooter>
            </Card>


            <h1 className="text-default-400" style={{marginTop: 50, marginLeft: 50, fontSize: 40}}>New Trailers</h1>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: 10, gap: 20, marginLeft: 50}}>
                {trailers.slice(0,3).map((trailer)=> (
                <Link  to="/trailers">
                <Card
                    style={{width: 'fit-content', height: "fit-content", backgroundColor: "transparent"}}
                    className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">Trailers</p>
                        <h4 className="font-bold text-large">{trailer.name}</h4>
                        <small className="text-default-400">{trailer.premiereDate}</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={trailer.image}
                            width={300}
                            height={200}
                        />
                    </CardBody>
                </Card>
                </Link>
              ))}
            </div>


            {/*Cartoons*/}
            <h1 className="text-default-400" style={{marginLeft: 90, fontSize: 50, marginTop: 30}}>Cartoons</h1>
            <div style={{marginLeft: 50, marginTop: 10,gap: 30}}
                className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Cartoon</p>
                        <h4 className="text-white font-medium text-large">The Simpsons</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://i.pinimg.com/474x/50/de/b4/50deb490d0fdd0a704998eba07ce163c.jpg"
                    />
                </Card>
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Cartoon</p>
                        <h4 className="text-white font-medium text-large">Family Guy</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://i.pinimg.com/474x/f5/46/8e/f5468eaacb6027084fc423ac399a138d.jpg"
                    />
                </Card>
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Cartoon</p>
                        <h4 className="text-white font-medium text-large">Super Family</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://i.pinimg.com/474x/43/db/52/43db52d6a3e736269a4d61bf9b5ca012.jpg"
                    />
                </Card>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                        <h4 className="text-black font-medium text-2xl">Tom and Jerry</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="https://i.pinimg.com/474x/a6/bf/1b/a6bf1b72dad69a3af791edc6ed0a551e.jpg"
                    />
                    <CardFooter
                        className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black text-tiny">Available soon.</p>
                            <p className="text-black text-tiny">Get notified.</p>
                        </div>
                        <Button className="text-tiny" color="primary" radius="full" size="sm">
                            Notify Me
                        </Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Best</p>
                        <h4 className="text-white/90 font-medium text-xl">Rick and Morty</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover"
                        src="https://i.pinimg.com/474x/79/f2/49/79f2498f02fa3aa684c35cddd0332e2e.jpg"
                    />
                    <CardFooter
                        className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2 items-center">

                            <div className="flex flex-col">
                                <p className="text-tiny text-white/60">Available in our platform</p>
                            </div>
                        </div>
                     <Link to="films">   
                        <Button radius="full" size="sm">Watch</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>


        </div>
    );
}