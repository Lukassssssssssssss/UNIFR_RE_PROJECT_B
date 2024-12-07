import { MyApp } from '../src/my-app';
import { describe, it, expect } from 'vitest';
import { ScoreCounter } from '../src/resources/score-counter';

describe('my-app', () => {
    it('should generate cards', async () => {
      const scoreCounter = new ScoreCounter();
      const app = new MyApp(scoreCounter);
      app.generate();
      expect(app.cards.length).toBe(16);
      expect(app.cards.every(card => card.visible === true)).toBe(true);
      expect(app.cards.every(card => card.matched === false)).toBe(true);
    });

    it('should shuffle cards', async () => {
      const scoreCounter = new ScoreCounter();
      const app = new MyApp(scoreCounter);
      app.generate();
      const initialOrder = [...app.cards];
      app.shuffle(app.cards);
      expect(app.cards).not.toEqual(initialOrder);
    });

  });

