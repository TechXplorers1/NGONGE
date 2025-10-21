
import type { Metadata } from 'next';
import { Inter, Montserrat, Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], variable: '--font-code' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-headline' });

export const metadata: Metadata = {
  title: {
    default: 'Federal Logistics & Facility Support | NGONGE LLC',
    template: '%s | NGONGE LLC',
  },
  description: 'Providing mission-ready logistics, IT, and facility support for federal operations.',
  keywords: ['government contracting', 'logistics', 'facility support', 'IT modernization', 'federal agencies'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('min-h-screen font-body antialiased', inter.variable, sourceCodePro.variable, montserrat.variable)}>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
