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
                <h1>Crafting Digital Worlds with a Bit of Mischief</h1>
              </Copy>
            </div>

            <div className="hero-footer-outer">
              <Copy animateOnScroll={false} delay={isInitialLoad ? 6.35 : 1.65}>
                <p className="sm">&copy; Codegrid Dept.</p>
                <p className="sm">( Workroom 101 )</p>
              </Copy>
            </div>

            <div className="hero-footer">
              <Copy animateOnScroll={false} delay={isInitialLoad ? 6.05 : 1.15}>
                <p className="lg">
                  We build visuals, stories, and systems for people who like
                  their creativity a little unpredictable.
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
                <h1>a content creation studio</h1>
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
                Polite Chaos is a creative studio shaping digital worlds through
                motion, color, and story. We blend art and technology to create
                visuals that move not only on screen but in emotion. Every
                project is treated like a short film, designed to feel alive,
                cinematic, and intentional.
              </p>

              <p className="lg">
                Our work explores the edges of digital expression, from still
                sketches to fluid 3D experiences. We collaborate with brands,
                artists, and creators who believe design can feel like art and
                art can solve real problems. We like ideas that start strange
                and end beautiful.
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
                  From motion to concept, pieces born from quiet sketches, late
                  nights, and just the right amount of chaos.
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
                  Unfiltered thoughts from the people who survived our creative
                  process. Or at least that’s what they told us.
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
