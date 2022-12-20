class Playlist {
    // ["kind","etag","items","pageInfo"]
    kind: string;
    etag: string;
    items: [];
    pageInfo: {};

    constructor (
        kind: string,
        etag: string,
        items: [],
        pageInfo: {}
        ) {
        this.kind = kind;
        this.etag = etag;
        this.items = items;
        this.pageInfo = pageInfo;
    }


}