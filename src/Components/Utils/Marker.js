import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { withStyles } from "@material-ui/core/styles";
import Popover from '@material-ui/core/Popover';

import PopoverContent from './PopoverContent.js';

const styles = theme => ({
})

const Marker = ( props ) => {

  const { classes } = props
  const [ open, setOpen ] = useState( false )
  const [anchorEl, setAnchorEl] = useState(null);

  const popoverOpen = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;

  const _onCLick = ( event ) => {
    setOpen(false)
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return(
    <div style={{cursor: "default"}}>
      <Tooltip 
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        className={classes.tooltip} 
        title={props.text} 
        TransitionComponent={Zoom} 
      >
        <img src={props.icon} alt="pointeur" onClick={_onCLick} />
      </Tooltip>
      <Popover
        id={popoverId}
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <PopoverContent 
          text={props.text}
          day={props.day}
          time={props.time}
        />
      </Popover>
    </div>
  )
}

export default withStyles(styles)(Marker)