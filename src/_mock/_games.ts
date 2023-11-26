// assets
import { countries } from 'src/assets/data';
//
import { _mock } from './_mock';
import { _tags } from './assets';
import { useLocales } from 'src/locales';

// ----------------------------------------------------------------------

export const GAMES_DETAILS_TABS = () => {

  const { t } = useLocales()

  return [
    { value: 'content', label: t('project_description') },
    // { value: 'bookers', label: t('players') },
  ]
}

export const GAMES_SORT_OPTIONS = () => {
  return [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' },
    { value: 'oldest', label: 'Oldest' },
  ];
}

export const GAMES_PUBLISH_OPTIONS = () => {
  return [
    {
      value: 'published',
      label: 'Published',
    },
    {
      value: 'draft',
      label: 'Draft',
    },
  ];
}

export const GAMES_SERVICE_OPTIONS = () => {
  return [
    { value: 'Audio guide', label: 'Доступно на всех устройствах' },
    { value: 'Food and drinks', label: 'Разнообразие лимитов и дисциплин' },
    { value: 'Lunch', label: 'Большое количество оппонентов' },
    { value: 'Private tour', label: 'Привычный интерфейс' },
    { value: 'Special activities', label: 'Честный генератор случайных карт' },
    { value: 'Entrance fees', label: 'Отсутствие мультиаккаунтов' },
    { value: 'Gratuities', label: 'Защита от роботов' },
    { value: 'Pick-up and drop off', label: 'Различные виды бонусов' },
    { value: 'Professional guide', label: 'Поощрения за повышение уровня' },
    {
      value: 'Transport by air-conditioned',
      label: 'Дивиденды для игроков',
    },
  ];
}


const newContent = () => {
  return `
<h5>Sayfer с гордостью объявляет о блестящем успехе нашего приватного покерного клуба, который приносит прибыль еще до запуска нашего собственного покерного приложения. Этот знаковый момент подчеркивает не только выдающееся качество наших проектов, но и уникальный подход Sayfer к миру инвестиций и азартных развлечений.</h5>
<br/>
<br/>

<h6>Результаты и успехи</h6>
<br/>
<p>
Наш приватный покерный клуб уже сегодня привлекает внимание любителей азартных игр и инвесторов, создавая образец успешного взаимодействия в мире азартных развлечений. Наша платформа даже на этапе разработки приносит стабильный поток доходов, открывая двери для долгосрочных перспектив.
</p>
<br/>

<h6>Почему наш покерный клуб уникален?</h6>
<br/>
<ul>

<li><strong>Эксклюзивность: </strong></li><p>Мы создали уютное пространство для ценителей покера, где каждый член клуба ощущает атмосферу роскоши и приватности.</p>
<br/>
<li><strong>Финансовая устойчивость: </strong></li><p>Наши ежемесячные доходы от клуба подчеркивают финансовую устойчивость и потенциал для дополнительного роста.</p>
<br/>
<li><strong>Предвестие Успеха: </strong></li><p>Покереный клуб служит предвестием успешного старта нашей инвестиционной платформы и приложения, предоставляя нам уверенность в будущем.
</p>
</ul>
<br/><br/>
<h6>Что Дальше?</h6>
<br/>
<p>С этого момента Sayfer не только предлагает место для азартных развлечений, но и создает инвестиционное сообщество, где участники могут быть активными долевыми участниками в наших успешных проектах. </p>

<br /> 
Покерное приложение, входящее в состав инвестиционной платформы, может предоставлять несколько преимуществ, делающих его выгодным:

<br/>
<ul>

<li><strong>Дивиденды от активности покерного клуба: </strong></li><p> наш приватный клуб служит источником дохода для наших инвесторов, предоставляя им уникальную возможность получать дивиденды до выхода приложения на рынок уже сейчас.</p>
<br/>
<li><strong>Постоянный спрос: </li></strong><p>Азартные игры, включая покер, обладают стабильным и постоянным спросом. Популярность покера как стратегической и социальной игры привлекает разнообразную аудиторию, обеспечивая постоянный поток пользователей.</p>
<br/>
<li><strong>Монетизация через различные источники: </li></strong><p>Покерные приложения предоставляют возможности для многократной монетизации. Это может включать в себя продажу фишек, участие в турнирах за плату, рекламные партнерства и другие источники дохода.<p>
<br/>
<li><strong>Уникальные функции и опыт: </li></strong><p>Инновационные и уникальные функции в приложении могут привлекать больше пользователей. Это может включать в себя улучшенную графику, интересные режимы игры, турниры с большими призами и другие факторы, делающие приложение привлекательным для игроков.</p>
<br/>
<li><strong>Возможность участия в турнирах: </li></strong><p>Турниры и соревнования в приложении создают дополнительный стимул для игроков. Участие в турнирах зачастую связано с дополнительными расходами, что способствует увеличению выручки приложения.</p>
<br/>
<li><strong>Взаимодействие с инвесторами: </li></strong> <p>Покерное приложение, входящее в инвестиционную платформу, предоставляет уникальную возможность взаимодействия с инвесторами. Это может способствовать привлечению дополнительных средств для развития и улучшения приложения.</p>
<br/>
<li><strong>Система участия инвесторов: </li></strong> <p>Если инвесторы получают долю от активности пользователей, это создает взаимовыгодную ситуацию, где успех приложения напрямую влияет на доход инвесторов. Такой подход способствует общему интересу в успешном развитии и продвижении покерного приложения.</p>
</ul>

<br />


<p>Совокупность этих факторов делает покерное приложение на инвестиционной платформе привлекательным для инвесторов, предоставляя потенциал для стабильного дохода и роста.</p>

<br />

<p>Как инвестор нашей платформы, вы получаете долю от активности игроков в приложении. Успех приложения прямо влияет на ваши дивиденды, создавая уникальную ситуацию, где ваш финансовый успех зависит от популярности и доходности покерного приложения.</p>

<p>Инвестируйте с уверенностью, следя за ростом вашего портфеля, и наслаждайтесь плодами успеха вместе с "Инвестиционной Платформой X". Готовы ли вы перейти к новому уровню финансовых возможностей? Присоединяйтесь к нам и станьте частью инновационного будущего инвестиций и азартных игр!"</p>

<br/>
<br/>
<br/>
<br/>
`
}


