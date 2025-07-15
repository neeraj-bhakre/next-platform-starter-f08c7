import Link from 'next/link';
import Image from 'next/image';
import callLogo from 'public/images/call.svg';

export function Footer() {
    const footerSections = [
        {
            title: "About the company",
            links: [
                { text: "Learn To Love Growth And Change And You Will Be A Success. Microsoft Patch", href: "/about" }
            ],
            showSocial: true
        },
        {
            title: "Products",
            links: [
                { text: "CSR Activities", href: "/csr" },
                { text: "Green Banking", href: "/green-banking" },
                { text: "News", href: "/news" },
                { text: "Ongoing Campaign", href: "/campaigns" },
                { text: "Updates", href: "/updates" }
            ]
        },
        {
            title: "Get Started",
            links: [
                { text: "Career", href: "/career" },
                { text: "Contact Us", href: "/contact" },
                { text: "Government Securities", href: "/securities" },
                { text: "Examples", href: "/examples" },
                { text: "NIS", href: "/nis" }
            ]
        },
        {
            title: "About",
            links: [
                { text: "IPDC at a Glance", href: "/glance" },
                { text: "Mission, Vision & Values", href: "/mission" },
                { text: "Corporate Governance", href: "/governance" },
                { text: "Shareholders", href: "/shareholders" },
                { text: "Investor Relations", href: "/investors" }
            ]
        },
        {
            title: "",
            showContact: true
        }
    ];

    const socialIcons = [
        { name: "Facebook", icon: "facebook", href: "#", color: "text-blue-600" },
        { name: "YouTube", icon: "youtube", href: "#", color: "text-red-600" },
        { name: "LinkedIn", icon: "linkedin", href: "#", color: "text-blue-700" },
        { name: "Instagram", icon: "instagram", href: "#", color: "text-pink-600" }
    ];

    return (
        <section>
            <div className="container footer-section py-5">
                <div className='d-grid grid-cols-5'>
                    {footerSections.map((section, index) => (
                        <div key={index} className={`${index === 0 || index === 4 ? '' : ''}`}>
                            <h3 className="mb-4">{section.title}</h3>
                            <ul className="list-unstyled">
                                {section.links && section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className="mb-2">
                                        <Link href={link.href} className={`${index === 0  ? 'text-decoration-none w-75 d-block' : 'text-decoration-none d-block'}`}>
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                                {section.showSocial && (
                                    <div className='mt-4'>
                                        {socialIcons.map((icon, iconIndex) => (
                                            <Link key={iconIndex} href={icon.href} className={`text-decoration-none ${icon.color} me-3`}>
                                                <i className={`fab fa-${icon.icon}`}></i>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                                {section.showContact && (
                                    <div className="d-flex gap-2 align-items-center">
                                        <Link href="/">
                                    <Image src={callLogo} alt="Call Logo" width={24} height={24} className="inline-block mr-2" />
                                </Link>
                                <span className='contact-no-text fw-semibold'>16519</span>
                                    </div>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
    );
}
