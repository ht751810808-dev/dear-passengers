export default function ChineseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="zh-CN" className="localized-site localized-site-zh">{children}</div>;
}
