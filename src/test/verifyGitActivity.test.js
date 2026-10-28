import { parseGithubUrl, sanitizeCommit } from '../utils/githubUtils.js';
import { formatRelativeTime } from '../utils/dateUtils.js';
import fs from 'fs';

console.log('🧪 Iniciando bateria de testes de validação...');

// Teste 1: parseGithubUrl
console.log('--- Teste 1: parseGithubUrl ---');
const testUrls = [
  { url: 'https://github.com/moacir1neto/sherlock-scraper', expected: { owner: 'moacir1neto', repo: 'sherlock-scraper' } },
  { url: 'https://github.com/moaaskt/portfolio.git', expected: { owner: 'moaaskt', repo: 'portfolio' } },
  { url: 'https://github.com/facebook/react/', expected: { owner: 'facebook', repo: 'react' } },
  { url: 'https://gitlab.com/user/project', expected: null },
  { url: '', expected: null },
  { url: null, expected: null },
];

for (const { url, expected } of testUrls) {
  const result = parseGithubUrl(url);
  if (expected === null) {
    if (result !== null) throw new Error(`Falha em parseGithubUrl(${url}): esperado null, recebido ${JSON.stringify(result)}`);
  } else {
    if (!result || result.owner !== expected.owner || result.repo !== expected.repo) {
      throw new Error(`Falha em parseGithubUrl(${url}): esperado ${JSON.stringify(expected)}, recebido ${JSON.stringify(result)}`);
    }
  }
}
console.log('✓ parseGithubUrl passou em todos os casos de teste.');

// Teste 2: sanitizeCommit
console.log('--- Teste 2: sanitizeCommit ---');
const rawMock = {
  sha: 'abc1234567890abcdef',
  commit: {
    message: 'feat: add git activity tracker\n\nDetailed multiline description here.',
    author: { name: 'Moacir Neto', date: '2026-10-28T12:00:00Z' },
  },
  author: { login: 'moacir1neto', avatar_url: 'https://github.com/avatar.png' },
  html_url: 'https://github.com/moacir1neto/sherlock-scraper/commit/abc1234567890abcdef',
};
const sanitized = sanitizeCommit(rawMock);
if (sanitized.sha !== 'abc1234') throw new Error(`SHA curto incorreto: ${sanitized.sha}`);
if (sanitized.message !== 'feat: add git activity tracker') throw new Error(`Mensagem não truncada na 1a linha: ${sanitized.message}`);
if (sanitized.author !== 'moacir1neto') throw new Error(`Autor incorreto: ${sanitized.author}`);
console.log('✓ sanitizeCommit higienizou os dados perfeitamente.');

// Teste 3: formatRelativeTime
console.log('--- Teste 3: formatRelativeTime ---');
const now = new Date();
const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);
const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);

if (formatRelativeTime(twoHoursAgo, 'pt') !== 'há 2 horas') throw new Error('Falha em data relativa PT (2 horas)');
if (formatRelativeTime(twoHoursAgo, 'en') !== '2 hours ago') throw new Error('Falha em data relativa EN (2 hours)');
if (formatRelativeTime(threeDaysAgo, 'pt') !== 'há 3 dias') throw new Error('Falha em data relativa PT (3 dias)');
if (formatRelativeTime(threeDaysAgo, 'en') !== '3 days ago') throw new Error('Falha em data relativa EN (3 days)');
console.log('✓ formatRelativeTime formatou tempos relativos em PT e EN com precisão.');

// Teste 4: Sincronismo de traduções (pt.json e en.json)
console.log('--- Teste 4: Sincronismo i18n ---');
const ptJson = JSON.parse(fs.readFileSync('src/i18n/locales/pt.json', 'utf8'));
const enJson = JSON.parse(fs.readFileSync('src/i18n/locales/en.json', 'utf8'));

const ptKeys = Object.keys(ptJson.projectDetail.gitActivity);
const enKeys = Object.keys(enJson.projectDetail.gitActivity);

for (const k of ptKeys) {
  if (!enKeys.includes(k)) {
    throw new Error(`Chave ausente em en.json: projectDetail.gitActivity.${k}`);
  }
}
console.log(`✓ Sincronismo i18n validado: ${ptKeys.length} chaves verificadas.`);

console.log('🎉 Todos os testes de validação passaram com 100% de sucesso!');

