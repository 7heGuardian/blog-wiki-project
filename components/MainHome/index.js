import ListArticlesHome from "components/ListArticlesHome";
import { MainHomeStyled, TagSectionStyled, MainLayoutStyled, TagStyled } from "./styled";

export default function MainHome() {
  return (
    <MainHomeStyled>
      <MainLayoutStyled>
        <ListArticlesHome />

        <TagSectionStyled>
          <h4>Etiquetas</h4>

          <ul style={{ marginTop: '20px', position: 'relative' }}>
            <TagStyled>Tecnologia</TagStyled>
          </ul>
        </TagSectionStyled>
      </MainLayoutStyled>
    </MainHomeStyled>
  )
}