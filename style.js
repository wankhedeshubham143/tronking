/**
* Template Name: NewBiz - v2.1.0
* Template URL: https://bootstrapmade.com/newbiz-bootstrap-business-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/

body {
    background: #fff;
    color: #444;
    font-family: "Open Sans", sans-serif;
}

a {
    color: #007bff;
    transition: 0.5s;
}

a:hover,
a:active,
a:focus {
    color: #0b6bd3;
    outline: none;
    text-decoration: none;
}

p {
    padding: 0;
    margin: 0 0 30px 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    margin: 0 0 20px 0;
    padding: 0;
}

/* Back to top button */

.back-to-top {
    position: fixed;
    display: none;
    background: #007bff;
    color: #fff;
    width: 44px;
    height: 44px;
    text-align: center;
    line-height: 1;
    font-size: 16px;
    border-radius: 50%;
    right: 15px;
    bottom: 15px;
    transition: background 0.5s;
    z-index: 11;
}

.back-to-top i {
    padding-top: 12px;
    color: #fff;
}

@media (max-width: 768px) {
    .back-to-top {
        bottom: 15px;
    }
}

/* Prelaoder */

#preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    overflow: hidden;
    background: #fff;
}

#preloader:before {
    content: "";
    position: fixed;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
    border: 6px solid #f2f2f2;
    border-top: 6px solid #007bff;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    -webkit-animation: animate-preloader 1s linear infinite;
    animation: animate-preloader 1s linear infinite;
}

@-webkit-keyframes animate-preloader {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes animate-preloader {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/

#header {
    height: 80px;
    transition: all 0.5s;
    z-index: 997;
    transition: all 0.5s;
    padding: 20px 0;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.3);
}

#header.header-scrolled {
    height: 60px;
    padding: 10px 0;
}

@media (max-width: 991px) {
    #header {
        height: 60px;
        padding: 10px 0;
    }
}

#header .logo h1 {
    font-size: 36px;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 400;
    letter-spacing: 3px;
    text-transform: uppercase;
}

@media (max-width: 991px) {
    #header .logo h1 {
        font-size: 28px;
        padding: 8px 0;
    }
}

#header .logo h1 a,
#header .logo h1 a:hover {
    color: #00366f;
    text-decoration: none;
}

#header .logo img {
    padding: 0;
    margin: 7px 0;
    max-height: 26px;
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/

/* Desktop Navigation */

.main-nav {
    /* Drop Down */
    /* Deep Drop Down */
}

.main-nav,
.main-nav * {
    margin: 0;
    padding: 0;
    list-style: none;
}

.main-nav>ul>li {
    position: relative;
    white-space: nowrap;
    float: left;
}

.main-nav a {
    display: block;
    position: relative;
    color: #004289;
    padding: 10px 15px;
    transition: 0.3s;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
}

.main-nav a:hover,
.main-nav .active>a,
.main-nav li:hover>a {
    color: #007bff;
    text-decoration: none;
}

.main-nav .drop-down ul {
    display: block;
    position: absolute;
    left: 0;
    top: calc(100% + 30px);
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    padding: 10px 0;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: ease all 0.3s;
}

.main-nav .drop-down:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
}

.main-nav .drop-down li {
    min-width: 180px;
    position: relative;
}

.main-nav .drop-down ul a {
    padding: 10px 20px;
    font-size: 13px;
    color: #004289;
}

.main-nav .drop-down ul a:hover,
.main-nav .drop-down ul .active>a,
.main-nav .drop-down ul li:hover>a {
    color: #007bff;
}

.main-nav .drop-down>a:after {
    content: "\f107";
    font-family: FontAwesome;
    padding-left: 10px;
}

.main-nav .drop-down .drop-down ul {
    top: 0;
    left: calc(100% - 30px);
}

.main-nav .drop-down .drop-down:hover>ul {
    opacity: 1;
    top: 0;
    left: 100%;
}

.main-nav .drop-down .drop-down>a {
    padding-right: 35px;
}

.main-nav .drop-down .drop-down>a:after {
    content: "\f105";
    position: absolute;
    right: 15px;
}

/* Mobile Navigation */

.mobile-nav {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 9999;
    overflow-y: auto;
    left: -260px;
    width: 260px;
    padding-top: 18px;
    background: rgba(19, 39, 57, 0.8);
    transition: 0.4s;
}

