import Head from 'next/head';
import { siteConfig } from '../config/site';
import Navbar from './Navbar';

export default function Layout({ children, title, description }) {
    const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
    const pageDescription = description || siteConfig.description;
    const ogImage = siteConfig.ogImage || '/og-image.png';

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                {/* Open Graph */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={siteConfig.social.github} />
                <meta property="og:image" content={ogImage} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={ogImage} />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": siteConfig.name,
                            "jobTitle": "Cloud & Full Stack Developer",
                            "url": siteConfig.social.github,
                            "sameAs": Object.values(siteConfig.social),
                            "worksFor": {
                                "@type": "Organization",
                                "name": siteConfig.name
                            }
                        })
                    }}
                />
            </Head>
            <div className="min-h-screen bg-gray-900">
                <Navbar />
                {children}
            </div>
        </>
    );
}
