export default {
    //return obj|undefined
    findMetaByName(metas, name) {
        console.log(metas);
        let dest = Array.from(metas).filter(meta => {
            console.log(meta.name);
            return meta.name == name ?? meta;
        })
        return dest[0];
    }
}