.mobile-nav * {
    margin: 0;
    padding: 0;
    list-style: none;
}

.mobile-nav a {
    display: block;
    position: relative;
    color: #fff;
    padding: 10px 20px;
    font-weight: 500;
}

.mobile-nav a:hover,
.mobile-nav .active>a,
.mobile-nav li:hover>a {
    color: #74b5fc;
    text-decoration: none;
}

.mobile-nav .drop-down>a:after {
    content: "\f078";
    font-family: FontAwesome;
    padding-left: 10px;
    position: absolute;
    right: 15px;
}

.mobile-nav .active.drop-down>a:after {
    content: "\f077";
}

.mobile-nav .drop-down>a {
    padding-right: 35px;
}

.mobile-nav .drop-down ul {
    display: none;
    overflow: hidden;
}

.mobile-nav .drop-down li {
    padding-left: 20px;
}

.mobile-nav-toggle {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9998;
    border: 0;
    background: none;
    font-size: 24px;
    transition: all 0.4s;
    outline: none !important;
    line-height: 1;
    cursor: pointer;
    text-align: right;
}

.mobile-nav-toggle i {
    margin: 18px 18px 0 0;
    color: #004289;
}

.mobile-nav-overly {
    width: 100%;
    height: 100%;
    z-index: 9997;
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(19, 39, 57, 0.8);
    overflow: hidden;
    display: none;
}

.mobile-nav-active {
    overflow: hidden;
}

.mobile-nav-active .mobile-nav {
    left: 0;
}

.mobile-nav-active .mobile-nav-toggle i {
    color: #fff;
}

/*--------------------------------------------------------------
# Intro Section
--------------------------------------------------------------*/

#intro {
    width: 100%;
    position: relative;
    background: url("../img/intro-bg.png") center bottom no-repeat;
    background-size: cover;
    padding: 200px 0 120px 0;
}

@media (max-width: 991px) {
    #intro {
        padding: 140px 0 60px 0;
    }
}

@media (max-width: 574px) {
    #intro {
        padding: 100px 0 20px 0;
    }
}

#intro .intro-img {
    width: 50%;
    float: right;
}

@media (max-width: 991px) {
    #intro .intro-img {
        width: 80%;
        float: none;
        margin: 0 auto 25px auto;
    }
}

#intro .intro-info {
    width: 50%;
    float: left;
}

@media (max-width: 991px) {
    #intro .intro-info {
        width: 80%;
        float: none;
        margin: auto;
        text-align: center;
    }
}

@media (max-width: 767px) {
    #intro .intro-info {
        width: 100%;
    }
}

#intro .intro-info h2 {
    color: #fff;
    margin-bottom: 40px;
    font-size: 48px;
    font-weight: 700;
}

#intro .intro-info h2 span {
    color: #74b5fc;
    text-decoration: underline;
}

@media (max-width: 767px) {
    #intro .intro-info h2 {
        font-size: 34px;
        margin-bottom: 30px;
    }
}

#intro .intro-info .btn-get-started,
#intro .intro-info .btn-services {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    display: inline-block;
    padding: 10px 32px;
    border-radius: 50px;
    transition: 0.5s;
    margin: 0 20px 20px 0;
    color: #fff;
}

#intro .intro-info .btn-get-started {
    background: #007bff;
    border: 2px solid #007bff;
    color: #fff;
}

#intro .intro-info .btn-get-started:hover {
    background: none;
    border-color: #fff;
    color: #fff;
}

#intro .intro-info .btn-services {
    border: 2px solid #fff;
}

#intro .intro-info .btn-services:hover {
    background: #007bff;
    border-color: #007bff;
    color: #fff;
}

/*--------------------------------------------------------------
# Sections
--------------------------------------------------------------*/

section {
    overflow: hidden;
}

/* Sections Header
--------------------------------*/

.section-header h3 {
    font-size: 36px;
    color: #283d50;
    text-align: center;
    font-weight: 500;
    position: relative;
}

.section-header p {
    text-align: center;
    margin: auto;
    font-size: 15px;
    padding-bottom: 60px;
    color: #556877;
    width: 50%;
}

@media (max-width: 767px) {
    .section-header p {
        width: 100%;
    }
}

/* Section with background
--------------------------------*/

.section-bg {
    background: #ecf5ff;
}

