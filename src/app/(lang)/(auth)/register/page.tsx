import { RegisterPageComponent } from 'src/components/pages';
import { translations } from 'src/shared/const/translations';

const text = translations.pl;

export const metadata = {
  title: `${text.authentication.register} | ${text.appName.fullName}`,
};
export default function RegisterPage() {
  return <RegisterPageComponent />;
}
