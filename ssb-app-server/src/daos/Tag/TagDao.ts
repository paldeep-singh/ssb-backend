import Tag, { ITag } from "@entities/Tag";
import neo4j = require("neo4j-driver");
import neo4jDriver from "@daos/SsbDB/Neo4jDriverDao"


export interface ITagDao {
    getAll: () => Promise<ITag[]>;
}

class TagDao implements ITagDao{
    public async getAll(): Promise<ITag[]>{
        let session = neo4jDriver.session();
        let result = await session
        .run(
            `MATCH (t:tag)
          RETURN t.name AS tag_name;`
        );
    session.close();

    return result.records.map((record) => {
        const {tag_name} = record.toObject()
        const tag : Tag = {
            tag_name: tag_name
        }

        return tag;
    })
    }
}

export default TagDao;