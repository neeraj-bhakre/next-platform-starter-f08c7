import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import facebookLogo from '../public/images/facebook.svg'

import integrityLogo from '../public/images/integrity.svg'
import demonstrateLogo from '../public/images/demonstrate.svg'
import diversityLogo from '../public/images/diversity.svg'
import teamworkLogo from '../public/images/teamwork.svg'
import technologyLogo from '../public/images/technology.svg'
import corporateLogo from '../public/images/corporate.svg'
import digitalLogo from '../public/images/digital.svg'

export function CustomerExperience() {
    return (
        <>
            <section className='py-5'>
                <div className='container customer-experience-section py-5'>
                    <div className="text-center">
                        <h1 className="mb-3">Creating Extraordinary Customer Experience</h1>
                        <p className='w-50 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum eget morbi dignissim eu pharetra consequat montes, sagittis.</p>
                    </div>
                    <div className='card-section pt-5'>
                        <div className="row px-lg-5 py-3">
                            <div className='col-lg-3 col-md-6 mb-4 px-md-0 px-5'>
                                <div className='pe-lg-5'>
                                    <Link href="/">
                                        <Image src={integrityLogo} alt="Integrity Logo" width={37} height={37} className="inline-block mr-2" />
                                    </Link>
                                    <h3>Integrity</h3>
                                    <p>Displaying the highest level of Integrity in the way we conduct our business</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 mb-4 px-md-0 px-5'>
                                <div className="pe-lg-5">
                                    <Link href="/">
                                        <Image src={demonstrateLogo} alt="Demonstrate Logo" width={37} height={37} className="inline-block mr-2" />
                                    </Link>
                                    <h3>Demonstrate</h3>
                                    <p>Demonstrating a strong Will to Win in the market place</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 mb-4 px-md-0 px-5'>
                                <div className="pe-lg-5">
                                    <Link href="/">
                                        <Image src={diversityLogo} alt="Diversity Logo" width={37} height={37} className="inline-block mr-2" />
                                    </Link>
                                    <h3>Diversity</h3>
                                    <p>Promoting Diversity in the work place and community</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 mb-4 px-md-0 px-5'>
                                <div className="pe-lg-5">
                                    <Link href="/">
                                        <Image src={teamworkLogo} alt="Teamwork Logo" width={37} height={37} className="inline-block mr-2" />
                                    </Link>
                                    <h3>Teamwork</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A semper aenean id pen</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 mb-4 px-md-0 px-5'>
                                 <div className="pe-lg-5">
                                    <Link href="/">
                                        <Image src={integrityLogo} alt="Collaboration Logo" width={37} height={37} className="inline-block mr-2" />
                                    </Link>
                                    <h3>Collaboration</h3>
                                    <p>Displaying the highest level of Integrity in the way we conduct our business</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 mb-4 px-md-0 px-5'>
                                 <div className="pe-lg-5">
                                    <Link href="/">
                                        <Image src={technologyLogo} alt="Technology Logo" width={37} height={37} className="inline-block mr-2" />
                                    </Link>
                                    <h3>Technology</h3>
                                    <p>Harnessing the power of Technology to deliver better customer experience</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 mb-4 px-md-0 px-5'>
                                 <div className="pe-lg-5">
                                    <Link href="/">
                                        <Image src={corporateLogo} alt="Corporate Logo" width={37} height={37} className="inline-block mr-2" />
                                    </Link>
                                    <h3>Corporate</h3>
                                    <p>Setting the standard for the best Corporate Citizenship in the communities we work</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 mb-4 px-md-0 px-5'>
                                 <div className="pe-lg-5">
                                    <Link href="/">
                                        <Image src={digitalLogo} alt="Digital Logo" width={37} height={37} className="inline-block mr-2" />
                                    </Link>
                                    <h3>Digital</h3>
                                    <p>Setting the standard for the best Corporate Citizenship in the communities we work</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
