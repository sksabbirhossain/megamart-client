import { Box, SwipeableDrawer } from '@mui/material';
import React from 'react';

const CartListSidebar = ({open, setOpen}) => {
    return (
        <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box pl={2} width="280px" role="presentation">
          <h3>cart list</h3>
        </Box>
      </SwipeableDrawer>
    );
};

export default CartListSidebar;