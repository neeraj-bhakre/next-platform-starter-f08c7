import Image from 'next/image';
import Link from 'next/link';
import ipdcFinanceLogo from 'public/ipdc-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';
import searchLogo from 'public/images/search.svg';
import callLogo from 'public/images/call.svg';
import facebookLogo from 'public/images/facebook.svg';
import YouTubeLogo from 'public/images/youtube.svg';
import linkedInLogo from 'public/images/linkedin.svg';
import instagram from 'public/images/instagram.svg';


const navItems = [
    { linkText: 'RETAIL', href: '/' },
    { linkText: 'SME', href: '/revalidation' },
    { linkText: 'CORPORATE', href: '/image-cdn' },
    { linkText: 'ABOUT US', href: '/edge' },
    { linkText: 'COVID 19', href: '/blobs' },
    { linkText: 'CAMPGAINS', href: '/classics' }
];

export function Header() {
    return (
        <>

            <section className='overflow-hidden hero-section-wrapper'>
                <div className="container navigation-section">
                    <nav className="d-flex justify-content-between align-items-center py-3">
                        <div className='d-flex align-items-center gap-5'>
                            <Link href="/">
                                <Image src={ipdcFinanceLogo} alt="IPDC Finance logo" />
                            </Link>
                            {!!navItems?.length && (
                                <ul className="d-flex justify-content-center ms-xl-5 ps-xl-5 mb-0 gap-5 list-unstyled">
                                    {navItems.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.href} className="nav-menu">
                                                {item.linkText}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className='align-items-center d-flex gap-4'>
                            <Link href="/search" className='pe-3'>
                                <Image src={searchLogo} alt="Search Logo" width={22} height={22} className="cursor-pointer" />
                            </Link>
                            <button className='btn btn-primary px-4 fw-medium fs-6'>iSERVICE</button>
                        </div>
                    </nav>
                </div>
                <div className="container hero-section pb-5">
                    <div className="row">
                        <div className="col-md-5">
                            <div className='d-flex flex-column justify-content-between h-100'>
                                <div className='mb-5 pb-5'>
                                    <h1 className="mt-5 pt-5 pb-3">Chase Your Dream with us</h1>
                                    <p className="mb-4 w-75 fs-6 fw-normal pb-3">
                                        The harder you work for something, the greater you’ll feel when you achieve it.
                                    </p>
                                    <div className='gap-2 d-flex'>
                                        <button className='btn btn-primary px-4 py-2 fw-normal fs-6'>APPLY ONLINE</button>
                                        <button className='btn btn-outline-primary px-4 py-2 fw-normal fs-6'>LOAN CALCULATOR</button>
                                    </div>
                                </div>
                                <div className="social-media-icons mt-5 pt-4 d-flex gap-4 align-items-end">
                                    <div className='d-flex align-items-center gap-2 vertical-hr'>
                                        <Link href="/">
                                            <Image src={callLogo} alt="Call Logo" width={20} height={20} className="inline-block mr-2" />
                                        </Link>
                                        <span className='contact-no-text'>16519</span>
                                    </div>
                                    <div className='d-flex align-items-center gap-3 ms-2'>
                                        <Link href="/">
                                            <Image src={facebookLogo} alt="Facebook Logo" width={18} height={18} className="inline-block" />
                                        </Link>
                                        <Link href="/">
                                            <Image src={YouTubeLogo} alt="Youtube Logo" width={18} height={18} className="inline-block" />
                                        </Link>
                                        <Link href="/">
                                            <Image src={linkedInLogo} alt="LinkedIn Logo" width={18} height={18} className="inline-block" />
                                        </Link>
                                        <Link href="/">
                                            <Image src={instagram} alt="LinkedIn Logo" width={18} height={18} className="inline-block" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Image src="/images/hero-image.png" alt="Hero Image" width={810} height={680} className="hero-img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
