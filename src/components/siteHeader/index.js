import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomeIcon from "@mui/icons-material/Home"
import FavoriteIcon from "@mui/icons-material/Favorite";
import WatchListIcon from "@mui/icons-material/PlaylistAdd";
import NowPlaying from "@mui/icons-material/Videocam";
import TopRated from "@mui/icons-material/LocalFireDepartment"
import Upcoming from "@mui/icons-material/Update"
import Actor from "@mui/icons-material/Person"
import { auth } from "../firebaseConfig"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [user, setUser] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const navigate = useNavigate();

  const actorOptions = [
    {label: "Popular Actors", path: "/actors/popular"},
    {label: "Trending Daily Actors",  path: "/actors/actorsDaily"},
    {label: "Trending Weekly Actors",  path: "/actors/actorsWeekly"}
  ]

  const menuOptions = [
    { label: "Home", icon: <HomeIcon />, path: "/" },
    { label: "Upcoming", icon: <Upcoming />,  path: "/movies/upcoming" },
    { label: "Top Rated", icon: <TopRated />, path: "/movies/topRated" },
    { label: "Now Playing", icon: <NowPlaying />, path: "/movies/nowPlaying" },
    { label: "Favourites", icon: <FavoriteIcon />, path: "/movies/favorites" },
    { label: "WatchList", icon: <WatchListIcon />, path: "/movies/watchList" },
    
  ];

  const loginOptions = [
    {label: "Login", icon: <VpnKeyIcon fontSize="medium" /> , path: "/login"},
    {label: "Signup", icon: <EnhancedEncryptionIcon fontSize="medium" />,   path: "/register"}
  ]

  const accountOptions = [
    {label: "Account", icon: <AccountCircleIcon fontSize="medium" />,  path: "/account"},
    {label: "Logout", icon: <ExitToAppIcon fontSize="medium" />, path: "/logout"}
  ]

  const handleMenuSelect = (pageURL) => {
    if (pageURL === "/logout") {
      signOut(auth).then(() => {
        navigate("/login");
      });
    } else {
      navigate(pageURL, { replace: true });
    }
    // window.location.reload();
  };

  const handleTrendingSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
    window.location.reload();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
              <>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '12px'}}>
                  <Actor />
                  Actors
                </div> 
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {actorOptions.map((opt) => (
                    <MenuItem
                      key={opt.label }
                      onClick={() => handleTrendingSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
          <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
            {isMobile ? (
              <>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label }
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>
                {menuOptions.map((opt) => (
                  <Button
                    key={opt.label}
                    color="inherit"
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '10px'}}>
                      {opt.icon}
                      {opt.label}
                    </div>
                  </Button>
                ))}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '10px'}}>
                 {user ? (
                  <> 
                    {accountOptions.map((opt) => (
                      <Button
                      key={opt.label}
                      color="inherit"
                      onClick={() => handleMenuSelect(opt.path)}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '10px'}}>
                          {opt.icon} 
                          {opt.label}
                        </div>
                      </Button>
                    ))}
                  </>
                 ) : (
                  <>
                    {loginOptions.map((opt) => (
                      <Button
                      key={opt.label}
                      color="inherit"
                      onClick={() => handleMenuSelect(opt.path)}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '10px'}}>
                          {opt.icon}
                          {opt.label}
                        </div>
                      </Button>
                    ))}
                  </>
                 )}
                </div>
                

            </>
            )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;