import React from 'react'

const Blog = () => {
    return (
        <>
            <section class="blog-area section-gap" id="blog">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="menu-content pb-70 col-lg-8">
                            <div class="title text-center">
                                <h1 class="mb-10">Latest From Our Blog</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 single-blog">
                            <div class="thumb">
                                <img class="img-fluid" src="img/b1.jpg" alt=""/>
                            </div>
                            <p class="date">20 AUG 2023</p>
                            <a href="blog-single.html"><h4>Modern Dental Care</h4></a>
                            <p>
                                We provide best dental solutions using modern tools and Indian expertise.</p>
                            <div class="meta-bottom d-flex justify-content-between">
                                <p><span class="lnr lnr-heart"></span> 15 Likes</p>
                                <p><span class="lnr lnr-bubble"></span> 02 Comments</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 single-blog">
                            <div class="thumb">
                                <img class="img-fluid" src="img/b2.jpg" alt=""/>
                            </div>
                            <p class="date">20 AUG 2023</p>
                            <a href="blog-single.html"><h4>Why Regular Dental Checkups Matter</h4></a>
                            <p>
                                Prevent cavities, gum issues, and save on expensive treatments through routine visits.</p>
                            <div class="meta-bottom d-flex justify-content-between">
                                <p><span class="lnr lnr-heart"></span> 15 Likes</p>
                                <p><span class="lnr lnr-bubble"></span> 02 Comments</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 single-blog">
                            <div class="thumb">
                                <img class="img-fluid" src="img/b3.jpg" alt=""/>
                            </div>
                            <p class="date">20 AUG 2023</p>
                            <a href="blog-single.html"><h4>5 Signs of Unhealthy Gums</h4></a>
                            <p>
                                Bleeding, swelling, or bad breath? Learn when to consult your dentist.</p>
                            <div class="meta-bottom d-flex justify-content-between">
                                <p><span class="lnr lnr-heart"></span> 15 Likes</p>
                                <p><span class="lnr lnr-bubble"></span> 02 Comments</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 single-blog">
                            <div class="thumb">
                                <img class="img-fluid" src="img/b4.jpg" alt=""/>
                            </div>
                            <p class="date">20 AUG 2023</p>
                            <a href="blog-single.html"><h4>Tips for Kids' Dental Hygiene</h4></a>
                            <p>
                                Easy daily routines and tips to keep your child’s teeth strong and cavity-free.</p>
                            <div class="meta-bottom d-flex justify-content-between">
                                <p><span class="lnr lnr-heart"></span> 15 Likes</p>
                                <p><span class="lnr lnr-bubble"></span> 02 Comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Blog;