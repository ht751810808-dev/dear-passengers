export default function GermanLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="de" className="localized-site localized-site-de">{children}</div>;
}
