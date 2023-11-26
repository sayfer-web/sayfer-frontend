import { useEffect, useCallback, useState } from 'react';
// @mui
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import AvatarGroup, { avatarGroupClasses } from '@mui/material/AvatarGroup';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
// utils
import { fShortenNumber } from 'src/utils/format-number';
// _mock
import { POST_PUBLISH_OPTIONS } from 'src/_mock';
// api
import { useGetPost } from 'src/api/blog';
// components
import Iconify from 'src/components/iconify';
import Markdown from 'src/components/markdown';
import EmptyContent from 'src/components/empty-content';
//
import PostDetailsHero from '../post-details-hero';
import PostCommentList from '../post-comment-list';
import PostCommentForm from '../post-comment-form';
import { PostDetailsSkeleton } from '../post-skeleton';
import PostDetailsToolbar from '../post-details-toolbar';
import { useLocales } from 'src/locales';
import { useGetNewsByIdQuery } from 'src/app/features/news/newsApiSlice';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function PostDetailsView({ id }: Props) {

  console.log(id)

  const { t } = useLocales()

  const [publish, setPublish] = useState('');

  // const { post, postLoading, postError } = useGetPost(title);


  const oldPost = {
    id: '1',
    title: 'Title',
    // tags?: [''];
    // publish?: '';
    content: 'Content',
    coverUrl: 'https://telegra.ph/file/8fbdfb8c7a4a258a79aaf.jpg',
    // metaTitle?: string;
    // totalViews?: number;
    // totalShares?: number;
    description: 'Description',
    // totalComments?: number;
    // totalFavorites?: number;
    // metaKeywords?: string[];
    // metaDescription?: string;
    // comments?: IPostComment[];
    // createdAt?: Date;
    // favoritePerson?: {
    // name: string;
    // avatarUrl: string;
    // }[];
  }

  const [post, setPost] = useState(oldPost)

  const { data: currentPost, isLoading, isSuccess, isError, error } = useGetNewsByIdQuery(id)

  console.log(currentPost)

  useEffect(() => {
    if (isSuccess && !error) {

      const newPost = {
        id: currentPost.id,
        title: currentPost.title,
        // tags?: [''];
        // publish?: '';
        content: currentPost.content,
        coverUrl: currentPost.coverUrl,
        // metaTitle?: string;
        // totalViews?: number;
        // totalShares?: number;
        description: 'Desc',
        // totalComments?: number;
        // totalFavorites?: number;
        // metaKeywords?: string[];
        // metaDescription?: string;
        // comments?: IPostComment[];
        // createdAt?: Date;
        // favoritePerson?: {
        // name: string;
        // avatarUrl: string;
        // }[];
      }

      console.log(newPost)
      setPost(newPost)
    }
  }, [currentPost])

  const handleChangePublish = useCallback((newValue: string) => {
    setPublish(newValue);
  }, []);

  // useEffect(() => {
  //   if (post) {
  //     setPublish(post?.publish);
  //   }
  // }, [post]);

  const renderSkeleton = <PostDetailsSkeleton />;

  const POST_PUBLISH_OPTIONS_ARR = POST_PUBLISH_OPTIONS()

  const renderError = (
    <EmptyContent
      filled
      title={`${error}`}
      action={
        <Button
          component={RouterLink}
          href={paths.dashboard.post.root}
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" width={16} />}
          sx={{ mt: 3 }}
        >
          {t('back')}
        </Button>
      }
      sx={{
        py: 20,
      }}
    />
  );

  const renderPost = post && (
    <>
      <PostDetailsToolbar
        backLink={paths.dashboard.post.root}
        editLink={paths.dashboard.post.edit(`${post?.title}`)}
        liveLink={paths.post.details(`${post?.title}`)}
        publish={publish || ''}
        onChangePublish={handleChangePublish}
        publishOptions={POST_PUBLISH_OPTIONS_ARR}
      />

      <PostDetailsHero title={post.title} coverUrl={post.coverUrl} />

      <Stack
        sx={{
          maxWidth: 720,
          mx: 'auto',
          mt: { xs: 5, md: 10 },
        }}
      >
        <Typography variant="subtitle1" sx={{ mb: 5 }}>
          {post.description}
        </Typography>

        <Markdown children={post.content} />

        {/* <Stack
          spacing={3}
          sx={{
            py: 3,
            borderTop: (theme) => `dashed 1px ${theme.palette.divider}`,
            borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          <Stack direction="row" flexWrap="wrap" spacing={1}>
            {post.tags.map((tag) => (
              <Chip key={tag} label={tag} variant="soft" />
            ))}
          </Stack>

          <Stack direction="row" alignItems="center">
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  size="small"
                  color="error"
                  icon={<Iconify icon="solar:heart-bold" />}
                  checkedIcon={<Iconify icon="solar:heart-bold" />}
                />
              }
              // label={fShortenNumber(post.totalFavorites)}
              label={fShortenNumber(1)}
              sx={{ mr: 1 }}
            />

            <AvatarGroup
              sx={{
                [`& .${avatarGroupClasses.avatar}`]: {
                  width: 32,
                  height: 32,
                },
              }}
            >
              {post.favoritePerson.map((person) => (
                <Avatar key={person.name} alt={person.name} src={person.avatarUrl} />
              ))}
            </AvatarGroup>
          </Stack>
        </Stack> */}
        {/* 
        <Stack direction="row" sx={{ mb: 3, mt: 5 }}>
          <Typography variant="h4">{t('comments')}</Typography>

          <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
            ({post.comments.length})
            
          </Typography>
        </Stack>

        <PostCommentForm />

        <Divider sx={{ mt: 5, mb: 2 }} /> */}

        {/* <PostCommentList comments={post.comments} /> */}
      </Stack>
    </>
  );

  return (
    <Container maxWidth={false}>
      {isLoading && renderSkeleton}

      {/* {isError && renderError} */}

      {post && renderPost}
    </Container>
  );
}
