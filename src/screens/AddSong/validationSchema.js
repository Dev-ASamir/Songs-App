import * as yup from 'yup';

yup.setLocale({
  mixed: {
    required: 'Required Filed',
  },
  string: {
    min: 'Min Charcater',
    max: 'Max Charcater',
  },
  number: {
    min: 'Min Length',
    max: 'Max Lenght',
  },
});
export const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).max(50),
  artist: yup.string().required().min(1).max(50),
  level: yup.number().required().min(1).max(15),
});
