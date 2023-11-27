import { LoginPageComponent } from 'src/components/pages';
import { translations } from 'src/shared/const/translations';

const text = translations.pl;

export const metadata = {
  title: `${text.authentication.login} | ${text.appName.fullName}`,
};
export default function LoginPage() {
  return <LoginPageComponent />;
}
