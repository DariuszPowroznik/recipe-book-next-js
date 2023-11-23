import Link from 'next/link';

import { paths } from 'src/shared/const/paths';
import { translations } from 'src/shared/const/translations';

import styled from './Logo.module.scss';

export type LogoProps = {
  big?: boolean;
};

export async function Logo({ big }: LogoProps) {
  return (
    <Link href={paths.home} className={`${styled.wrapper} ${big ? styled.big : ''}`}>
      <span className={styled.prefix}>{translations.pl.appName.firstPart}</span>
      <span className={styled.subfix}>{translations.pl.appName.secondPart}</span>
    </Link>
  );
}
