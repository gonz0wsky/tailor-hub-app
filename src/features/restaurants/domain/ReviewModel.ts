import { ReviewScore } from "./ReviewScoreModel";

export class Review {
  constructor(id: string, text: string, score: ReviewScore, canEdit: boolean) {
    this.id = id;
    this.content = text;
    this.score = score;
    this.canEdit = canEdit;
  }

  readonly id: string;
  readonly content: string;
  readonly score: ReviewScore;
  readonly canEdit: boolean;
}
