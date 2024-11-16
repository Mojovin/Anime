import styles from './AnimeItem.module.scss';
import { TAnimeItem } from './TAnimeItem';

const AnimeItem = ({anime}: TAnimeItem) => {

  return (
    <div className={styles.animeItem}>
      <img className={styles.animeItem__image} src={anime.images.jpg.large_image_url} alt={anime.title} />
        <div className={styles.animeItem__description}>
          <h2 className={styles.animeItem__description__title}>{anime.title}</h2>
          <div className={styles.animeItem__description__stats}>
            <p>Оценка: {anime.score}</p>
            <p>Количество оценок: {anime.scored_by}</p>
            <p>Рейтинг: {anime.rating}</p>
          </div>
        </div>
    </div>
  );
};

export default AnimeItem;