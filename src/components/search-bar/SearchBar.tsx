import axios from "axios";
import { useState } from "react";
import { TAnimeCardInList } from "../anime-list/TAnimeCardInList";
import TSearchBar from "./TSearchBar";
import styles from "./searchBar.module.scss"

export default function SearchBar({onSearchAnime, onClearSearch}: TSearchBar){
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${searchQuery}`);
    const filteredAnime = response.data.data.filter((anime: TAnimeCardInList) => 
        anime.title.toLowerCase() === searchQuery.toLowerCase()
    );
    
    if (onSearchAnime) { // Проверяем, определена ли функция
        onSearchAnime(filteredAnime.length > 0 ? filteredAnime : null);
    }
} catch (error) {
    console.error('Error fetching search results:', error);
    if (onSearchAnime) {
        onSearchAnime(null);
    }
}

    }

    return(
        <form className={styles.formSearch} onSubmit={handleSearch}>
            <input 
                className={styles.formSearch__input}
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Введите полное название аниме"
            />
            <button className={styles.formSearch__button} type="submit">Поиск</button>
            <button className={styles.formSearch__button} type="button" onClick={onClearSearch}>Назад ко всем аниме</button>
        </form>
    )
}