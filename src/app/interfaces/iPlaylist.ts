export interface iPlaylist {
    kind: string;
    etag: string;
    [items: string]: any;
    pageInfo: any;
}