/*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/

.breadcrumbs {
    padding: 20px 0;
    background-color: #f5faff;
    min-height: 40px;
    margin-top: 80px;
}

@media (max-width: 992px) {
    .breadcrumbs {
        margin-top: 60px;
    }
}

.breadcrumbs h2 {
    font-size: 24px;
    font-weight: 300;
    margin: 0;
}

@media (max-width: 992px) {
    .breadcrumbs h2 {
        margin: 0 0 10px 0;
    }
}

.breadcrumbs ol {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 14px;
}

.breadcrumbs ol li+li {
    padding-left: 10px;
}

.breadcrumbs ol li+li::before {
    display: inline-block;
    padding-right: 10px;
    color: #6c757d;
    content: "/";
}

@media (max-width: 768px) {
    .breadcrumbs .d-flex {
        display: block !important;
    }
    .breadcrumbs ol {
        display: block;
    }
    .breadcrumbs ol li {
        display: inline-block;
    }
}

/* About Us Section
--------------------------------*/

#about {
    background: #fff;
    padding: 60px 0;
}

#about .about-container .background {
    margin: 20px 0;
}

#about .about-container .content {
    background: #fff;
}

#about .about-container .title {
    color: #333;
    font-weight: 700;
    font-size: 32px;
}

#about .about-container p {
    line-height: 26px;
}

#about .about-container p:last-child {
    margin-bottom: 0;
}

#about .about-container .icon-box {
    background: #fff;
    background-size: cover;
    padding: 0 0 30px 0;
}

#about .about-container .icon-box .icon {
    float: left;
    background: #fff;
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border-radius: 50%;
    border: 2px solid #007bff;
    transition: all 0.3s ease-in-out;
}

#about .about-container .icon-box .icon i {
    color: #007bff;
    font-size: 24px;
}

#about .about-container .icon-box:hover .icon {
    background: #007bff;
}

#about .about-container .icon-box:hover .icon i {
    color: #fff;
}

#about .about-container .icon-box .title {
    margin-left: 80px;
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 18px;
}

#about .about-container .icon-box .title a {
    color: #283d50;
}

#about .about-container .icon-box .description {
    margin-left: 80px;
    line-height: 24px;
    font-size: 14px;
}

#about .about-extra {
    padding-top: 60px;
}

#about .about-extra h4 {
    font-weight: 600;
    font-size: 24px;
}

/* Services Section
--------------------------------*/

#services {
    padding: 60px 0 40px 0;
    box-shadow: inset 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
}

#services .box {
    padding: 30px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    margin: 0 10px 40px 10px;
    background: #fff;
    box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
    transition: all 0.3s ease-in-out;
}

#services .box:hover {
    transform: translateY(-5px);
}

#services .icon {
    position: absolute;
    left: -10px;
    top: calc(50% - 32px);
}

#services .icon i {
    font-size: 64px;
    line-height: 1;
    transition: 0.5s;
}

#services .title {
    margin-left: 40px;
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 18px;
}

#services .title a {
    color: #111;
}

#services .box:hover .title a {
    color: #007bff;
}

#services .description {
    font-size: 14px;
    margin-left: 40px;
    line-height: 24px;
    margin-bottom: 0;
}

#why-us {
    padding: 60px 0;
    background: #004a99;
}

#why-us .section-header h3,
#why-us .section-header p {
    color: #fff;
}

#why-us .card {
    background: #00458f;
    border-color: #00458f;
    border-radius: 10px;
    margin: 0 15px;
    padding: 15px 0;
    text-align: center;
    color: #fff;
    transition: 0.3s ease-in-out;
    height: 100%;
}

@media (max-width: 991px) {
    #why-us .card {
        margin: 0;
    }
}

#why-us .card:hover {
    background: #003b7a;
    border-color: #003b7a;
}

#why-us .card i {
    font-size: 48px;
    padding-top: 15px;
    color: #bfddfe;
}

#why-us .card h5 {
    font-size: 22px;
    font-weight: 600;
}

#why-us .card p {
    font-size: 15px;
    color: #d8eafe;
}

#why-us .card .readmore {
    color: #fff;
    font-weight: 600;
    display: inline-block;
    transition: 0.3s ease-in-out;
    border-bottom: #00458f solid 2px;
}

#why-us .card .readmore:hover {
    border-bottom: #fff solid 2px;
}

#why-us .counters {
    padding-top: 40px;
}

#why-us .counters span {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 48px;
    display: block;
    color: #fff;
}

