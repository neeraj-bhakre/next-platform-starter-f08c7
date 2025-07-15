import React from 'react'

export function Newsletter() {
    return (
        <section className='newsletter py-5'>
            <div className="container">
                <div className=' py-5'>
                <h2 className='pb-2'>Newsletter</h2>
                <div>
                    <p className='mb-4 w-50 px-lg-5 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis aliquam arcu lacus.</p>
                    <form className=''>
                        <div className="row justify-content-center w-50 mx-auto">
                            <div className="col-lg-6 col-md-6 mb-md-0 mb-4 offset-lg-1 offset-md-1">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className='border p-2 w-100 rounded'
                                />
                            </div>
                            <div className="col-lg-3 col-md-4 text-start">
                                <button
                                    type="submit"
                                    className='btn btn-primary px-4 py-2 fw-normal fs-6'
                                >
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
            </div>
        </section>

    )
}
