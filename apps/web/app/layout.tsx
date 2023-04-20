import { Inter } from 'next/font/google';
import '@/web/styles/global.css';
import { siteConfig } from '../config/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  authors: [
    {
      name: 'kienmai',
      url: siteConfig.links,
    },
  ],
  creator: 'kienmai',
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components'],
  manifest: `${siteConfig.url}/site.webmanifest`,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
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
      <body className={`min-h-screen ${inter.className}`}>{children}</body>
    </html>
  );
}
