export default function RussianLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="ru" className="localized-site localized-site-ru">{children}</div>;
}
