import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" isOpen={isOpen} onClick={toggle}>
            익명성
          </SidebarLink>
          <SidebarLink to="discover" isOpen={isOpen} onClick={toggle}>
            접근성
          </SidebarLink>
          <SidebarLink to="signup" isOpen={isOpen} onClick={toggle}>
            회원가입
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href="/login" isOpen={isOpen} onClick={toggle}>
            Sign In
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
