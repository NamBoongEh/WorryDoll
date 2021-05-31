import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import svg4 from '../../img/svg4.svg';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const Img = styled.img`
  width: 50%;
  height: 50%;
  display: block;
  margin: 0 auto 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding: 3rem 0;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.indigo[2]};
  }

  h2 {
    font-size: 2rem;
    margin: 0;
    &:hover {
      color: ${palette.indigo[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PostItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;

  return (
    <PostItemBlock>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} />
      <p>{body}</p>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  //에러 발생 시
  if (error) {
    return (
      <PostListBlock style={{ textAlign: 'center', fontSize: '24px' }}>
        <Img src={svg4} />
        앗! 요청한 페이지가 없어요
        <Link to='/main'>
          <Button style={{ width: '20%', margin: '2rem auto' }}>홈으로</Button>
        </Link>
      </PostListBlock>
    );
  }

  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
          걱정 쓰러가기
          </Button>
        )}
      </WritePostButtonWrapper>

      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
