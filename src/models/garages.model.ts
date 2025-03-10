import pg from 'pg'; 

const { Client } = pg; 

async function createGarbageModel(): Promise<void> {
    const connectionString: string = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASS}@${process.env.POSTGRES_HOST}:5432/${process.env.POSTGRES_DB}`;
    
    try {
        const client = new Client({connectionString});
        const connect = await client.connect();
        console.log("Connection works fine");
    } catch (err: any) {
        console.error("Getting Errror", err.message);
    }

}

export default createGarbageModel; 