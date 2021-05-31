import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import svg4 from '../../img/svg4.svg';
import { Button } from '../common/ButtonElement';
import { Link } from 'react-router-dom';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const Img = styled.img`
  width: 50%;
  height: 50%;
  display: block;
  margin: 0 auto 3rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.indigo[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.indigo[8]};
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {
  //에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>404 Not Found</PostViewerBlock>;
    }
    return (
      <PostViewerBlock style={{ textAlign: 'center', fontSize: '24px' }}>
        <Img src={svg4} />
        앗! 요청한 페이지가 없어요
        <Link to='/main'>
          <Button style={{ width: '20%', margin: '2rem auto' }}>홈으로</Button>
        </Link>
      </PostViewerBlock>
    );
  }

  // 로딩 중이거나 아직 포스트 데이터가 없을 때
  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = post;

  return (
    <PostViewerBlock>
      <Helmet>
        <title>{title} - WorryDoll</title>
      </Helmet>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo
          username={user.username}
          publishedDate={publishedDate}
          hasMarginTop
        />
        <Tags tags={tags} />
      </PostHead>
      {actionButtons}
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
};

export default PostViewer;
