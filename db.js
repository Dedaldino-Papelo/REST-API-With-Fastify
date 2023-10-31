import 'dotenv/config'
import postgres from 'postgres'

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const DATABASE_URL=`postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`

const sql = postgres(DATABASE_URL, { ssl: 'require' })

export default sql