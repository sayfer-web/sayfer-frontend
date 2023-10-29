import * as Yup from 'yup';
import { useCallback, useMemo, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// _mock
import { _tags } from 'src/_mock';
// types
import { IPostItem } from 'src/types/blog';
// components
import { CustomFile } from 'src/components/upload';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
  RHFEditor,
  RHFUpload,
  RHFTextField,
  RHFAutocomplete,
} from 'src/components/hook-form';
//
import PostDetailsPreview from './post-details-preview';
import { useLocales } from 'src/locales';
import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

type Props = {
  currentPost?: IPostItem;
};

export default function PostNewEditForm({ currentPost }: Props) {

  const { t } = useLocales()



  // const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  // const { enqueueSnackbar } = useSnackbar();

  // const preview = useBoolean();

  // const NewBlogSchema = Yup.object().shape({
  //   title: Yup.string().required('Title is required'),
  //   description: Yup.string().required('Description is required'),
  //   content: Yup.string().required('Content is required'),
  //   coverUrl: Yup.mixed<any>().nullable().required('Cover is required'),
  //   tags: Yup.array().min(2, 'Must have at least 2 tags'),
  //   metaKeywords: Yup.array().min(1, 'Meta keywords is required'),
  //   // not required
  //   metaTitle: Yup.string(),
  //   metaDescription: Yup.string(),
  // });

  // const defaultValues = useMemo(
  //   () => ({
  //     title: currentPost?.title || '',
  //     description: currentPost?.description || '',
  //     content: currentPost?.content || '',
  //     coverUrl: currentPost?.coverUrl || null,
  //     tags: currentPost?.tags || [],
  //     metaKeywords: currentPost?.metaKeywords || [],
  //     metaTitle: currentPost?.metaTitle || '',
  //     metaDescription: currentPost?.metaDescription || '',
  //   }),
  //   [currentPost]
  // );

  // const methods = useForm({
  //   resolver: yupResolver(NewBlogSchema),
  //   defaultValues,
  // });

  // const {
  //   reset,
  //   watch,
  //   setValue,
  //   handleSubmit,
  //   formState: { isSubmitting, isValid },
  // } = methods;

  // const values = watch();

  // useEffect(() => {
  //   if (currentPost) {
  //     reset(defaultValues);
  //   }
  // }, [currentPost, defaultValues, reset]);

  const onSubmit = async (data: any) => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 500));
      // reset();
      // preview.onFalse();
      // enqueueSnackbar(currentPost ? 'Update success!' : 'Create success!');
      // router.push(paths.dashboard.post.root);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  };

  // const handleDrop = useCallback(
  //   (acceptedFiles: File[]) => {
  //     const file = acceptedFiles[0];

  //     const newFile = Object.assign(file, {
  //       preview: URL.createObjectURL(file),
  //     });

  //     if (file) {
  //       setValue('coverUrl', newFile, { shouldValidate: true });
  //     }
  //   },
  //   [setValue]
  // );

  // const handleRemoveFile = useCallback(() => {
  //   setValue('coverUrl', null);
  // }, [setValue]);

  const renderDetails = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            {t('details')}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {t('title_short_description_image')}
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title={t('details')} />}

          <Stack spacing={3} sx={{ p: 3 }}>
          <TextField
            type="password"
            id="password"
            label={t('title')}
            // value={pwd}
            autoComplete="on"
            InputLabelProps={{}}
            sx={{ 
              "& input:-webkit-autofill": {
                '-webkit-box-shadow': '0 0 0 100px #000 inset',
                '-webkit-text-fill-color': '#fff',
              }
            }}
            required
            // onChange={(value) => setPwd(value.target.value)}
            // onFocus={() => toggleFocusPwd(true)}
            // onBlur={() => toggleFocusPwd(false)}
          />

          <TextField
            type="password"
            id="password"
            label={t('content')}
            multiline
            rows={3}
            // value={pwd}
            autoComplete="on"
            InputLabelProps={{}}
            sx={{ 
              "& input:-webkit-autofill": {
                '-webkit-box-shadow': '0 0 0 100px #000 inset',
                '-webkit-text-fill-color': '#fff',
              },
            }}
            required
            // onChange={(value) => setPwd(value.target.value)}
            // onFocus={() => toggleFocusPwd(true)}
            // onBlur={() => toggleFocusPwd(false)}
          />


            {/* <RHFTextField name="title" label={t('post_title')} /> */}

            {/* <RHFTextField name="description" label={t('description')} multiline rows={3} /> */}

            {/* <Stack spacing={1.5}>
              <Typography variant="subtitle2">{t('content')}</Typography>
              <RHFEditor simple name="content" />
            </Stack> */}

            {/* <Stack spacing={1.5}>
              <Typography variant="subtitle2">{t('cover')}</Typography>
              <RHFUpload
                name="coverUrl"
                maxSize={3145728}
                onDrop={handleDrop}
                onDelete={handleRemoveFile}
              />
            </Stack> */}
          </Stack>
        </Card>
      </Grid>
    </>
  );

  // const renderProperties = (
  //   <>
  //     {mdUp && (
  //       <Grid md={4}>
  //         <Typography variant="h6" sx={{ mb: 0.5 }}>
  //           {t('properties')}
  //         </Typography>
  //         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
  //           {t('additional_functions_and_attributes')}
  //         </Typography>
  //       </Grid>
  //     )}

  //     <Grid xs={12} md={8}>
  //       <Card>
  //         {!mdUp && <CardHeader title="Properties" />}

  //         <Stack spacing={3} sx={{ p: 3 }}>
  //           <RHFAutocomplete
  //             name="tags"
  //             label={t('tags')}
  //             placeholder={`+ ${t('tags')}`}
  //             multiple
  //             freeSolo
  //             options={_tags.map((option) => option)}
  //             getOptionLabel={(option) => option}
  //             renderOption={(props, option) => (
  //               <li {...props} key={option}>
  //                 {option}
  //               </li>
  //             )}
  //             renderTags={(selected, getTagProps) =>
  //               selected.map((option, index) => (
  //                 <Chip
  //                   {...getTagProps({ index })}
  //                   key={option}
  //                   label={option}
  //                   size="small"
  //                   color="info"
  //                   variant="soft"
  //                 />
  //               ))
  //             }
  //           />

  //           <RHFTextField name="metaTitle" label="Meta title" />

  //           <RHFTextField
  //             name="metaDescription"
  //             label="Meta description"
  //             fullWidth
  //             multiline
  //             rows={3}
  //           />

  //           <RHFAutocomplete
  //             name="metaKeywords"
  //             label="Meta keywords"
  //             placeholder="+ Keywords"
  //             multiple
  //             freeSolo
  //             disableCloseOnSelect
  //             options={_tags.map((option) => option)}
  //             getOptionLabel={(option) => option}
  //             renderOption={(props, option) => (
  //               <li {...props} key={option}>
  //                 {option}
  //               </li>
  //             )}
  //             renderTags={(selected, getTagProps) =>
  //               selected.map((option, index) => (
  //                 <Chip
  //                   {...getTagProps({ index })}
  //                   key={option}
  //                   label={option}
  //                   size="small"
  //                   color="info"
  //                   variant="soft"
  //                 />
  //               ))
  //             }
  //           />

  //           <FormControlLabel control={<Switch defaultChecked />} label={t('enable_comments')} />
  //         </Stack>
  //       </Card>
  //     </Grid>
  //   </>
  // );

  const renderActions = (
    <>
      {mdUp && <Grid md={4} />}
      <Grid xs={12} md={8} sx={{ display: 'flex', alignItems: 'center' }}>
        {/* <FormControlLabel
          control={<Switch defaultChecked />}
          label={t('publish')}
          sx={{ flexGrow: 1, pl: 3 }}
        /> */}

        {/* <Button color="inherit" variant="outlined" size="large" onClick={preview.onTrue}>
          {t('preview')}
        </Button> */}

        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          loading={false}
          sx={{ ml: 2 }}
        >
          {!currentPost ? t('create_post') : t('save_changes')}
        </LoadingButton>
      </Grid>
    </>
  );

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {renderDetails}

        {/* {renderProperties} */}

        {renderActions}
      </Grid>

      {/* <PostDetailsPreview
        title={values.title}
        content={values.content}
        description={values.description}
        coverUrl={
          typeof values.coverUrl === 'string'
            ? values.coverUrl
            : `${(values.coverUrl as CustomFile)?.preview}`
        }
        //
        open={preview.value}
        isValid={isValid}
        isSubmitting={isSubmitting}
        onClose={preview.onFalse}
        onSubmit={onSubmit}
      /> */}
    </form>
  );
}
