import LocaleSync from '@/components/shared/LocaleSync';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (lang !== 'en' && lang !== 'ar') {
    notFound();
  }

  return (
    <>
      <LocaleSync lang={lang} />
      {children}
    </>
  );
}
