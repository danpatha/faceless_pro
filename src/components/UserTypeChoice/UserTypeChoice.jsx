import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useDispatch } from 'react-redux';

function UserTypeChoice() {

    const dispatch = useDispatch();

    function handleCandidateChoice() {
        dispatch({
            type: 'UPDATE_USER_TYPE',
            payload: { userType: 'candidate' }
        })
    }

    function handleEmployerChoice() {
        dispatch({
            type: 'UPDATE_USER_TYPE',
            payload: { userType: 'employer' }
        })
    }

    return (
        <Box sx={{ display: "flex" }}>

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={handleCandidateChoice}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="candidate"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Candidate
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            Candidate
                        </Typography> */}
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={handleEmployerChoice}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="employer"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Employer
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            Employer
                        </Typography> */}
                    </CardContent>
                </CardActionArea>
            </Card>

        </Box>
    );
}

export default UserTypeChoice;