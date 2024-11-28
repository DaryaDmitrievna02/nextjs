'use client'

import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Button, Divider, Drawer, List, ListItem, ListItemButton } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Link from 'next/link';

const DrawerComponent = () => {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
      <ListItem disablePadding>
      <ListItemButton>
      <Link href="/">
        Home
      </Link>
      </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
      <ListItemButton>
      <Link
        href="/settings"
      >
        Settings
      </Link>
      </ListItemButton>
      </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Button onClick={toggleDrawer(true)}>
            <DehazeIcon/>
        </Button>
      <Drawer 
      open={open} 
      onClose={toggleDrawer(false)}
      anchor='right'
      >
        {DrawerList}
      </Drawer>
    </Box>
  )
}

export default DrawerComponent