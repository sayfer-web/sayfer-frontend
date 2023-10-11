// assets
import { countries } from 'src/assets/data';
//
import { _mock } from './_mock';
import { useLocales } from 'src/locales';

// ----------------------------------------------------------------------

export const JOB_DETAILS_TABS = () => {

  const { t } = useLocales()

  return [
  { value: 'content', label: t('job_content') },
  { value: 'candidates', label: t('candidates') },
]
}

export const JOB_SKILL_OPTIONS = () => {
  return [
  'UI',
  'UX',
  'Html',
  'JavaScript',
  'TypeScript',
  'Communication',
  'Problem Solving',
  'Leadership',
  'Time Management',
  'Adaptability',
  'Collaboration',
  'Creativity',
  'Critical Thinking',
  'Technical Skills',
  'Customer Service',
  'Project Management',
  'Problem Diagnosis',
]
}

export const JOB_WORKING_SCHEDULE_OPTIONS = () => {

  const { t } = useLocales()

  return [
  'Monday to Friday',
  'Weekend availability',
  'Day shift',
]
}

export const JOB_EMPLOYMENT_TYPE_OPTIONS = () => {
  
  const { t } = useLocales()
  
  return [
  { value: 'Full-time', label: t('full_time') },
  { value: 'Part-time', label: t('part_time') },
  { value: 'On Demand', label: t('on_demand') },
  { value: 'Negotiable', label: t('hegotiable') },
]
}

export const JOB_EXPERIENCE_OPTIONS = () => {

  const { t } = useLocales()

  return [
  { value: 'No experience', label: t('no_experience') },
  { value: '1 year exp', label: t('one_year_exp') },
  { value: '2 year exp', label: t('two_year_exp') },
  { value: '> 3 year exp', label: t('more_than_three_year_exp') },
]
}

export const JOB_BENEFIT_OPTIONS = () => {

  const { t } = useLocales()

  return [
    { value: 'Free parking', label: t('free_parking') },
    { value: 'Bonus commission', label: t('bonus_commission') },
    { value: 'Travel', label: t('travel') },
    { value: 'Device support', label: t('device_support') },
    { value: 'Health care', label: t('health_care') },
    { value: 'Training', label: t('training') },
    { value: 'Health Insurance', label: t('health_insurance') },
    { value: 'Retirement Plans', label: t('retirement_plans') },
    { value: 'Paid Time Off', label: t('paid_time_off') },
    { value: 'Flexible Work Schedule', label: t('flexible_work_schedule') },
  ]
}

export const JOB_PUBLISH_OPTIONS = () => {

  const { t } = useLocales()
  
  return [
  {
    value: 'published',
    label: t('published'),
  },
  {
    value: 'draft',
    label: t('draft'),
  },
];
}

export const JOB_SORT_OPTIONS = () => {

  const { t } = useLocales()

  return [
  { value: 'latest', label: t('latest') },
  { value: 'popular', label: t('popular') },
  { value: 'oldest', label: t('oldest') },
];
}

const CANDIDATES = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  role: _mock.role(index),
  name: _mock.fullName(index),
  avatarUrl: _mock.image.avatar(index),
}));

const CONTENT = `
<h6>Job Description</h6>
<br/>

<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>

<br/>
<br/>

<h6>Key Responsibilities</h6>
<br/>
<ul>
  <li>Working with agency for design drawing detail, quotation and local production.</li>
  <li>Produce window displays, signs, interior displays, floor plans and special promotions displays.</li>
  <li>Change displays to promote new product launches and reflect festive or seasonal themes.</li>
  <li>Planning and executing the open/renovation/ closing store procedure.</li>
  <li>Follow‐up store maintenance procedure and keep updating SKU In &amp; Out.</li>
  <li>Monitor costs and work within budget.</li>
  <li>Liaise with suppliers and source elements.</li>
</ul>

<br/>
<br/>

<h6>Why You'll Love Working Here</h6>
<br/>
<ul>
  <li>Working with agency for design drawing detail, quotation and local production.</li>
  <li>Produce window displays, signs, interior displays, floor plans and special promotions displays.</li>
  <li>Change displays to promote new product launches and reflect festive or seasonal themes.</li>
  <li>Planning and executing the open/renovation/ closing store procedure.</li>
  <li>Follow‐up store maintenance procedure and keep updating SKU In &amp; Out.</li>
  <li>Monitor costs and work within budget.</li>
  <li>Liaise with suppliers and source elements.</li>
</ul>
`;

export const _jobs = () => {
return ([...Array(12)].map((_, index) => {

  const { t } = useLocales()

  const jobExpOptions = JOB_EXPERIENCE_OPTIONS()
  const jobBenefitOptions = JOB_BENEFIT_OPTIONS()
  const jobWorkingScheduleOptions = JOB_WORKING_SCHEDULE_OPTIONS()
  const jobSkillOptions = JOB_SKILL_OPTIONS()

  const publish = index % 3 ? 'published' : 'draft';

  const salary = {
    type: (index % 5 && 'Custom') || 'Hourly',
    price: _mock.number.price(index),
    negotiable: _mock.boolean(index),
  };

  const benefits = jobBenefitOptions.slice(0, 3).map((option) => option.label);

  const experience =
    jobExpOptions.map((option) => option.label)[index] || t('no_experience');

  const employmentTypes = (index % 2 && ['Part-time']) ||
    (index % 3 && ['On Demand']) ||
    (index % 4 && ['Negotiable']) || ['Full-time'];

  const company = {
    name: _mock.companyName(index),
    logo: _mock.image.company(index),
    phoneNumber: _mock.phoneNumber(index),
    fullAddress: _mock.fullAddress(index),
  };

  const locations = countries.slice(1, index + 2).map((option) => option.label);

  return {
    id: index+1,
    salary,
    publish,
    company,
    benefits,
    locations,
    experience,
    employmentTypes,
    content: CONTENT,
    candidates: CANDIDATES,
    role: _mock.role(index),
    title: _mock.jobTitle(index),
    createdAt: _mock.time(index),
    expiredDate: _mock.time(index),
    skills: jobSkillOptions.slice(0, 3),
    totalViews: _mock.number.nativeL(index),
    workingSchedule: jobWorkingScheduleOptions.slice(0, 2),
  };
})
)
}
