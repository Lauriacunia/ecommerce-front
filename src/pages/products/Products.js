import React, { useState, useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ProductCard from '../../components/productCard/ProductCard';
import Grid from '@mui/material/Grid';

const Products = () => {
    const [resultados, setResultados] = useState([]);
    const BASE_URL = `https://jsonplaceholder.typicode.com/users`
         
    useEffect(() => {   
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setResultados(data)
                console.log(resultados)
            })
    }, []);
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ bgcolor: '#cfe8fc', padding: '50px' }}>
         <Grid container spacing={1}>
            {resultados.length > 0 && 
        
                resultados.map(product => (
                    <Grid item xs={12} sm={6} md={3} key={product.id}>
                      <ProductCard product={product} />
                    </Grid>
                ))
            
            }
        </Grid>
        </Container>
    </React.Fragment>
    );
    }
export default Products;
