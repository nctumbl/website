import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'
import TiGroup from 'react-icons/lib/ti/group'
import TiBook from 'react-icons/lib/ti/book'
import TiChartPie from 'react-icons/lib/ti/chart-pie'
import TiPuzzle from 'react-icons/lib/ti/puzzle'
import TiDownload from 'react-icons/lib/ti/download'
import TiPhto from 'react-icons/lib/ti/social-instagram'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { compose } from 'recompose'

const NavBrand = styled(Link)`
  font-family: Arvo;
`

const NavLink = (props) => (
  <Link {...props} className="nav-link">{ props.children }</Link>
)

class Navigator extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="deepinfo" dark expand="md">
        <NavBrand to="/" className="navbar-brand">MBL</NavBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/members/"><TiGroup/> Members</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/courses"><TiBook/> Courses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/research/"><TiChartPie/> Research</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/projects/"><TiPuzzle/> Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/resources/"><TiDownload/> Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/album/"><TiPhto/> Album</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigator