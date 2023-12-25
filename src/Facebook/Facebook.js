import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ListIcon from "@mui/icons-material/List";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
function Facebook() {
  return (
    <div id='parent'>
      <Stack direction="row" spacing={2}>
        <Button  className='btn' variant="outlined" startIcon={<ListIcon />}>
          Lists
        </Button>
        <Button  className='btn' variant="outlined" startIcon={<GroupAddIcon />}>
          Friends
        </Button>
        <Button  className='btn' variant="outlined" startIcon={<AddToPhotosIcon />}>
          Photos/videos
        </Button>
        <Button className='btn'  variant="outlined" >
         ...
        </Button>      </Stack>
    </div>
  );
}

export default Facebook;
