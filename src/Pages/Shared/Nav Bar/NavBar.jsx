import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const NavBar = () => {
  return (
    <div>
      <Navbar fluid rounded>
        <NavbarBrand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </NavbarBrand>
        <NavbarCollapse>
          <NavbarLink href="/" active>
            Home
          </NavbarLink>
          <NavbarLink href="/allClassesPage">All Classes Page</NavbarLink>
          <NavbarLink href="/allTrainerPage">All Trainer Page</NavbarLink>
          <NavbarLink href="/forumsPage">Forums Page</NavbarLink>
        </NavbarCollapse>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <NavbarLink href="/login">
              <DropdownItem>Login</DropdownItem>
            </NavbarLink>
          </Dropdown>
          <NavbarToggle />
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
