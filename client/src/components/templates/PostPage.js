import styled from 'styled-components';
import PostHeaderContainer from '../organisms/posts/PostHeaderContainer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1056px;
  margin: 0 auto;
  padding-top: 100px;
  justify-content: center;
  align-items: center;
`;

const PostPage = () => {
  return (
    <Container>
      <PostHeaderContainer />
      <div>asdfasdf</div>
    </Container>
  );
};

export default PostPage;
