import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { CustomerExperience } from '../components/customer-experience';
import { BusinessPartners } from '../components/business-partners';
import { IpdcAtGlance } from '../components/ipdc-at-glance';
import { Newsletter } from '../components/newsletter';
import { BootstrapClient } from '../components/bootstrap-client';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className='font-styles'>
                <BootstrapClient />
                <Header />
                {/* <main className="grow">{children}</main> */}
                <CustomerExperience />
                <BusinessPartners />
                <IpdcAtGlance />
                <Newsletter />
                <Footer />
            </body>
        </html>
    );
}
