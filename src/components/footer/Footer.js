import React from "react";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Container from '@mui/material/Container';

const Footer = () => {
    return (
         <Container  maxWidth={false}>
            <Typography
                variant="subtitle1" gutterBottom>
                {"Sitio realizado por Laura Acuña"}
            </Typography>
            <Typography
                variant="subtitle3" gutterBottom>
                {"FullStack developer"}
            </Typography>
            <div >
                <a href="https://github.com/Lauriacunia" target="_blank" rel="noreferrer">
                    <IconButton 
                        aria-label="add an alarm">
                        <GitHubIcon />
                    </IconButton>
                </a>
                <a href="https://www.linkedin.com/in/lauriacunia/" target="_blank" rel="noreferrer">
                    <IconButton 
                        aria-label="add an alarm">
                        <LinkedInIcon  />
                    </IconButton>
                </a>

            </div>
        </Container>
    )
}

export default Footer