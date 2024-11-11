import {RadioGroup, Radio} from "@nextui-org/radio";
import {ArrowDownTrayIcon} from "@heroicons/react/16/solid";
import {Button} from "@nextui-org/react";
export default function Download(){
    return (
        <div className="mt-10 ml-2">
            <h1 className="text-white text-3xl">Download</h1>
            <div className="mt-2">
                <RadioGroup orientation="horizontal" label="Select a quality">
                    <Radio value="360p">360p</Radio>
                    <Radio value="480p">480p</Radio>
                    <Radio value="720p">720p</Radio>
                    <Radio value="1080p">1080p</Radio>
                    <Radio value="1280p">1280p</Radio>
                </RadioGroup>
                <Button className="mt-3" color="success" endContent={<ArrowDownTrayIcon style={{height:24}} />}>
                    Download
                </Button>
            </div>
        </div>
    )
}