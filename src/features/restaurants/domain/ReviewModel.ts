import { User } from "./User";

export class Review {
  constructor(
    id: string,
    text: string,
    score: number,
    canEdit: boolean,
    creator: User
  ) {
    this.id = id;
    this.content = text;
    this.score = score;
    this.canEdit = canEdit;
    this.creator = creator;
  }

  readonly id: string;
  readonly content: string;
  readonly score: number;
  readonly canEdit: boolean;
  readonly creator: User;
}
