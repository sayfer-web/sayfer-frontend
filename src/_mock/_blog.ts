import { useLocales } from "src/locales";

export const POST_PUBLISH_OPTIONS = () => {

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

export const POST_SORT_OPTIONS = () => {

  const { t } = useLocales()

  return [
    { value: 'latest', label: t('latest') },
    { value: 'popular', label: t('popular') },
    { value: 'oldest', label: t('oldest') },
  ]
}
