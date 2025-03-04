import pkg from 'pg'; 

const { Client } = pkg; 

async function DBConnect(): Promise<void> {
    const client = new Client({
        user: process.env.USERNAME,
        password: process.env.PASSWORD, 
        host: 'localhost', 
        port: 5432, 
        database: 'parking'
    }); 

    try {
        await client.connect(); 
        console.log("Connected to DB !!!");
        
    } catch (error) {
        console.error("Connection Error while connected to DB !!!", error); 
    }
}


export default DBConnect; 