/* Generates 1200x630 Open Graph images from existing site banners. */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const TARGET_W = 1200;
const TARGET_H = 630;
const TARGET_RATIO = TARGET_W / TARGET_H;

const OUT_DIR = path.join(__dirname, "..", "public", "images", "og");

const JOBS = [
  {
    src: "public/images/banners/home_hero.webp",
    out: "og-default.jpg",
    anchor: "right",
  },
  {
    src: "public/images/banners/about_hero.webp",
    out: "og-about.jpg",
    anchor: "right",
  },
  {
    src: "public/images/banners/hero-craftsmanship.webp",
    out: "og-services.jpg",
    anchor: "right",
  },
  {
    src: "public/images/contact/storefront-building.webp",
    out: "og-contact.jpg",
    anchor: "center",
  },
];

async function generate() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const job of JOBS) {
    const srcPath = path.join(__dirname, "..", job.src);
    const meta = await sharp(srcPath).metadata();

    let cropW = meta.width;
    let cropH = Math.round(meta.width / TARGET_RATIO);
    if (cropH > meta.height) {
      cropH = meta.height;
      cropW = Math.round(meta.height * TARGET_RATIO);
    }

    const left =
      job.anchor === "right"
        ? meta.width - cropW
        : Math.round((meta.width - cropW) / 2);
    const top = Math.round((meta.height - cropH) / 2);

    const outPath = path.join(OUT_DIR, job.out);
    await sharp(srcPath)
      .extract({ left, top, width: cropW, height: cropH })
      .resize(TARGET_W, TARGET_H, { fit: "cover", kernel: "lanczos3" })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(outPath);

    console.log(`✓ ${job.out} (${cropW}x${cropH} → ${TARGET_W}x${TARGET_H})`);
  }
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
