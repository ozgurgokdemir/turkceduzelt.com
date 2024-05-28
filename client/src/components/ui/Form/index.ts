import Form from './Form';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import FormControl from './FormControl';
import FormMessage from './FormMessage';
import FormField from './FormField';

const FormCompound = Object.assign(Form, {
  Item: FormItem,
  Label: FormLabel,
  Control: FormControl,
  Message: FormMessage,
  Field: FormField,
});

export default FormCompound;
