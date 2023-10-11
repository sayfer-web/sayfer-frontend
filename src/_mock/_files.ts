import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const GB = 1000000000 * 24;

const FOLDERS = ['Docs', 'Projects', 'Work', 'Training', 'Sport', 'Foods'];

const FILES = [
  'cover-2.jpg',
  'design-suriname-2015.mp3',
  'expertise-2015-conakry-sao-tome-and-principe-gender.mp4',
  'money-popup-crack.pdf',
];

const URLS = [
  _mock.image.cover(1),
  'https://www.cloud.com/s/c218bo6kjuqyv66/design_suriname_2015.mp3',
  'https://www.cloud.com/s/c218bo6kjuqyv66/expertise_2015_conakry_sao-tome-and-principe_gender.mp4',
  'https://www.cloud.com/s/c218bo6kjuqyv66/money-popup-crack.pdf',
  _mock.image.cover(3),
  _mock.image.cover(5),
  'https://www.cloud.com/s/c218bo6kjuqyv66/large_news.txt',
  'https://www.cloud.com/s/c218bo6kjuqyv66/nauru-6015-small-fighter-left-gender.psd',
  _mock.image.cover(11),
  _mock.image.cover(17),
  'https://www.cloud.com/s/c218bo6kjuqyv66/xl_david-blaine_component_tanzania_books.pdf',
];

const SHARED_PERSONS = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  email: _mock.email(index),
  avatarUrl: _mock.image.avatar(index),
  permission: index % 2 ? 'view' : 'edit',
}));

export const FILE_TYPE_OPTIONS = [
  'folder',
  'txt',
  'zip',
  'audio',
  'image',
  'video',
  'word',
  'excel',
  'powerpoint',
  'pdf',
  'photoshop',
  'illustrator',
];

// ----------------------------------------------------------------------

const shared = (index: number) =>
  (index === 0 && SHARED_PERSONS.slice(0, 5)) ||
  (index === 1 && SHARED_PERSONS.slice(5, 9)) ||
  (index === 2 && SHARED_PERSONS.slice(9, 11)) ||
  (index === 3 && SHARED_PERSONS.slice(11, 12)) ||
  [];

export const _folders = FOLDERS.map((name, index) => ({
  id: `${_mock.id(index)}_folder`,
  name,
  type: 'folder',
  url: URLS[index],
  shared: shared(index),
  tags: _tags.slice(0, 5),
  size: GB / ((index + 1) * 10),
  totalFiles: (index + 1) * 100,
  createdAt: _mock.time(index),
  modifiedAt: _mock.time(index),
  isFavorited: _mock.boolean(index + 1),
}));

export const _files = FILES.map((name, index) => ({
  id: `${_mock.id(index)}_file`,
  name,
  url: URLS[index],
  shared: shared(index),
  tags: _tags.slice(0, 5),
  size: GB / ((index + 1) * 500),
  createdAt: _mock.time(index),
  modifiedAt: _mock.time(index),
  type: `${name.split('.').pop()}`,
  isFavorited: _mock.boolean(index + 1),
}));

export const _allFiles = [..._folders, ..._files];
