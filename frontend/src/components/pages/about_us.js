import React from 'react'
// import './about.css'
function about_us() {
    return (
        <div>
            <section>
                <div class="container">
                    <h1 class="heading">Meet the Team</h1>
                    <div class="card-wrapper">
                        <div class="card">
                            <img src="Images/card-bg.jpeg" alt="card background" class="card.img" />
                            <img src="Images/img1.jpeg" alt="profile_Image" class="profile-img" />
                            <h1>Michel john</h1>
                            <p class="job-title">Lead Designer</p>
                            <p class="about">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. It has survived not only five centuries, but also the leap into 
                                electronic typesetting, remaining essentially unchanged. It was popularised in 
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including 
                                versions of Lorem Ipsum.
                            </p>
                            <a href="/" class="btn">Contact</a>
                            <ul class="social-media">
                                <li><a href="/"><i class="fab fa-facebook-square"></i></a></li>
                                <li><a href="/"><i class="fab fa-twitter-square"></i></a></li>
                                <li><a href="/"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="/"><i class="fab fa-google-plus-square"></i></a></li>
                            </ul>
                        </div>

                        <div class="card">
                            <img src="Images/card-bg.jpeg" alt="card background" class="card.img" />
                            <img src="Images/img2.jpeg" alt="profile_Image" class="profile-img" />
                            <h1>Charlie lawson</h1>
                            <p class="job-title">Web Developer</p>
                            <p class="about">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. It has survived not only five centuries, but also the leap into 
                                electronic typesetting, remaining essentially unchanged. It was popularised in 
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including 
                                versions of Lorem Ipsum.
                            </p>
                            <a href="/" class="btn">Contact</a>
                            <ul class="social-media">
                                <li><a href="/"><i class="fab fa-facebook-square"></i></a></li>
                                <li><a href="/"><i class="fab fa-twitter-square"></i></a></li>
                                <li><a href="/"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="/"><i class="fab fa-google-plus-square"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default about_us;
