import '@/web/styles/global.css';

export const metadata = {
  authors: [
    {
      name: 'kienmai',
    },
  ],
  creator: 'kienmai',
  title: 'Task management app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="bg-neutral-100 font-sans text-slate-800 antialiased"
      lang="en"
    >
      <head />
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
