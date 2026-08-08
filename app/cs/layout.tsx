export default function CzechLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="cs" className="localized-site localized-site-cs">{children}</div>;
}
