import styled from 'styled-components';

const VideoCardWrapper = styled.div`
  background-color: var(--black);
  padding-bottom: 16px;

  & > section {
    margin-bottom: 16px;
  }

  & > section + section {
    margin-bottom: 0;
  }
`;

export default VideoCardWrapper;
