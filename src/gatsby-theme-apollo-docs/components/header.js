import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import {HEADER_HEIGHT} from '../utils';
import {breakpoints} from 'gatsby-theme-apollo-core';
import GithubSVG from '../../assets/github.svg';

const Wrapper = styled.header({
  position: 'sticky',
  top: 0,
  left: 0,
  zIndex: 1
});

const InnerWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: HEADER_HEIGHT,
  padding: '0 56px',
  backgroundColor: 'white',
  [breakpoints.md]: {
    padding: '0 24px'
  }
});

const GithubIcon = styled.img({
    float: 'right',
    width: '30px',
    margin: 0
})

export default function Header(props) {
  return (
    <Wrapper>
      {props.beforeContent}
      <InnerWrapper>
        <a href="https://github.com/cryptogogos/cryptogogos-wiki" target="_blank" rel="noopener">
        <GithubIcon src={GithubSVG}/>
        </a>
      </InnerWrapper>
    </Wrapper>
  );
}

Header.propTypes = {
  beforeContent: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};