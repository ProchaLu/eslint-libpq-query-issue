import type { Sql } from 'postgres';

const animals = [
  {
    id: 1,
    firstName: 'Lucia',
    type: 'Cat',
    accessory: 'House',
    birthDate: new Date('1999-06-23'),
  },
  {
    id: 2,
    firstName: 'Bili',
    type: 'Capybaras',
    accessory: 'Car',
    birthDate: new Date('2020-06-23'),
  },
  {
    id: 3,
    firstName: 'Jojo',
    type: 'Dog',
    accessory: 'Bike',
    birthDate: new Date('2020-06-23'),
  },
  {
    id: 4,
    firstName: 'Macca',
    type: 'Elephant',
    accessory: 'Key',
    birthDate: new Date('2020-06-23'),
  },
  {
    id: 5,
    firstName: 'Fro',
    type: 'Duck',
    accessory: 'Motor',
    birthDate: new Date('2020-06-23'),
  },
];

export async function up(sql: Sql) {
  for (const animal of animals) {
    await sql`
      INSERT INTO
        animals (
          first_name,
          type,
          accessory,
          birth_date
        )
      VALUES
        (
          ${animal.firstName},
          ${animal.type},
          ${animal.accessory},
          ${animal.birthDate}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const animal of animals) {
    await sql`
      DELETE FROM animals
      WHERE
        id = ${animal.id}
    `;
  }
}
