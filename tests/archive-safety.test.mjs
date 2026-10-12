import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('Russian archive has a valid language and navigable current-form telephone href', () => {
  assert.match(source, /<html lang="ru">/);
  assert.match(source, /href="tel:\+79292708998"/);
  assert.doesNotMatch(source, /tel:\+1-234-567-8901/);
});

test('static historical portfolio never accepts or submits personal data over HTTP', () => {
  assert.doesNotMatch(source, /<form\b/i);
  assert.doesNotMatch(source, /data-form-email=/);
  assert.doesNotMatch(source, /action="http:/);
  assert.doesNotMatch(source, /assets\/formoid\/formoid\.min\.js/);
  assert.match(source, /Форма заказа отключена/);
  assert.match(source, /данные не отправляются/);
});

test('archive keeps its original media/gallery and a truthful nonfunctional contact explanation', () => {
  assert.match(source, /id="gallery2-7"/);
  assert.match(source, /id="form1-l"/);
  assert.match(source, /Архивный проект PixelPilot/);
});
