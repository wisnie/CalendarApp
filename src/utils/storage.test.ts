import { setStorageItem, getStorageItem } from './storage';

afterEach(() => {
  localStorage.removeItem('test');
});

it('sets data to localStorage', () => {
  setStorageItem('test', 123);
  expect(JSON.parse(localStorage.getItem('test'))).toBe(123);
});

it('retrives data from localStorage', () => {
  localStorage.setItem('test', JSON.stringify(123));
  expect(getStorageItem('test')).toBe(123);
});

it('sets and retrives data from storage', () => {
  setStorageItem('test', 123);
  expect(getStorageItem('test')).toBe(123);
});
