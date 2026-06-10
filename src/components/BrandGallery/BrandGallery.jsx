"use client";
import "./BrandGallery.css";
import { brandGalleryItems } from "./galleryItems.js";
import Copy from "@/components/Copy/Copy";

export default function BrandGallery() {
  return (
    <div className="brand-gallery">
      <div className="brand-gallery-grid">
        <div className="brand-gallery-note">
          <Copy animateOnScroll={true}>
            <p className="lg">
              Plated Stories is a creative content agency specializing 
              <br />in visual storytelling for F&amp;B and lifestyle brands. 
              <br />From concept development and shoot planning to production, editing and content
              delivery, we manage the entire creative process end-to-end.
            </p>
          </Copy>
        </div>

        {brandGalleryItems.map((item) => (
          <div
            key={item.id}
            className={`brand-gallery-item brand-gallery-item--${item.position}`}
          >
            <div className="brand-gallery-item-img">
              <img src={item.img} alt={item.label} />
            </div>
            <div className="brand-gallery-item-label">
              <p className="sm">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
