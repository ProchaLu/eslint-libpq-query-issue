import { cache } from 'react';
import { sql } from '../database/connect';
import type { Animal } from '../migrations/00000-createTableAnimals';

export const getAnimalsInsecure = cache(async () => {
  const animals = await sql<Animal[]>`
    SELECT
      *
    FROM
      animals
  `;

  return animals;
});

export const getAnimals = cache(async () => {
  const animals = await sql<Animal[]>`
    SELECT
      *
    FROM
      animals / / comment
  `;

  return animals;
});
