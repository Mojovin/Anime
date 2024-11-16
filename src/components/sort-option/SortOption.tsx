import TSortOption from "./TSortOption";
import styles from "./sortOption.module.scss"

const SortOption = ({sortType, setSortType}: TSortOption) => {

  return (
    <div className={styles.sort}>
        <label className={styles.sort__label}>Сортировка от меньшего к большему: </label>
        <select className={styles.sort__select} id="sort" onChange={(e) => setSortType(e.target.value)} value={sortType}>
            <option value="popularity">Популярность</option> 
            <option value="score">Оценка</option>
            <option value="scored_by">Количество оценок</option> 
            <option value="favorites">Количество избранных</option>
            <option value="episodes">Количество эпизодов</option> 
            <option value="start_date">Дата начала</option> 
            <option value="end_date">Дата окончания</option>   
        </select>
    </div>
  )
}

export default SortOption;