#why-us .counters p {
    padding: 0;
    margin: 0 0 20px 0;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    color: #cce5ff;
}

/* Portfolio Section
--------------------------------*/

#portfolio {
    padding: 60px 0;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
}

#portfolio #portfolio-flters {
    padding: 0;
    margin: 5px 0 35px 0;
    list-style: none;
    text-align: center;
}

#portfolio #portfolio-flters li {
    cursor: pointer;
    margin: 15px 15px 15px 0;
    display: inline-block;
    padding: 6px 20px;
    font-size: 12px;
    line-height: 20px;
    color: #007bff;
    border-radius: 50px;
    text-transform: uppercase;
    background: #ecf5ff;
    margin-bottom: 5px;
    transition: all 0.3s ease-in-out;
}

#portfolio #portfolio-flters li:hover,
#portfolio #portfolio-flters li.filter-active {
    background: #007bff;
    color: #fff;
}

#portfolio #portfolio-flters li:last-child {
    margin-right: 0;
}

#portfolio .portfolio-item {
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
}

#portfolio .portfolio-item .portfolio-wrap {
    overflow: hidden;
    position: relative;
    border-radius: 6px;
    margin: 0;
}

#portfolio .portfolio-item .portfolio-wrap:hover img {
    opacity: 0.4;
    transition: 0.3s;
}

#portfolio .portfolio-item .portfolio-wrap .portfolio-info {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    opacity: 0;
    transition: 0.2s linear;
}

#portfolio .portfolio-item .portfolio-wrap .portfolio-info h4 {
    font-size: 22px;
    line-height: 1px;
    font-weight: 700;
    margin-bottom: 14px;
    padding-bottom: 0;
}

#portfolio .portfolio-item .portfolio-wrap .portfolio-info h4 a {
    color: #fff;
}

#portfolio .portfolio-item .portfolio-wrap .portfolio-info h4 a:hover {
    color: #007bff;
}

#portfolio .portfolio-item .portfolio-wrap .portfolio-info p {
    padding: 0;
    margin: 0;
    color: #e2effe;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
}

#portfolio .portfolio-item .portfolio-wrap .portfolio-info .link-preview,
#portfolio .portfolio-item .portfolio-wrap .portfolio-info .link-details {
    display: inline-block;
    line-height: 1;
    text-align: center;
    width: 36px;
    height: 36px;
    background: #007bff;
    border-radius: 50%;
    margin: 10px 4px 0 4px;
}

#portfolio .portfolio-item .portfolio-wrap .portfolio-info .link-preview i,
#portfolio .portfolio-item .portfolio-wrap .portfolio-info .link-details i {
    padding-top: 6px;
    font-size: 22px;
    color: #fff;
}

#portfolio .portfolio-item .portfolio-wrap .portfolio-info .link-preview:hover,
#portfolio .portfolio-item .portfolio-wrap .portfolio-info .link-details:hover {
    background: #3395ff;
}

#portfolio .portfolio-item .portfolio-wrap .portfolio-info .link-preview:hover i,
#portfolio .portfolio-item .portfolio-wrap .portfolio-info .link-details:hover i {
    color: #fff;
}

#portfolio .portfolio-item .portfolio-wrap:hover {
    background: #003166;
}

#portfolio .portfolio-item .portfolio-wrap:hover .portfolio-info {
    opacity: 1;
}

/*--------------------------------------------------------------
# Portfolio Details
--------------------------------------------------------------*/

.portfolio-details {
    padding-top: 30px;
}

.portfolio-details .portfolio-details-container {
    position: relative;
}

.portfolio-details .portfolio-details-carousel {
    position: relative;
    z-index: 1;
}

.portfolio-details .portfolio-details-carousel .owl-nav,
.portfolio-details .portfolio-details-carousel .owl-dots {
    margin-top: 5px;
    text-align: left;
}

.portfolio-details .portfolio-details-carousel .owl-dot {
    display: inline-block;
    margin: 0 10px 0 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ddd !important;
}

.portfolio-details .portfolio-details-carousel .owl-dot.active {
    background-color: #007bff !important;
}

.portfolio-details .portfolio-info {
    padding: 30px;
    position: absolute;
    right: 0;
    bottom: -70px;
    background: #fff;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    z-index: 2;
}

.portfolio-details .portfolio-info h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
}

