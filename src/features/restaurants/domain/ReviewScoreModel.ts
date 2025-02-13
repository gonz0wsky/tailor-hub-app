export class ReviewScore {
  constructor(score: number) {
    this.value = score;
  }

  readonly maxScore = 5;
  readonly value: number;
}
