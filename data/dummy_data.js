import { setStatusBarBackgroundColor } from 'expo-status-bar';
import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Malice Mizer', 'black'),
  new Category('c2', 'Gackt', '#A67A46'),
  new Category('c3', 'ManaSama', '#292840'),
  new Category('c4', 'Kozi', '#400101'),
  new Category('c5', 'Yuki', '#D97823'),
  new Category('c6', 'Kami', '#A64170')
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1'],
    'Malice Mizer',
    '1995-1999',
    'Era',
    'https://i.pinimg.com/originals/0b/89/1a/0b891a898083678b6b4b274da783285f.gif',
    '5 integrantes. ' ,
    [
      'Gackt - vocalista.',
      'Mana - guitarra, sintetizador.',
      'Kozi - guitarra, sintetizador, coros.',
      'Yuki - bajo, coros.',
      'Kami - batería, percusión, coros.'
    ],
    [
      
      ' '
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2'],
    'Gackt',
    'piano',
    'Vocalista y',
    'https://ic.pics.livejournal.com/cauliflower346/15039452/123742/123742_600.gif',
    '1. ',
    [
      'Cains Feel',
      'Malice Mizer',
      'S.K.I.N.',
      'YFC.'
    ],
    [

      ' '
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c3'],
    'ManaSama',
    'sintetizador',
    'Guitarrista  y',
    'https://storage.canalblog.com/70/49/169408/6068533.gif',
    2.,
    [
      'Ves.teager',
      'Girle',
      'Matenro',
      'Malice Mizer'
    ],
    [
      
      ' '
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'Kozi',
    'coros',
    'Guitarrista y',
    'https://i.pinimg.com/originals/2f/be/03/2fbe0393379cfb8c1cbe13c43d08ab57.gif',
    '3. ',
    [
      'Girl',
      'Matenro',
      'Malice Mizer',
      'Eve of destiny',
      'XA-VAT',
      'VAMQUET'
    ],
    [
      ' '
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c5'],
    'Yuki',
    'coros',
    'Bajo y',
    'https://media.tenor.com/xEFDKxKDHz8AAAAM/yu-ki-malice-mizer.gif',
    '4. ',
    [
      'ze:ro',
      'Malice Mizer',
    ],
    [
      ' '
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6'],
    'Kami',
    'coros',
    'Bateria y',
    'https://64.media.tumblr.com/1a71ec8b6b2fc1eb526392d47d49f525/4cef94a088b1d48d-12/s540x810/7b5a56ecb33119956a7ee3d734b05d19555e37c2.gif',
    '5. ',
    [
      'Kneuklid Romance',
      'Malice Mizer'
    ],
    [
      ' '
    ],
    true,
    false,
    true
  )
];