const CONTENT = newContent()

const BOOKER = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  guests: index + 10,
  name: _mock.fullName(index),
  avatarUrl: _mock.image.avatar(index),
}));

export const _gamesGuides = () => [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  avatarUrl: _mock.image.avatar(index),
  phoneNumber: _mock.phoneNumber(index),
}));

export const GAMES_IMAGES = [...Array(16)].map((_, index) => _mock.image.games(index));

export const _games = () => {
  return [...Array(3)].map((_, index) => {
    const available = {
      startDate: _mock.time(index + 1),
      endDate: _mock.time(index),
    };

    const publish = index % 3 ? 'published' : 'draft';

    const destination = countries.map((option) => option.label)[index];

    const services = (index % 2 && ['Доступно на всех устройствах', 'Food and drinks']) ||
      (index % 3 && ['Lunch', 'Private tour']) ||
      (index % 4 && ['Special activities', 'Entrance fees']) || [
        'Gratuities',
        'Pick-up and drop off',
        'Professional guide',
        'Transport by air-conditioned',
      ];

    const gamesGuides =
      (index === 0 && _gamesGuides().slice(0, 1)) ||
      (index === 1 && _gamesGuides().slice(1, 3)) ||
      (index === 2 && _gamesGuides().slice(2, 5)) ||
      (index === 3 && _gamesGuides().slice(4, 6)) ||
      _gamesGuides().slice(6, 9);

    const images = GAMES_IMAGES.slice(index, index + 5);

    return {
      id: index + 1,
      images,
      publish,
      services,
      available,
      gamesGuides,
      destination,
      bookers: BOOKER,
      content: CONTENT,
      tags: _tags.slice(0, 5),
      name: 'Покерное приложение',
      createdAt: _mock.time(index),
      durations: '4 days 3 nights',
      price: _mock.number.price(index),
      priceSale: _mock.number.price(index),
      totalViews: _mock.number.nativeL(index),
      ratingNumber: _mock.number.rating(index),
    };
  });
}
