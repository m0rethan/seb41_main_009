import styled from 'styled-components';
import { HeadingMedium, ParagraphSmall } from '../../styles/typo';
import Category from '../atoms/Category';

/**
 * 포스트 헤더 molecule
 * @param {string} title - 포스트 타이틀
 * @param {string} description - 포스트의 설명
 * @param {string} [categoryName] - 카테고리 이름
 * @returns {JSX.Element} - 내부 태그들을 포함한 컴포넌트
 */
const PostTitle = ({ title, description, categoryName }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        {categoryName ? (
          <CategoryContainer>
            <Category padding="10px 30px">{categoryName}</Category>
          </CategoryContainer>
        ) : null}
      </TitleContainer>
      <Desc>{description}</Desc>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 13px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 44px;
`;

const CategoryContainer = styled.div`
  width: auto;
  white-space: nowrap;
  max-height: 44px;
`;

const Title = styled.div`
  ${HeadingMedium};
  font-weight: 700;
`;

const Desc = styled.div`
  ${ParagraphSmall};
  margin-top: 10px;
`;

export default PostTitle;
