import { useEffect, useState } from "react"
import { TAnimeCardInList } from "./TAnimeCardInList"
import styles from '../anime-list/AnimeList.module.scss';
import AnimeItem from "../anime-item/AnimeItem";
import { AnimeCatalog } from "../../api/AnimeCatalog";
import Pagination from "../pagination/Pagination";
import SearchBar from "../search-bar/SearchBar";
import SortOption from "../sort-option/SortOption";


export default function AnimeList(){
  const [animeList, setAnimeList] = useState<TAnimeCardInList[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchResults, setSearchResults] = useState<TAnimeCardInList[] | null>(null)
  const [sortType, setSortType] = useState<string>("popularity")
  const itemsPerPage = 3

  const fetchAnimeList = async () => {
    const data = await AnimeCatalog()
    setAnimeList(data)
  }

  useEffect(() => {
    setCurrentPage(1)
    fetchAnimeList()
  }, [])

  const handleSearchResults = (results: TAnimeCardInList[] | null) => {
    setSearchResults(results)
  }

  const handleClearSearch = () => {
    setSearchResults(null)
  }

  const sortAnimeList = (animeList: TAnimeCardInList[]) => {
    switch (sortType){
      case "popularity":
        return [...animeList].sort((a,b) => a.popularity - b.popularity)
      case "score":
        return [...animeList].sort((a,b) => a.score - b.score)
      case "scored_by":
        return [...animeList].sort((a,b) => a.scored_by - b.scored_by)
      case "favorites":
        return [...animeList].sort((a,b) => a.favorites - b.favorites)
      case "episodes":
        return [...animeList].sort((a,b) => a.episodes - b.episodes)
      case "start_date":
        return [...animeList].sort((a,b) => new Date(a.aired.from).getTime() - new Date(b.aired.from).getTime())
      case "end_date":
        return [...animeList].sort((a,b) => new Date(a.aired.to).getTime() - new Date(b.aired.to).getTime())
      default:
        return animeList
    }
  }

  const sortedAnimeList = sortAnimeList(animeList)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentAnimeList = sortedAnimeList.slice(startIndex, endIndex)

  return (
    <div className={styles.animeListPage}>
      <SearchBar onSearchAnime={handleSearchResults} onClearSearch={handleClearSearch}/>
      <SortOption sortType={sortType} setSortType={setSortType} />
      <div className={styles.animeListPage__list}>
      {(searchResults || currentAnimeList).map((anime) => 
        <AnimeItem key={anime.mal_id} anime={anime} />
      )}
      </div>
      <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={(searchResults || animeList).length} onPageChange={(page) => setCurrentPage(page)}/>
    </div>
  )
}