import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'
import { HOME_PAGE } from '~constants/navigation'
import { Logo } from '~components'
import { scrollToFooter, scrollToId } from '~utils/utils'

export class Navigation extends PureComponent {
    state = { isOpen: false }

    toggle = () => this.setState({ isOpen: !this.state.isOpen })

    render() {
        return (
            <Navbar light expand="md" sticky="top">
                <Container>
                    <NavbarBrand href="/">
                        <Logo />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to={HOME_PAGE} className="nav-link">
                                    Home
                                </Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Services
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Web Development</DropdownItem>
                                    <DropdownItem>Design and Photography</DropdownItem>
                                    <DropdownItem>SEO and Marketing</DropdownItem>
                                    <DropdownItem>Trainings and Courses</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>See All</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <a className="nav-link" href="#" onClick={scrollToId}>
                                    Products
                                </a>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link" href="#" onClick={scrollToId}>
                                    Portfolio
                                </a>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link" href="#" onClick={scrollToId}>
                                    Blog
                                </a>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link" href="#" onClick={scrollToFooter}>
                                    Say hello!
                                </a>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}
