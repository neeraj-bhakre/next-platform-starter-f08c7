"use client"

import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from 'next/image'

export function BusinessPartners() {
    // Sample partner logos - using your actual SVG files
    const allPartners = [
        { name: 'Westin', logo: '/images/Wetin.svg' },
        { name: 'Summit', logo: '/images/summit.svg' },
        { name: 'Holcim', logo: '/images/holcim.svg' },
        { name: 'ETV', logo: '/images/etv.svg' },
        { name: 'Westin', logo: '/images/Wetin.svg' },
        
    ]

    // Slick carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    }
    
    return (
        <section className="py-5 bg-gray-50">
            <div className="container mx-auto px-4 py-4 business-partners">
                <h2 className="text-center mb-12 pb-5">BUSINESS PARTNERS</h2>
                
                {/* Slick Carousel Container */}
                <div className="max-w-6xl mx-auto">
                    <Slider {...settings}>
                        {allPartners.map((partner, index) => (
                            <div key={index} className="px-3">
                                <div className="pb-4">
                                    <Image 
                                        src={partner.logo} 
                                        alt={partner.name}
                                        height={140}
                                        width={140}
                                        className="max-w-full max-h-full object-contain"
                                        onError={(e) => {
                                            // Fallback to text if image fails to load
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                  
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}
