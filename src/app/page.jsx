"use client";
import "./home.css";
import Button from "@/components/Button/Button";
import Showreel from "@/components/Showreel/Showreel";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import TeamCards from "@/components/TeamCards/TeamCards";
import ClientReviews from "@/components/ClientReviews/ClientReviews";
import Spotlight from "@/components/Spotlight/Spotlight";
import CTACard from "@/components/CTACard/CTACard";
import Footer from "@/components/Footer/Footer";
import Copy from "@/components/Copy/Copy";
import Preloader, { isInitialLoad } from "@/components/Preloader/Preloader";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <>
      <Preloader />
      <section className="hero">
        <div className="container">
          <div className="hero-content-main">
            <div className="hero-header">
              <Copy animateOnScroll={false} delay={isInitialLoad ? 5.75 : 0.75}>
                <h1>We craft stories that people can taste</h1>
              </Copy>
            </div>

            <div className="hero-footer-outer">
              <Copy animateOnScroll={false} delay={isInitialLoad ? 6.35 : 1.65}>
                <p className="sm">&copy; Plated Stories</p>
                <p className="sm">( Creative Content Agency )</p>
              </Copy>
            </div>

            <div className="hero-footer">
              <Copy animateOnScroll={false} delay={isInitialLoad ? 6.05 : 1.15}>
                <p className="lg">
                  We create high-quality visual content for restaurants, cafes,
                  lifestyle brands and entrepreneurs that goes beyond aesthetics.
                  Through strategic storytelling, creativity and premium
                  production, we help brands build meaningful connections and
                  stand out in a crowded digital world.
                </p>
              </Copy>

              <Button delay={isInitialLoad ? 6.35 : 1.55} href="/studio">
                Visit the Studio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Showreel />

      <div className="home-studio-section">
        <section className="studio-header">
          <div className="container">
            <div className="studio-header-row">
              <Copy delay={0.8}>
                <h1>
                  We are{" "}
                  <span className="studio-brand-text">Plated Stories</span>
                </h1>
              </Copy>
            </div>

            <div className="studio-header-row">
              <Copy delay={0.95}>
                <h1>a creative content agency</h1>
              </Copy>
            </div>
          </div>
        </section>

        <section className="studio-copy">
          <div className="container">
            <div className="studio-copy-img">
              <img src="/studio/studio-header.jpg" alt="" />
            </div>

            <Copy animateOnScroll={true}>
              <p className="lg">
                Plated Stories is a creative content agency specializing in
                visual storytelling for F&amp;B and lifestyle brands. From
                concept development and shoot planning to production, editing and
                content delivery, we manage the entire creative process
                end-to-end. Our work combines strategy, creativity and
                high-quality execution to create content that not only looks
                beautiful but also communicates a brand&rsquo;s identity, engages
                its audience and supports business growth. Whether it&rsquo;s a
                cafe, restaurant, home baker, jewellery brand or interior design
                studio, we help brands tell stories that people remember.
              </p>

              <p className="lg">
                In a world overflowing with content, numbers alone aren&rsquo;t
                enough. At Plated Stories, we combine premium production with
                strategic storytelling to create content that resonates with
                audiences and aligns with business goals. We don&rsquo;t believe
                in creating content for the sake of posting &mdash; we focus on
                crafting stories that build communities, strengthen brand
                identity and drive meaningful engagement. Every project is
                approached with creativity, attention to detail and a commitment
                to delivering work that reflects the unique essence of the brand.
              </p>
            </Copy>
          </div>
        </section>

        <TeamCards />
      </div>

      <section className="featured-work">
        <div className="container">
          <div className="featured-work-header-content">
            <div className="featured-work-header">
              <Copy animateOnScroll={true} delay={0.25}>
                <h1>Featured Work</h1>
              </Copy>
            </div>

            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 32 32"
                fill="none"
                className="icon"
              >
                <path
                  d="M16 26.6665L16 5.33317"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22.6667 19.9999L16 26.6665L9.33337 19.9998"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>

            <div className="featured-work-header-copy">
              <Copy animateOnScroll={true} delay={0.25}>
                <p className="lg">
                  A look at the brands we&rsquo;ve helped grow &mdash; content
                  built on storytelling, strategy and premium production across
                  food, hospitality and lifestyle.
                </p>
              </Copy>
            </div>
          </div>

          <FeaturedWork />
        </div>
      </section>

      <section className="client-reviews-header-container">
        <div className="container">
          <div className="client-reviews-header-content">
            <div className="client-reviews-header">
              <Copy animateOnScroll={true} delay={0.25}>
                <h1>People Approved</h1>
              </Copy>
            </div>

            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 32 32"
                fill="none"
                className="icon"
              >
                <path
                  d="M16 26.6665L16 5.33317"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22.6667 19.9999L16 26.6665L9.33337 19.9998"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>

            <div className="client-reviews-header-copy">
              <Copy animateOnScroll={true} delay={0.25}>
                <p className="lg">
                  Honest words from the founders and brands we&rsquo;ve worked
                  closely with to bring their stories to life.
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </section>

      <ClientReviews />

      <Spotlight />

      <CTACard />

      <Footer />
    </>
  );
};

export default Page;
