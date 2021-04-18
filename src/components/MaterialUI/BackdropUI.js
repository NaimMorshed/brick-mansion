import React from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
const backdropUseStyles = makeStyles((theme) => ({ backdrop: { zIndex: theme.zIndex.drawer + 1, color: '#fff' } }));


const BackdropUI = (data) => {

    // -------- BACKDROP --------
    const backdropClasses = backdropUseStyles();
    const [backOpen, setBackOpen] = React.useState(false);
    const backdropClose = () => setBackOpen(false);
    const backdropOpen = () => setBackOpen(!backOpen);

  

    return (
        <div>

            {/* BACKDROP */}
            <Backdrop className={backdropClasses.backdrop} open={backOpen}>
                <CircularProgress color="inherit" />
            </Backdrop>
            {/* ----------- */}
            
        </div>
    );
};

export default BackdropUI;