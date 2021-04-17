import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Admin from './Admin/Admin';
import User from './User/User';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const System = () => {
    const classes = useStyles();
    const [authentication] = useContext(UserContext);
    const [status, setStatus] = useState("");

    // Get admin list
    useEffect(() => {
        fetch('https://protected-citadel-86567.herokuapp.com/getData?token=admin')
            .then(res => res.json())
            .then(data => {
                if (data.find(data => data.email === authentication.email)) {
                    setStatus("admin")
                } else {
                    setStatus("user")
                }
            })
            .catch(err => alert(err))
    }, [])

    return (
        <div>
            {
                status === 'admin' ? <Admin />
                    : status === 'user' ? <User />
                        : <></>
            }
            <section className="App">
                <div className="App-header">
                    <div className={classes.root}>
                        <CircularProgress color="white" />
                    </div>
                    <br/>
                    <h3>Enough coding time to sit back and relax...</h3>
                </div>
            </section>
        </div>
    );
};

export default System;