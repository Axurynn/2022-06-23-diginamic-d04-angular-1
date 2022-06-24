import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score',
})
export class ScorePipe implements PipeTransform {
  transform(score: number, ...args: unknown[]): string {
    if (score < 0) {
      return `- ${Math.abs(score)}`;
    } else if (score > 0) {
      return `+ ${score}`;
    } else {
      return `${score}`;
    }
  }
}
