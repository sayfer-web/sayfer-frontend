import orderBy from 'lodash/orderBy';
import { useCallback, useEffect, useState } from 'react';
// @mui
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
// hooks
import { useDebounce } from 'src/hooks/use-debounce';
// _mock
import { POST_SORT_OPTIONS } from 'src/_mock';
// api
import { useGetPosts, useSearchPosts } from 'src/api/blog';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
// types
import { IPostItem, IPostFilters, IPostFilterValue } from 'src/types/blog';
//
import PostSort from '../post-sort';
import PostSearch from '../post-search';
import PostListHorizontal from '../post-list-horizontal';
import { useLocales } from 'src/locales';
import { useGetAllNewsQuery } from 'src/app/features/news/newsApiSlice';

// ----------------------------------------------------------------------

const defaultFilters: IPostFilters = {
  publish: 'all',
};

// ----------------------------------------------------------------------

export default function PostListView() {

  const { t } = useLocales()

  const {
    data: news,
    isLoading,
    isSuccess,
    isError,
    error
    /* @ts-ignore */
  } = useGetAllNewsQuery()

  const settings = useSettingsContext();

  const [sortBy, setSortBy] = useState('latest');

  const [filters, setFilters] = useState(defaultFilters);

  const [searchQuery, setSearchQuery] = useState('');

  const debouncedQuery = useDebounce(searchQuery);

  // const { posts, postsLoading } = useGetPosts();

  const { searchResults, searchLoading } = useSearchPosts(debouncedQuery);

  useEffect(() => {
    if (isSuccess) {

      // console.log(news)

      const newNews = news.map((item: any) => {
        // console.log(item)
        return {
          id: item.id,
          title: item.title,
          // tags: ['string'],
          // publish: 'published',
          content: item.content,
          coverUrl: 'https://telegra.ph/file/8fbdfb8c7a4a258a79aaf.jpg',
          // totalViews: 1,
          // totalShares: 1,
          description: item.content,
        }

      })

      setNewPosts(newNews)
    }
  }, [news])


  const [newPosts, setNewPosts] = useState([{
    id: '8',
    title: 'First News',
    // tags: ['string'],
    // publish: 'published',
    content: 'string, string, string, string, string, string, string, string, string, string, string, string, string, string, ',
    coverUrl: 'https://telegra.ph/file/8fbdfb8c7a4a258a79aaf.jpg',
    // totalViews: 1,
    // totalShares: 1,
    description: 'string, string, string, string, string, string, string, string, string, string, string, string, string',
    // totalComments: 1,
    // totalFavorites: 1,
    // metaTitle: 'string;',
    // metaKeywords: ['string'],
    // metaDescription: 'string;',
    // comments: [
    //   {
    //     id: 'string',
    //     name: 'string',
    //     avatarUrl: 'string',
    //     message: 'string',
    //     postedAt: new Date(),
    //     users: [{
    //         id: 'string',
    //         name: 'string',
    //         avatarUrl: 'string',
    //     }],
    //     replyComment: [{
    //         id: 'string',
    //         userId: 'string',
    //         message: 'string',
    //         postedAt: new Date(),
    //         tagUser: 'string',
    //     }],
    // }
    // ],
    // createdAt: new Date(),
    // favoritePerson: [{
    //   name: 'string;',
    //   avatarUrl: 'string;',
    // }],
    // author: {
    //   name: 'string;',
    //   avatarUrl: 'string;',
    // },
  },
  ])

  const dataFiltered = applyFilter({
    inputData: news,
    filters,
    sortBy,
  });

  const handleSortBy = useCallback((newValue: string) => {
    setSortBy(newValue);
  }, []);

  const handleFilters = useCallback((name: string, value: IPostFilterValue) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSearch = useCallback((inputValue: string) => {
    setSearchQuery(inputValue);
  }, []);

  const handleFilterPublish = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      handleFilters('publish', newValue);
    },
    [handleFilters]
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={t('list')}
        links={[
          {
            name: t('dashboard'),
            href: paths.dashboard.root,
          },
          {
            name: t('blog'),
            href: paths.dashboard.post.root,
          },
          {
            name: t('list'),
          },
        ]}
        // action={
        //   <Button
        //     component={RouterLink}
        //     href={paths.dashboard.post.new}
        //     variant="contained"
        //     startIcon={<Iconify icon="mingcute:add-line" />}
        //   >
        //     {t('new_post')}
        //   </Button>
        // }
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Stack
        spacing={3}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-end', sm: 'center' }}
        direction={{ xs: 'column', sm: 'row' }}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        <PostSearch
          query={debouncedQuery}
          results={searchResults}
          onSearch={handleSearch}
          loading={searchLoading}
          hrefItem={(title: string) => paths.dashboard.post.details(title)}
        />

        <PostSort sort={sortBy} onSort={handleSortBy} sortOptions={POST_SORT_OPTIONS()} />
      </Stack>

      <Tabs
        value={filters.publish}
        onChange={handleFilterPublish}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        {[
          'all', 
          // 'published', 
          // 'draft'
        ].map((tab) => (
          <Tab
            key={tab}
            iconPosition="end"
            value={tab}
            label={
              tab === 'all' && t('all') ||
              tab === 'published' && t('published') ||
              tab === 'draft' && t('draft')
            }
            icon={
              <Label
                variant={((tab === 'all' || tab === filters.publish) && 'filled') || 'soft'}
                color={(tab === 'published' && 'info') || 'default'}
              >
                {tab === 'all' && newPosts.length}

                {/* {tab === 'published' && newPosts.filter((post) => post.publish === 'published').length} */}

                {/* {tab === 'draft' && newPosts.filter((post) => post.publish === 'draft').length} */}
              </Label>
            }
            sx={{ textTransform: 'capitalize' }}
          />
        ))}
      </Tabs>

      <PostListHorizontal posts={newPosts} loading={isLoading} />
    </Container>
  );
}

// ----------------------------------------------------------------------

const applyFilter = ({
  inputData,
  filters,
  sortBy,
}: {
  inputData: IPostItem[];
  filters: IPostFilters;
  sortBy: string;
}) => {
  const { publish } = filters;

  if (sortBy === 'latest') {
    inputData = orderBy(inputData, ['createdAt'], ['desc']);
  }

  if (sortBy === 'oldest') {
    inputData = orderBy(inputData, ['createdAt'], ['asc']);
  }

  if (sortBy === 'popular') {
    inputData = orderBy(inputData, ['totalViews'], ['desc']);
  }

  if (publish !== 'all') {
    inputData = inputData.filter((post) => post.publish === publish);
  }

  return inputData;
};
