import { AppBar, Toolbar } from "@mui/material";
import Logo from "../../atoms/logo/Logo";
const Header = () => {
  return (
    <AppBar color="secondary" position="static" sx={{ padding: " 0" }}>
      <Toolbar>
        <Logo />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
