import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  number_of_guests: yup.number().integer().required(),
  guest_name: yup.string().required(),
  guest_phone: yup.string().required(),
  restaurant_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
