import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export function IpdcAtGlance() {
  return (
    <section>
      <div className='ipdc-at-glance pb-5'>
        <div className='row gx-0 align-items-center'>
          <div className="col-md-5 image-section">
            <Image src="/images/ipdc-section-image.svg" alt="Hero Image" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
          <div className="col-md-6 offset-md-1 ">
            <div className='p-5'>
              <div className='pe-5 me-5 content-section'>
                <h2 className='pb-2'>IPDC AT A GLANCE</h2>
                <p className='mb-4 w-75 pb-4'>IPDC Finance Limited (previously known as "Industrial Promotion and Development Company of Bangladesh Limited") is the first private sector financial institution of the country established in 1981 by a distinguished group of shareholders namely International Finance Corporation (IFC), USA, German Investment and Development Company (DEG), Germany, The Aga Khan Fund for Economic Development (AKFED), Switzerland, Commonwealth Development Corporation (CDC), UK and the Government of Bangladesh</p>
                <div className='d-flex align-items-center gap-2'>
                  <Link href='#' className='txt-primary text-decoration-none d-flex align-items-center'>
                  <div className='me-2  '>Read More</div>
                  <Image src="/images/arrow-right.svg" alt="Read More" width={15} height={15} className="inline-block" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
