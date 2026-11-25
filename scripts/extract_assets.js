const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const uploadsDir = 'C:/Users/sompa/.gemini/antigravity/brain/d5890c69-babf-42c2-aab4-4e38014aeae9/.user_uploaded';

const IMAGES = {
  home: path.join(uploadsDir, 'media_1795080914589_6aa6c9ec.jpg'),
  about: path.join(uploadsDir, 'media_1795080914598_25c6cc39.jpg'),
  services: path.join(uploadsDir, 'media_1795080914571_ee825143.jpg'),
  gallery: path.join(uploadsDir, 'media_1795080914570_e3906129.jpg'),
  contact: path.join(uploadsDir, 'media_1795080914567_3c776588.jpg'),
  customDesign: path.join(uploadsDir, 'media_1795081400236_bef706ab.jpg'),
  repair: path.join(uploadsDir, 'media_1795081400208_efda6169.jpg'),
  customization: path.join(uploadsDir, 'media_1795081400220_b04db483.jpg'),
};

async function crop(src, dest, { left, top, width, height }) {
  try {
    const meta = await sharp(src).metadata();
    // Clamp to bounds
    const safeLeft = Math.max(0, Math.min(left, meta.width - 1));
    const safeTop = Math.max(0, Math.min(top, meta.height - 1));
    const safeWidth = Math.min(width, meta.width - safeLeft);
    const safeHeight = Math.min(height, meta.height - safeTop);

    await sharp(src)
      .extract({ left: safeLeft, top: safeTop, width: safeWidth, height: safeHeight })
      .jpeg({ quality: 92 })
      .toFile(dest);
    console.log(`Saved: ${dest} (${safeWidth}x${safeHeight})`);
  } catch (err) {
    console.error(`Error cropping ${dest}:`, err.message);
  }
}

