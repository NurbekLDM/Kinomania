import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        try {
            const savedFavorites = localStorage.getItem("favorites");
            return savedFavorites ? JSON.parse(savedFavorites) : [];
        } catch (error) {
            console.error("Error parsing favorites from localStorage:", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem("favorites", JSON.stringify(favorites));
        } catch (error) {
            console.error("Error saving favorites to localStorage:", error);
        }
    }, [favorites]);

    const addToFavorites = (item) => {
        if (!favorites.some(fav => fav.title === item.title)) {
            setFavorites((prevFavorites) => [...prevFavorites, item]);
        }
    };

    const removeFromFavorites = (title) => {
        setFavorites(favorites.filter(fav => fav.title !== title));
    };

    const clearFavorites = () => {
        setFavorites([]);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, clearFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export function useFavorites() {
    return useContext(FavoritesContext);
}
