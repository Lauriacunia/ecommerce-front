import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProductCard = ({ product }) => {
    return (
         <Card sx={{ maxWidth: 280, minHeight: 450 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxFdRkNiK8QH1EvXnboUsviMLnNGXidU9dw&usqp=CAU"
                    alt="product"
                    />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            </CardActionArea>
         </Card>
    );
}

export default ProductCard;