async function main() {
  console.log('Extracting assets...');

  // 1. Grandfather Shri Swamy Nath Sah in vintage frame
  // From about page (682 x 1024)
  await crop(IMAGES.about, 'public/images/about/grandfather.jpg', {
    left: 30,
    top: 265,
    width: 228,
    height: 172
  });

  // 2. Ancestral village sketch
  await crop(IMAGES.about, 'public/images/about/village-sketch.jpg', {
    left: 285,
    top: 96,
    width: 145,
    height: 90
  });

  // 3. Gold bangles on wood table
  await crop(IMAGES.about, 'public/images/about/gold-bangles-craft.jpg', {
    left: 0,
    top: 800,
    width: 320,
    height: 180
  });

  // 4. Hero royal gold necklace
  await crop(IMAGES.home, 'public/images/home/hero-necklace.jpg', {
    left: 330,
    top: 72,
    width: 352,
    height: 200
  });

  // 5. 4 Service cards from home/services page
  await crop(IMAGES.services, 'public/images/services/service-custom-design.jpg', {
    left: 18,
    top: 268,
    width: 157,
    height: 108
  });

  await crop(IMAGES.services, 'public/images/services/service-repair.jpg', {
    left: 190,
    top: 268,
    width: 148,
    height: 108
  });

  await crop(IMAGES.services, 'public/images/services/service-customization.jpg', {
    left: 351,
    top: 268,
    width: 148,
    height: 108
  });

  await crop(IMAGES.services, 'public/images/services/service-making.jpg', {
    left: 512,
    top: 268,
    width: 153,
    height: 108
  });

  // 6. Traditional design sketch card
  await crop(IMAGES.home, 'public/images/home/traditional-sketch.jpg', {
    left: 182,
    top: 510,
    width: 90,
    height: 96
  });

  // 7. Urgent repair photo
  await crop(IMAGES.home, 'public/images/home/urgent-repair.jpg', {
    left: 562,
    top: 508,
    width: 112,
    height: 94
  });

  // 8. Presence woman
  await crop(IMAGES.home, 'public/images/home/presence-woman.jpg', {
    left: 23,
    top: 824,
    width: 234,
    height: 118
  });

  // 9. India gate sketch
  await crop(IMAGES.home, 'public/images/home/delhi-sketch.jpg', {
    left: 546,
    top: 825,
    width: 125,
    height: 90
  });

  // 10. Contact store sketch
  // Contact page is 935 x 1024
  await crop(IMAGES.contact, 'public/images/contact/store-sketch.jpg', {
    left: 540,
    top: 670,
    width: 375,
    height: 205
  });

  // Contact map preview
  await crop(IMAGES.contact, 'public/images/contact/map-preview.jpg', {
    left: 20,
    top: 686,
    width: 495,
    height: 195
  });

  // 11. Detail Page 1: Custom Jewellery Design
  await crop(IMAGES.customDesign, 'public/images/services/custom-sketch-hero.jpg', {
    left: 275,
    top: 72,
    width: 407,
    height: 180
  });

  await crop(IMAGES.customDesign, 'public/images/services/custom-necklace-velvet.jpg', {
    left: 326,
    top: 262,
    width: 334,
    height: 228
  });

  // Custom design gallery items
  await crop(IMAGES.customDesign, 'public/images/services/custom-gal-1.jpg', {
    left: 20,
    top: 717,
    width: 155,
    height: 110
  });
  await crop(IMAGES.customDesign, 'public/images/services/custom-gal-2.jpg', {
    left: 184,
    top: 717,
    width: 155,
    height: 110
  });
  await crop(IMAGES.customDesign, 'public/images/services/custom-gal-3.jpg', {
    left: 347,
    top: 717,
    width: 154,
    height: 110
  });
  await crop(IMAGES.customDesign, 'public/images/services/custom-gal-4.jpg', {
    left: 509,
    top: 717,
    width: 155,
    height: 110
  });

  // Gift box
  await crop(IMAGES.customDesign, 'public/images/services/gift-box.jpg', {
    left: 62,
    top: 865,
    width: 130,
    height: 90
  });

  // 12. Detail Page 2: Jewellery Repair & Restoration
  await crop(IMAGES.repair, 'public/images/services/repair-hero-artisan.jpg', {
    left: 335,
    top: 72,
    width: 347,
    height: 185
  });

  // Before / After repair cards
  await crop(IMAGES.repair, 'public/images/services/repair-before.jpg', {
    left: 300,
    top: 276,
    width: 186,
    height: 232
  });
  await crop(IMAGES.repair, 'public/images/services/repair-after.jpg', {
    left: 486,
    top: 276,
    width: 186,
    height: 232
  });
  await crop(IMAGES.repair, 'public/images/services/repair-before-after-combined.jpg', {
    left: 298,
    top: 274,
    width: 374,
    height: 235
  });

  // 13. Detail Page 3: Jewellery Customization
  await crop(IMAGES.customization, 'public/images/services/customization-hero.jpg', {
    left: 340,
    top: 72,
    width: 342,
    height: 185
  });

  // Customization 5-step process images
  await crop(IMAGES.customization, 'public/images/services/cust-step-1.jpg', {
    left: 20,
    top: 468,
    width: 104,
    height: 80
  });
  await crop(IMAGES.customization, 'public/images/services/cust-step-2.jpg', {
    left: 157,
    top: 468,
    width: 104,
    height: 80
  });
  await crop(IMAGES.customization, 'public/images/services/cust-step-3.jpg', {
    left: 293,
    top: 468,
    width: 104,
    height: 80
  });
  await crop(IMAGES.customization, 'public/images/services/cust-step-4.jpg', {
    left: 429,
    top: 468,
    width: 104,
    height: 80
  });
  await crop(IMAGES.customization, 'public/images/services/cust-step-5.jpg', {
    left: 565,
    top: 468,
    width: 104,
    height: 80
  });

  // Customization gallery (5 items)
  await crop(IMAGES.customization, 'public/images/services/cust-gal-1.jpg', {
    left: 10,
    top: 673,
    width: 140,
    height: 125
  });
  await crop(IMAGES.customization, 'public/images/services/cust-gal-2.jpg', {
    left: 155,
    top: 673,
    width: 118,
    height: 125
  });
  await crop(IMAGES.customization, 'public/images/services/cust-gal-3.jpg', {
    left: 278,
    top: 673,
    width: 133,
    height: 125
  });
  await crop(IMAGES.customization, 'public/images/services/cust-gal-4.jpg', {
    left: 416,
    top: 673,
    width: 126,
    height: 125
  });
  await crop(IMAGES.customization, 'public/images/services/cust-gal-5.jpg', {
    left: 546,
    top: 673,
    width: 132,
    height: 125
  });

  // 14. Gallery page grid items (12 photos + 3 video thumbnails)
  // Row 1 (4 photos)
  await crop(IMAGES.gallery, 'public/images/gallery/gal-necklace-ruby.jpg', {
    left: 15,
    top: 360,
    width: 173,
    height: 116
  });
  await crop(IMAGES.gallery, 'public/images/gallery/gal-jhumkas.jpg', {
    left: 194,
    top: 360,
    width: 145,
    height: 116
  });
  await crop(IMAGES.gallery, 'public/images/gallery/gal-bangles-pair.jpg', {
    left: 345,
    top: 360,
    width: 160,
    height: 116
  });
  await crop(IMAGES.gallery, 'public/images/gallery/gal-ring-ruby.jpg', {
    left: 512,
    top: 360,
    width: 155,
    height: 116
  });

  // Row 2 (4 photos)
  await crop(IMAGES.gallery, 'public/images/gallery/gal-pendant-necklace.jpg', {
    left: 15,
    top: 480,
    width: 173,
    height: 116
  });
  await crop(IMAGES.gallery, 'public/images/gallery/gal-diamond-flower-bangle.jpg', {
    left: 194,
    top: 480,
    width: 145,
    height: 116
  });
  await crop(IMAGES.gallery, 'public/images/gallery/gal-bridal-set.jpg', {
    left: 345,
    top: 480,
    width: 160,
    height: 116
  });
  await crop(IMAGES.gallery, 'public/images/gallery/gal-emerald-necklace.jpg', {
    left: 512,
    top: 480,
    width: 155,
    height: 116
  });

  // Row 3 (4 photos)
  await crop(IMAGES.gallery, 'public/images/gallery/gal-soldering.jpg', {
    left: 15,
    top: 600,
    width: 173,
    height: 116
  });
  await crop(IMAGES.gallery, 'public/images/gallery/gal-bangle-carved.jpg', {
    left: 194,
    top: 600,
    width: 145,
    height: 116
  });
  await crop(IMAGES.gallery, 'public/images/gallery/gal-before-after.jpg', {
    left: 345,
    top: 600,
    width: 160,
    height: 116
  });
  await crop(IMAGES.gallery, 'public/images/gallery/gal-torch-ring.jpg', {
    left: 512,
    top: 600,
    width: 155,
    height: 116
  });

  // Featured videos (3 items)
  await crop(IMAGES.gallery, 'public/images/gallery/video-sketch.jpg', {
    left: 19,
    top: 825,
    width: 206,
    height: 115
  });
  await crop(IMAGES.gallery, 'public/images/gallery/video-making.jpg', {
    left: 239,
    top: 825,
    width: 206,
    height: 115
  });
  await crop(IMAGES.gallery, 'public/images/gallery/video-repair.jpg', {
    left: 458,
    top: 825,
    width: 206,
    height: 115
  });

  console.log('All image assets extracted successfully!');
}

main().catch(console.error);
