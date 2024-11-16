import { THeaderStyle } from "../components/header/THeaderStyles";
import AnimeList from "../components/anime-list/AnimeList";
import Header from "../components/header/Header";


export default function MainAnimePage() {
  const headerProps: THeaderStyle = { style: ["title"] }
  function headerRenderProps(): React.ReactNode {
    return (
      <h1>
        Anime
      </h1>
    )
  }

    return (
      <>
        <Header render={() => headerRenderProps()} headerProps={headerProps} />
        <AnimeList  />
      </>
    )
}