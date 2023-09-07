import * as yup from 'yup';

export const chefValidationSchema = yup.object().shape({
  name: yup.string().required(),
  specialty: yup.string().required(),
  experience_years: yup.number().integer().required(),
  working_hours: yup.string().required(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
