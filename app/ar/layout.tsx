export default function ArabicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="ar" dir="rtl" className="localized-site localized-site-ar">{children}</div>;
}
