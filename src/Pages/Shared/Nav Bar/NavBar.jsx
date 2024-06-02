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
import logo from "../../../assets/banner/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Navbar fluid rounded>
        <NavbarBrand>
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Fitness Flow Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Fitness Flow
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
            {user ? (
              <>
                <DropdownItem>Dashboard</DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={handleLogOut}>Log Out</DropdownItem>
              </>
            ) : (
              <>
                <NavbarLink href="/login">
                  <DropdownItem>Login</DropdownItem>
                </NavbarLink>
              </>
            )}
          </Dropdown>
          <NavbarToggle />
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
