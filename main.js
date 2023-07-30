const express = require('express');
const fs = require('fs');
const Contenedor = require('./contenedor');
const app = express();
const port = 8080;

const contenedor = new Contenedor('productos.txt');

app.get('/productos', async (req, res) => {
    try {
        const productos = await contenedor.getAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos.' });
    }
});

app.get('/productoRandom', async (req, res) => {
    try {
        const productos = await contenedor.getAll();
        const randomIndex = Math.floor(Math.random() * productos.length);
        const randomProduct = productos[randomIndex];
        res.json(randomProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener un producto aleatorio.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

