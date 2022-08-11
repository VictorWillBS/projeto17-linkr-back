import connection from "../dbstrategy/postgres.js";

async function getTagsRepository (){
    return await connection.query(`
    SELECT tags.id, name ,COUNT(tags.id) as "totalPosts"
    FROM "tags_Posts" 
    JOIN tags 
    ON tags.id = "tags_Posts"."tagId"  
    GROUP BY tags.id
    ORDER BY "totalPosts" DESC
    LIMIT 10`)
}

const tagRepository={
    getTagsRepository
};

export default tagRepository;