.portfolio-details .portfolio-info ul {
    list-style: none;
    padding: 0;
    font-size: 15px;
}

.portfolio-details .portfolio-info ul li+li {
    margin-top: 10px;
}

.portfolio-details .portfolio-description {
    padding-top: 50px;
}

.portfolio-details .portfolio-description h2 {
    width: 50%;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px;
}

.portfolio-details .portfolio-description p {
    padding: 0 0 0 0;
}

@media (max-width: 768px) {
    .portfolio-details .portfolio-description h2 {
        width: 100%;
    }
    .portfolio-details .portfolio-info {
        position: static;
        margin-top: 30px;
    }
}

/* Testimonials Section
--------------------------------*/

#testimonials {
    padding: 60px 0;
    box-shadow: inset 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
}

#testimonials .section-header {
    margin-bottom: 40px;
}

@media (max-width: 767px) {
    #testimonials .testimonial-item {
        text-align: center;
    }
}

#testimonials .testimonial-item .testimonial-img {
    width: 120px;
    border-radius: 50%;
    border: 4px solid #fff;
    float: left;
}

@media (max-width: 767px) {
    #testimonials .testimonial-item .testimonial-img {
        float: none;
        margin: auto;
    }
}

#testimonials .testimonial-item h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0 5px 0;
    color: #111;
    margin-left: 140px;
}

#testimonials .testimonial-item h4 {
    font-size: 14px;
    color: #999;
    margin: 0 0 15px 0;
    margin-left: 140px;
}

#testimonials .testimonial-item p {
    font-style: italic;
    margin: 0 0 15px 140px;
}

@media (min-width: 992px) {
    #testimonials .testimonial-item p {
        width: 80%;
    }
}

@media (max-width: 767px) {
    #testimonials .testimonial-item h3,
    #testimonials .testimonial-item h4,
    #testimonials .testimonial-item p {
        margin-left: 0;
    }
}

#testimonials .owl-nav,
#testimonials .owl-dots {
    margin-top: 5px;
    text-align: center;
}

#testimonials .owl-dot {
    display: inline-block;
    margin: 0 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ddd;
}

#testimonials .owl-dot.active {
    background-color: #007bff;
}

/* Team Section
--------------------------------*/

#team {
    background: #fff;
    padding: 60px 0;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
}

#team .member {
    text-align: center;
    margin-bottom: 20px;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
}

#team .member .member-info {
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    transition: 0.2s;
}

#team .member .member-info-content {
    margin-top: 50px;
    transition: margin 0.2s;
}

#team .member:hover .member-info {
    background: rgba(0, 62, 128, 0.7);
    opacity: 1;
    transition: 0.4s;
}

#team .member:hover .member-info-content {
    margin-top: 0;
    transition: margin 0.4s;
}

#team .member h4 {
    font-weight: 700;
    margin-bottom: 2px;
    font-size: 18px;
    color: #fff;
}

#team .member span {
    font-style: italic;
    display: block;
    font-size: 13px;
    color: #fff;
}

#team .member .social {
    margin-top: 15px;
}

#team .member .social a {
    transition: none;
    color: #fff;
}

#team .member .social a:hover {
    color: #007bff;
}

#team .member .social i {
    font-size: 18px;
    margin: 0 2px;
}

/* Clients Section
--------------------------------*/

#clients {
    padding: 60px 0;
    box-shadow: inset 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
}

#clients .clients-wrap {
    border-top: 1px solid #d6eaff;
    border-left: 1px solid #d6eaff;
    margin-bottom: 30px;
}

#clients .client-logo {
    padding: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #d6eaff;
    border-bottom: 1px solid #d6eaff;
    overflow: hidden;
    background: #fff;
    height: 160px;
}

#clients .client-logo:hover img {
    transform: scale(1.2);
}

#clients img {
    transition: all 0.4s ease-in-out;
}

/* Contact Section
--------------------------------*/

#contact {
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
    padding: 60px 0;
    overflow: hidden;
}

#contact .section-header {
    padding-bottom: 30px;
}

#contact .contact-about h3 {
    font-size: 36px;
    margin: 0 0 10px 0;
    padding: 0;
    line-height: 1;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #007bff;
}

#contact .contact-about p {
    font-size: 14px;
    line-height: 24px;
    font-family: "Montserrat", sans-serif;
    color: #888;
}

#contact .social-links {
    padding-bottom: 20px;
}

