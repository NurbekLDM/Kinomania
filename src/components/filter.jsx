
import React from 'react';
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const genres = [
    { key: 'horror', label: 'Horror' },
    { key: 'fiction', label: 'Fiction' },
    { key: 'war', label: 'War' },
    { key: 'fantasy', label: 'Fantasy' },
    { key: 'romance', label: 'Romance' },
    { key: 'sci-fi', label: 'Sci-fi' },
    { key: 'action', label: 'Action' },
    { key: 'drama', label: 'Drama' },
    { key: 'shorter', label: 'Shorter' },
    { key: 'documentary', label: 'Documentary' },
    { key: 'history', label: 'History' },
    { key: 'sports', label: 'Sports' },
    { key: 'science', label: 'Science' },
    { key: 'adventure', label: 'Adventure' },
    { key: 'anime', label: 'Anime' },
    { key: 'kids', label: 'Kids' },
    { key: 'biography', label: 'Biography' },
    { key: 'thriller', label: 'Thriller' },
    { key: 'musical', label: 'Musical' },
    { key: 'comedy', label: 'Comedy' },
    { key: 'animation', label: 'Animation' },
    { key: 'crime', label: 'Crime' },
    { key: 'retro', label: 'Retro' },
    { key: 'family', label: 'Family' },
];

export default function Filter({ onGenreChange, onCountryChange, onRatingSort }) {
    const [selectedGenres, setSelectedGenres] = React.useState(new Set());
    const [selectedCountry, setSelectedCountry] = React.useState(null);

    const handleGenreSelectionChange = (selectedKeys) => {
        if (selectedKeys.size <= 2) {
            setSelectedGenres(selectedKeys);
            onGenreChange(selectedKeys);
        } else {
            alert("You can only select up to 2 genres.");
        }
    };

    const handleCountrySelectionChange = (selectedKey) => {
        setSelectedCountry(selectedKey);
        onCountryChange(selectedKey);
    };

    return (
        <div className="flex flex-row gap-4 mb-4">

            <Select
                items={genres}
                selectionMode="multiple"
                selectedKeys={selectedGenres}
                onSelectionChange={handleGenreSelectionChange}
                placeholder="Sort by genre"
                style={{ width: 180, backgroundColor: "#373636", color: "white" }}
            >
                {(genre) => (
                    <SelectItem key={genre.key} style={{ width: '100%' }}>
                        {genre.label}
                    </SelectItem>
                )}
            </Select>

            <Button
                color="primary"
                variant="bordered"
                className="flex-shrink-0"
                style={{ width: 120 }}
                onClick={onRatingSort}
            >
                Rating
            </Button>

            <Select
                selectedKey={selectedCountry}
                onSelectionChange={handleCountrySelectionChange}
                style={{ width: 180, backgroundColor: "#373636", color: "white" }}
                placeholder="Sort by country"
            >
                <SelectItem key="argentina" startContent={<Avatar alt="Argentina" src="https://flagcdn.com/ar.svg" className="w-6 h-6" />}>Argentina</SelectItem>
                <SelectItem key="venezuela" startContent={<Avatar alt="Venezuela" src="https://flagcdn.com/ve.svg" className="w-6 h-6" />}>Venezuela</SelectItem>
                <SelectItem key="brazil" startContent={<Avatar alt="Brazil" src="https://flagcdn.com/br.svg" className="w-6 h-6" />}>Brazil</SelectItem>
            </Select>
        </div>
    );
}
