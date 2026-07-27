export default function TurkishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="tr" className="localized-site localized-site-tr">{children}</div>;
}
