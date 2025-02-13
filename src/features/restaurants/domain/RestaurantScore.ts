export class RestaurantScore {
  constructor(score: number) {
    this.value = score;
  }

  readonly maxScore = 5;
  readonly value: number;
}
