export class Comment {

    username: string;
    email: string;
    comment: string;
    video: string;
    createdAt: string;

    constructor(obj?: any) {
        this.username = obj && obj.username || null;
        this.email = obj && obj.email || null;
        this.comment = obj && obj.comment || null;
        this.video = obj && obj.video || null;
        this.createdAt = obj && obj.createdAt || null;
    }
}
