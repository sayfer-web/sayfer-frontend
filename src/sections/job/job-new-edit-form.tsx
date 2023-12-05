import * as Yup from 'yup';
import { useMemo, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import ButtonBase from '@mui/material/ButtonBase';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// _mock
import {
  _roles,
  JOB_SKILL_OPTIONS,
  JOB_BENEFIT_OPTIONS,
  JOB_EXPERIENCE_OPTIONS,
  JOB_EMPLOYMENT_TYPE_OPTIONS,
  JOB_WORKING_SCHEDULE_OPTIONS,
} from 'src/_mock';
// assets
import { countries } from 'src/assets/data';
// components
import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
  RHFEditor,
  RHFSwitch,
  RHFTextField,
  RHFRadioGroup,
  RHFAutocomplete,
  RHFMultiCheckbox,
} from 'src/components/hook-form';
// types
import { IJobItem } from 'src/types/job';
import { useLocales } from 'src/locales';

// ----------------------------------------------------------------------

type Props = {
  currentJob?: IJobItem;
};

export default function JobNewEditForm({ currentJob }: Props) {

  const { t } = useLocales()

  // const jobEmploymentTypeOptions = JOB_EMPLOYMENT_TYPE_OPTIONS()
  const jobSkillOptions = JOB_SKILL_OPTIONS()
  const jobBenefitOptions = JOB_BENEFIT_OPTIONS()
  const jobExperienceOptions = JOB_EXPERIENCE_OPTIONS()
  const jobEmploymentTypeOptions = JOB_EMPLOYMENT_TYPE_OPTIONS()
  const jobWorkingScheduleOptions = JOB_WORKING_SCHEDULE_OPTIONS()
  // const 

  const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  const { enqueueSnackbar } = useSnackbar();

  const NewJobSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    content: Yup.string().required('Content is required'),
    employmentTypes: Yup.array().min(1, 'Choose at least one option'),
    role: Yup.string().required('Role is required'),
    skills: Yup.array().min(1, 'Choose at least one option'),
    workingSchedule: Yup.array().min(1, 'Choose at least one option'),
    benefits: Yup.array().min(1, 'Choose at least one option'),
    locations: Yup.array().min(1, 'Choose at least one option'),
    expiredDate: Yup.mixed<any>().nullable().required('Expired date is required'),
    salary: Yup.object().shape({
      type: Yup.string(),
      price: Yup.number().min(1, 'Price is required'),
      negotiable: Yup.boolean(),
    }),
    experience: Yup.string(),
  });

  const defaultValues = useMemo(
    () => ({
      title: currentJob?.title || '',
      content: currentJob?.content || '',
      employmentTypes: currentJob?.employmentTypes || [],
      experience: currentJob?.experience || '1 year exp',
      role: currentJob?.role || _roles[1],
      skills: currentJob?.skills || [],
      workingSchedule: currentJob?.workingSchedule || [],
      locations: currentJob?.locations || [],
      benefits: currentJob?.benefits || [],
      expiredDate: currentJob?.expiredDate || null,
      salary: currentJob?.salary || {
        type: 'Hourly',
        price: 0,
        negotiable: false,
      },
    }),
    [currentJob]
  );

  const methods = useForm({
    resolver: yupResolver(NewJobSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (currentJob) {
      reset(defaultValues);
    }
  }, [currentJob, defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(currentJob ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.job.root);
      console.info('DATA', data);
    } catch (error) {
      // console.error(error);
    }
  });

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
            <Stack spacing={1.5}>
              <Typography variant="subtitle2">{t('title')}</Typography>
              <RHFTextField name="title" placeholder={t('ex_software_engineer')} />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">{t('content')}</Typography>
              <RHFEditor simple name="content" />
            </Stack>
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const renderProperties = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            {t('properties')}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {t('additional_functions_and_attributes')}
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title={t('properties')} />}

          <Stack spacing={3} sx={{ p: 3 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle2">{t('employment_type')}</Typography>
              <RHFMultiCheckbox
                row
                spacing={4}
                name="employmentTypes"
                options={jobEmploymentTypeOptions}
              />
            </Stack>

            <Stack spacing={1}>
              <Typography variant="subtitle2">{t('experience')}</Typography>
              <RHFRadioGroup row spacing={4} name="experience" options={JOB_EXPERIENCE_OPTIONS()} />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">{t('role')}</Typography>
              <RHFAutocomplete
                name="role"
                autoHighlight
                options={_roles.map((option) => option)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => (
                  <li {...props} key={option}>
                    {option}
                  </li>
                )}
              />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">{t('skills')}</Typography>
              <RHFAutocomplete
                name="skills"
                placeholder={`+ ${t('skills')}`}
                multiple
                disableCloseOnSelect
                options={JOB_SKILL_OPTIONS().map((option) => option)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => (
                  <li {...props} key={option}>
                    {option}
                  </li>
                )}
                renderTags={(selected, getTagProps) =>
                  selected.map((option, index) => (
                    <Chip
                      {...getTagProps({ index })}
                      key={option}
                      label={option}
                      size="small"
                      color="info"
                      variant="soft"
                    />
                  ))
                }
              />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">{t('working_schedule')}</Typography>
              <RHFAutocomplete
                name="workingSchedule"
                placeholder={`+ ${t('schedule')}`}
                multiple
                disableCloseOnSelect
                options={jobWorkingScheduleOptions.map((option) => option)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => (
                  <li {...props} key={option}>
                    {option}
                  </li>
                )}
                renderTags={(selected, getTagProps) =>
                  selected.map((option, index) => (
                    <Chip
                      {...getTagProps({ index })}
                      key={option}
                      label={option}
                      size="small"
                      color="info"
                      variant="soft"
                    />
                  ))
                }
              />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">{t('locations')}</Typography>
              <RHFAutocomplete
                name="locations"
                placeholder={`+ ${t('locations')}`}
                multiple
                disableCloseOnSelect
                options={countries.map((option) => option.label)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => {
                  const { code, label, phone } = countries.filter(
                    (country) => country.label === option
                  )[0];

                  if (!label) {
                    return null;
                  }

                  return (
                    <li {...props} key={label}>
                      <Iconify
                        key={label}
                        icon={`circle-flags:${code.toLowerCase()}`}
                        width={28}
                        sx={{ mr: 1 }}
                      />
                      {label} ({code}) +{phone}
                    </li>
                  );
                }}
                renderTags={(selected, getTagProps) =>
                  selected.map((option, index) => (
                    <Chip
                      {...getTagProps({ index })}
                      key={option}
                      label={option}
                      size="small"
                      color="info"
                      variant="soft"
                    />
                  ))
                }
              />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">{t('expired')}</Typography>
              <Controller
                name="expiredDate"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <DatePicker
                    {...field}
                    format="dd/MM/yyyy"
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: !!error,
                        helperText: error?.message,
                      },
                    }}
                  />
                )}
              />
            </Stack>

            <Stack spacing={2}>
              <Typography variant="subtitle2">{t('salary')}</Typography>

              <Controller
                name="salary.type"
                control={control}
                render={({ field }) => (
                  <Box gap={2} display="grid" gridTemplateColumns="repeat(2, 1fr)">
                    {[
                      {
                        label: 'Hourly',
                        icon: <Iconify icon="solar:clock-circle-bold" width={32} sx={{ mb: 2 }} />,
                      },
                      {
                        label: 'Custom',
                        icon: <Iconify icon="solar:wad-of-money-bold" width={32} sx={{ mb: 2 }} />,
                      },
                    ].map((item) => (
                      <Paper
                        component={ButtonBase}
                        variant="outlined"
                        key={item.label}
                        onClick={() => field.onChange(item.label)}
                        sx={{
                          p: 2.5,
                          borderRadius: 1,
                          typography: 'subtitle2',
                          flexDirection: 'column',
                          ...(item.label === field.value && {
                            borderWidth: 2,
                            borderColor: 'text.primary',
                          }),
                        }}
                      >
                        {item.icon}
                        {item.label}
                      </Paper>
                    ))}
                  </Box>
                )}
              />

              <RHFTextField
                name="salary.price"
                placeholder="0.00"
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box sx={{ typography: 'subtitle2', color: 'text.disabled' }}>$</Box>
                    </InputAdornment>
                  ),
                }}
              />
              <RHFSwitch name="salary.negotiable" label={t('salary_is_negotiable')} />
            </Stack>

            <Stack spacing={1}>
              <Typography variant="subtitle2">{t('benefits')}</Typography>
              <RHFMultiCheckbox
                name="benefits"
                options={JOB_BENEFIT_OPTIONS()}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                }}
              />
            </Stack>
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const renderActions = (
    <>
      {mdUp && <Grid md={4} />}
      <Grid xs={12} md={8} sx={{ display: 'flex', alignItems: 'center' }}>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label={t('publish')}
          sx={{ flexGrow: 1, pl: 3 }}
        />

        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          loading={isSubmitting}
          sx={{ ml: 2 }}
        >
          {!currentJob ? t('create_job') : t('save_changes')}
        </LoadingButton>
      </Grid>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {renderDetails}

        {renderProperties}

        {renderActions}
      </Grid>
    </FormProvider>
  );
}
