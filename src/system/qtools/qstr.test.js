import * as qstr from './qstr';

test('qstr.capitalizeFirstLetter() with uppercase works', () => {
	expect(qstr.capitalizeFirstLetter('This')).toBe('This');
	expect(qstr.capitalizeFirstLetter('this')).toBe('This');
});