#contact .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #fff;
    color: #007bff;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
    border: 1px solid #007bff;
}

#contact .social-links a:hover {
    background: #007bff;
    color: #fff;
}

#contact .info {
    color: #283d50;
}

#contact .info i {
    font-size: 32px;
    color: #007bff;
    float: left;
    line-height: 1;
}

#contact .info p {
    padding: 0 0 10px 36px;
    line-height: 28px;
    font-size: 14px;
}

#contact .php-email-form .validate {
    display: none;
    color: red;
    margin: 0 0 15px 0;
    font-weight: 400;
    font-size: 13px;
}

#contact .php-email-form .error-message {
    display: none;
    color: #fff;
    background: #ed3c0d;
    text-align: left;
    padding: 15px;
    font-weight: 600;
}

#contact .php-email-form .error-message br+br {
    margin-top: 25px;
}

#contact .php-email-form .sent-message {
    display: none;
    color: #fff;
    background: #18d26e;
    text-align: center;
    padding: 15px;
    font-weight: 600;
}

#contact .php-email-form .loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;
}

#contact .php-email-form .loading:before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #18d26e;
    border-top-color: #eee;
    -webkit-animation: animate-loading 1s linear infinite;
    animation: animate-loading 1s linear infinite;
}

#contact .php-email-form input,
#contact .php-email-form textarea {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
}

#contact .php-email-form input::focus,
#contact .php-email-form textarea::focus {
    background-color: #007bff;
}

#contact .php-email-form input {
    padding: 20px 15px;
}

#contact .php-email-form textarea {
    padding: 12px 15px;
}

#contact .php-email-form button[type="submit"] {
    background: #007bff;
    border: 0;
    border-radius: 20px;
    padding: 8px 30px;
    color: #fff;
    transition: 0.3s;
}

#contact .php-email-form button[type="submit"]:hover {
    background: #0067d5;
    cursor: pointer;
}

@-webkit-keyframes animate-loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes animate-loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/

#footer {
    background: #00428a;
    padding: 0 0 30px 0;
    color: #eee;
    font-size: 14px;
}

#footer .footer-top {
    background: #004a99;
    padding: 60px 0 30px 0;
}

#footer .footer-top .footer-info {
    margin-bottom: 30px;
}

#footer .footer-top .footer-info h3 {
    font-size: 34px;
    margin: 0 0 20px 0;
    padding: 2px 0 2px 0;
    line-height: 1;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    font-weight: 400;
    letter-spacing: 3px;
    text-transform: uppercase;
}

#footer .footer-top .footer-info p {
    font-size: 13px;
    line-height: 24px;
    margin-bottom: 0;
    font-family: "Montserrat", sans-serif;
    color: #ecf5ff;
}

#footer .footer-top .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #007bff;
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
}

#footer .footer-top .social-links a:hover {
    background: #0067d5;
    color: #fff;
}

#footer .footer-top h4 {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 10px;
}

#footer .footer-top .footer-links {
    margin-bottom: 30px;
}

#footer .footer-top .footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

#footer .footer-top .footer-links ul li {
    padding: 8px 0;
}

#footer .footer-top .footer-links ul li:first-child {
    padding-top: 0;
}

#footer .footer-top .footer-links ul a {
    color: #ecf5ff;
}

#footer .footer-top .footer-links ul a:hover {
    color: #74b5fc;
}

#footer .footer-top .footer-contact {
    margin-bottom: 30px;
}

#footer .footer-top .footer-contact p {
    line-height: 26px;
}

#footer .footer-top .footer-newsletter {
    margin-bottom: 30px;
}

#footer .footer-top .footer-newsletter input[type="email"] {
    border: 0;
    padding: 6px 8px;
    width: 65%;
}

#footer .footer-top .footer-newsletter input[type="submit"] {
    background: #007bff;
    border: 0;
    width: 35%;
    padding: 6px 0;
    text-align: center;
    color: #fff;
    transition: 0.3s;
    cursor: pointer;
}

#footer .footer-top .footer-newsletter input[type="submit"]:hover {
    background: #0062cc;
}

#footer .copyright {
    text-align: center;
    padding-top: 30px;
}

#footer .credits {
    text-align: center;
    font-size: 13px;
    color: #f1f7ff;
}

#footer .credits a {
    color: #bfddfe;
}

#footer .credits a:hover {
    color: #f1f7ff;
}