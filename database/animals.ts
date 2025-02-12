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

export const getAnimals2Insecure = cache(async () => {
  const animals = await sql<Animal[]>`
    SELECT
      *
    FROM
      animals / / comment
  `;

  return animals;
});

export const getAnimals3Insecure = cache(async () => {
  const animals = await sql<Animal[]>`
    SELECT
      animals.id,
      animals.first_name,
      animals.type,
      animals.accessory,
      animals.birth_date
    FROM
      animals
  `;

  return animals;
});
