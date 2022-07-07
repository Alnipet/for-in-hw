// eslint-disable-next-line object-curly-newline
import orderByProps from '../app';

test('Возвращает массив', () => {
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
  ]);
});
