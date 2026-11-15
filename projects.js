/* =========================================
   PIXEL COVE — PROJECT SHOWCASE
   Three aligned premium project cards
========================================= */

/* GRID */

.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
    align-items: stretch;
}

/* CARD */

.project-card {
    min-width: 0;
    display: flex;
    flex-direction: column;
    background: #141417;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 15px;
    overflow: hidden;
    transition: border-color 350ms ease, box-shadow 350ms ease;
}

.project-card:hover {
    border-color: rgba(255,77,0,0.45);
    box-shadow: 0 18px 45px rgba(0,0,0,0.3);
}

/* PROJECT PREVIEW */

.project-visual {
    height: 290px;
    min-height: 290px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: 0;
    border-radius: 0;
    flex-shrink: 0;
    transform: none;
}

.project-card:hover .project-visual {
    transform: none;
}

/* TOP LABEL */

.project-topline {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    z-index: 4;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    color: rgba(255,255,255,0.58);
    font-size: 8px;
    font-weight: 600;
    letter-spacing: 1.5px;
}

.project-corner {
    position: absolute;
    right: 19px;
    bottom: 17px;
    z-index: 4;
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 50%;
    color: white;
    font-size: 15px;
    transition: background 300ms ease, transform 300ms ease;
}

.project-card:hover .project-corner {
    background: var(--orange);
    border-color: var(--orange);
    transform: rotate(45deg);
}

/* =========================================
   RESPONDO ARTWORK
========================================= */

.project-respondo {
    background:
        radial-gradient(circle at 50% 55%, rgba(255,77,0,0.19), transparent 42%),
        linear-gradient(145deg, #1c1717, #0c0c0e);
}

.respondo-art {
    position: relative;
    width: 210px;
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.respondo-ring {
    position: absolute;
    border: 1px solid rgba(255,100,55,0.35);
    border-radius: 50%;
}

.ring-one {
    width: 145px;
    height: 145px;
    box-shadow: 0 0 30px rgba(255,77,0,0.08);
    animation: respondoPulse 4s ease-in-out infinite;
}

.ring-two {
    width: 195px;
    height: 195px;
    border-style: dashed;
    border-color: rgba(255,255,255,0.18);
    animation: respondoRotate 24s linear infinite;
}

.respondo-core {
    position: relative;
    z-index: 2;
    width: 90px;
    height: 90px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255,255,255,0.55);
    border-radius: 28px;
    background: linear-gradient(145deg, #333237, #101013);
    box-shadow:
        0 0 35px rgba(255,77,0,0.2),
        inset 0 1px 10px rgba(255,255,255,0.16);
    color: #F8F5F0;
    font-family: var(--font-heading);
    font-size: 52px;
    font-weight: 700;
}

.respondo-core span {
    color: var(--orange);
}

.respondo-caption {
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255,255,255,0.55);
    text-align: center;
    font-size: 8px;
    line-height: 1.6;
    letter-spacing: 2px;
    white-space: nowrap;
}

@keyframes respondoRotate {
    to { transform: rotate(360deg); }
}

@keyframes respondoPulse {
    50% { transform: scale(1.08); opacity: 0.55; }
}

/* =========================================
   SMART HOSPITAL ARTWORK
========================================= */

.project-hospital {
    background:
        radial-gradient(circle at 50% 50%, rgba(70,145,255,0.2), transparent 48%),
        linear-gradient(145deg, #171e2a, #0b0d12);
}

.hospital-art {
    position: relative;
    width: 230px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.hospital-symbol {
    width: 66px;
    height: 66px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(110,175,255,0.6);
    border-radius: 20px;
    background: rgba(65,135,255,0.12);
    color: #83B9FF;
    font-size: 48px;
    font-weight: 400;
    line-height: 1;
    box-shadow: 0 0 35px rgba(65,135,255,0.15);
}

.hospital-title {
    margin-top: 17px;
    color: #F4F5F8;
    font-family: var(--font-heading);
    font-size: 29px;
    font-weight: 700;
    letter-spacing: -1.5px;
}

.hospital-title span {
    color: #66A9FF;
}

.hospital-caption {
    margin-top: 9px;
    color: rgba(255,255,255,0.5);
    font-size: 8px;
    letter-spacing: 2px;
    text-align: center;
}

.hospital-orbit {
    position: absolute;
    width: 205px;
    height: 125px;
    border: 1px solid rgba(100,165,255,0.2);
    border-radius: 50%;
    transform: rotate(-25deg);
    pointer-events: none;
}

/* =========================================
   AURA ARTWORK
========================================= */

.project-aura {
    background:
        radial-gradient(circle at 50% 50%, rgba(220,135,165,0.2), transparent 48%),
        linear-gradient(145deg, #291b22, #110d11);
}

.aura-art {
    position: relative;
    width: 240px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.aura-decoration {
    position: absolute;
    width: 165px;
    height: 165px;
    border: 1px solid rgba(241,190,205,0.4);
    border-radius: 48% 52% 63% 37% / 40% 44% 56% 60%;
    transform: rotate(-25deg);
    box-shadow:
        0 0 35px rgba(225,135,164,0.1),
        inset 0 0 25px rgba(225,135,164,0.08);
    animation: auraFloat 7s ease-in-out infinite alternate;
}

.aura-title {
    position: relative;
    z-index: 2;
    color: #F1D7DE;
    font-family: var(--font-heading);
    font-size: 49px;
    font-weight: 500;
    letter-spacing: 5px;
    text-shadow: 0 5px 25px rgba(225,135,164,0.2);
}

.aura-title span {
    color: #E9A4BA;
}

.aura-caption {
    position: relative;
    z-index: 2;
    margin-top: 12px;
    color: rgba(255,235,240,0.58);
    font-size: 7px;
    letter-spacing: 2px;
    text-align: center;
}

@keyframes auraFloat {
    from { transform: rotate(-25deg) scale(0.96); }
    to { transform: rotate(-10deg) scale(1.04); }
}

/* =========================================
   PROJECT INFORMATION
========================================= */

.project-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 18px;
    min-height: 145px;
    margin: 0;
    padding: 23px 21px;
    background: #141417;
}

.project-info h3 {
    color: var(--white);
    font-family: var(--font-heading);
    font-size: 18px;
    line-height: 1.35;
    transition: color 300ms ease;
}

.project-card:hover .project-info h3 {
    color: var(--orange-light);
}

.project-info p {
    color: var(--muted);
    font-size: 11px;
    line-height: 1.7;
    margin-top: 8px;
}

.project-type {
    display: inline-block;
    color: var(--orange-light);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 1.4px;
    text-align: left;
}

/* WORK NOTE */

.work-note {
    margin-top: 30px;
    color: var(--muted);
    font-size: 11px;
}

/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 1000px) {
    .projects-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 22px;
    }
}

@media (max-width: 650px) {
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 25px;
    }

    .project-visual {
        height: 270px;
        min-height: 270px;
    }

    .project-info {
        min-height: 130px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .ring-one,
    .ring-two,
    .aura-decoration {
        animation: none !important;
    }

    .project-card,
    .project-visual,
    .project-corner,
    .project-info h3 {
        transition: none !important;
    }
}