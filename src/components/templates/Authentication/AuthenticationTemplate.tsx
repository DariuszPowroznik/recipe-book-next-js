import { Logo } from 'src/components/atoms/Logo/Logo';

import styles from './AuthenticationTemplate.module.scss';

type AuthenticationLayoutPropsType = { children: React.ReactNode };

export function AuthenticationLayout({ children }: AuthenticationLayoutPropsType) {
  return (
    <div className={styles.wrapper}>
      <Logo big />
      {children}
    </div>
  );
}
