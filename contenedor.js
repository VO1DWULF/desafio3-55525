const fs = require('fs').promises;

class Contenedor {
    constructor(fileName) {
        this.fileName = fileName;
    }

    async getAll() {
        try {
            const data = await fs.readFile(this.fileName, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }
}

module.exports = Contenedor;
