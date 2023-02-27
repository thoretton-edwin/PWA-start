import SpeedDial from '@mui/material/SpeedDial';
import React from 'react';
import MicIcon from '@mui/icons-material/Mic';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function () {
  return (
    <>
      <CustomAppBar />
      <Typography
        variant="body1"
        component="div"
        sx={{ flexGrow: 1, textAlign: 'center', marginTop: '16rem' }}
      >
        Please use the bottom right button to start recording and get in tune !
      </Typography>
      <RecordButton />
    </>
  );
}

function CustomAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            data-testid="app-title"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Chromatic Tuner
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function RecordButton() {
  return (
    <SpeedDial
      data-test-id={'record-button'}
      ariaLabel="recording action"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<MicIcon />}
      onClick={startRecording}
    />
  );
}

function startRecording() {}
