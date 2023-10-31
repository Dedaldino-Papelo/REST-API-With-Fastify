import sql from "./db.js"

sql`
    CREATE TABLE videos(
        id          TEXT primary key,
        title       TEXT,
        description TEXT,
        duration    INTEGER
    );
`
.then(() => {
    console.log("Created Table")
})