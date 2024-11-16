import { TAnimeCardInList } from "../anime-list/TAnimeCardInList";

export default interface TSearchBar {
    onSearchAnime?: (results: TAnimeCardInList[] | null) => void,
    onClearSearch?: () => void;
}