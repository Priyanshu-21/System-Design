import pkg from 'pg'; 

const { Client } = pkg; 

async function DBConnect(): Promise<void> {
    const client = new Client({
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASS, 
        host: process.env.POSTGRES_HOST, 
        port: 5432, 
        database: process.env.POSTGRES_DB
    }); 

    try {
        await client.connect(); 
        console.log("Connected to DB !!!");

        // const result = await client.query("SELECT * FROM NOW() ")
        // console.log(result);         
    } catch (error) {
        console.error("Connection Error while connected to DB !!!", error); 
    }
}


export default DBConnect; 