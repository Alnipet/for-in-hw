/* eslint-disable linebreak-style */
// eslint-disable-next-line object-curly-newline
import orderByProps from '../app';

test('Возвращает массив отсосртированный и по ключам в массиве и по алфавиту', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  expect(orderByProps(obj, ['name', 'health'])).toStrictEqual([
    { key: 'name', value: 'мечник' },
    { key: 'health', value: 10 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
  ]);
});

test('Возвращает массив отсосртированный по алфавиту', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  expect(orderByProps(obj, [])).toStrictEqual([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]);
});
