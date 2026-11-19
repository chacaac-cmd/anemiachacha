
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Poppins:wght@500;600;700;800&display=swap');

:root {
  --red: #c71935;
  --dark-red: #930d27;
  --light-red: #fff0f2;
  --pink: #ffe0e5;
  --white: #fff;
  --dark: #30252a;
  --gray: #716a70;
  --soft: #fff8f9;
  --border: #f0dce0;
  --shadow: 0 12px 35px rgba(139, 16, 42, .09);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: 'DM Sans', sans-serif;
  color: var(--dark);
  background: white;
  line-height: 1.7;
}

a { text-decoration: none; color: inherit; }

svg {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.header {
  background: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 3px 18px rgba(80, 0, 20, .06);
}

.navbar {
  max-width: 1250px;
  margin: auto;
  padding: 14px 25px;
  min-height: 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--dark-red);
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.2;
}

.logo b { color: var(--red); }

.logo small {
  display: block;
  color: #88757a;
  font: 600 9px 'DM Sans', sans-serif;
  letter-spacing: 2px;
  margin-top: 5px;
}

.logo-icon {
  width: 43px;
  height: 43px;
  background: var(--red);
  color: white;
  border-radius: 13px;
  padding: 10px;
}

.menu-button {
  display: none;
  width: 40px;
  height: 40px;
  border: 0;
  background: var(--light-red);
  color: var(--red);
  padding: 9px;
  border-radius: 9px;
  cursor: pointer;
}

.navbar nav {
  display: flex;
  align-items: center;
  gap: 17px;
}

.navbar nav a {
  font-size: 11px;
  font-weight: 700;
  color: #554a4e;
  transition: .2s;
}

.navbar nav a:hover { color: var(--red); }

.hero {
  min-height: 530px;
  background: linear-gradient(115deg, #fff7f8 0%, #ffe5e9 65%, #fbd0d8 100%);
  padding: 75px max(calc((100% - 1150px) / 2), 7%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
}

.hero-content {
  max-width: 590px;
  position: relative;
  z-index: 2;
}

.eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  color: var(--red);
  letter-spacing: 2px;
  margin-bottom: 13px;
}

.hero h1 {
  font: 800 clamp(36px, 5vw, 57px)/1.2 'Poppins', sans-serif;
  color: #30252a;
  margin-bottom: 20px;
}

.hero h1 span, .section-heading h2 span { color: var(--red); }

.hero p {
  color: #65575c;
  font-size: 15px;
  max-width: 550px;
  margin-bottom: 28px;
}

.hero-buttons { display: flex; flex-wrap: wrap; gap: 12px; }

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  padding: 12px 21px;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  transition: .2s;
  font-family: inherit;
}

.button:hover { transform: translateY(-3px); }

.button-red {
  background: var(--red);
  color: white;
  box-shadow: 0 8px 20px rgba(199, 25, 53, .2);
}

.button-outline {
  border: 1px solid var(--red);
  color: var(--red);
  background: white;
}

.hero-art {
  width: 350px;
  height: 350px;
  flex-shrink: 0;
  position: relative;
  display: grid;
  place-items: center;
  margin-right: 25px;
}

.main-drop {
  width: 230px;
  height: 230px;
  z-index: 2;
  filter: drop-shadow(0 20px 20px rgba(153, 0, 30, .2));
  animation: float 4s ease-in-out infinite;
}

.blood-cell {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(ellipse at 35% 30%, #ffabb5, #d81737 70%, #9c0825);
  box-shadow: inset -9px -10px 15px rgba(100, 0, 20, .15);
}

.cell-one { width: 75px; height: 48px; top: 35px; left: 5px; transform: rotate(-20deg); }
.cell-two { width: 55px; height: 35px; bottom: 60px; right: 0; transform: rotate(20deg); }
.cell-three { width: 45px; height: 29px; top: 60px; right: 20px; transform: rotate(35deg); }
.cell-four { width: 35px; height: 23px; bottom: 35px; left: 25px; transform: rotate(-15deg); }

.blood-label {
  position: absolute;
  bottom: 5px;
  background: white;
  padding: 9px 18px;
  color: var(--red);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  border-radius: 30px;
  box-shadow: var(--shadow);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.quick-section {
  max-width: 1100px;
  margin: -30px auto 20px;
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 0 20px;
}

.quick-card {
  display: flex;
  align-items: center;
  gap: 15px;
  background: white;
  border-radius: 13px;
  padding: 20px;
  box-shadow: var(--shadow);
  border: 1px solid #f8e6e9;
}

.quick-icon, .card-icon, .cause-icon {
  width: 47px;
  height: 47px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: var(--light-red);
  color: var(--red);
  border-radius: 12px;
  padding: 12px;
}

.quick-card h3 {
  font: 700 13px 'Poppins', sans-serif;
}

.quick-card p {
  font-size: 11px;
  color: var(--gray);
  line-height: 1.5;
}

.section {
  padding: 85px 7%;
  max-width: 1300px;
  margin: auto;
  scroll-margin-top: 75px;
}

.soft-bg { max-width: none; background: var(--soft); }

.section-heading {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 45px;
}

.section-heading h2 {
  font: 800 clamp(27px, 4vw, 36px) 'Poppins', sans-serif;
  margin-bottom: 12px;
}

.section-heading p { font-size: 14px; color: var(--gray); }

.profile-layout {
  max-width: 1050px;
  margin: auto;
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 55px;
  align-items: center;
}

.blood-illustration {
  min-height: 330px;
  background: linear-gradient(145deg, #ffe8ec, #ffd1d9);
  border-radius: 25px;
  position: relative;
  overflow: hidden;
}

.red-cell {
  position: absolute;
  width: 115px;
  height: 75px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, #9c0825 0%, #d51b39 40%, #ff8794 75%, #b20e2c 100%);
  box-shadow: inset 0 -7px 10px rgba(80, 0, 20, .25), 0 12px 20px rgba(130, 0, 20, .12);
}

.red-cell-a { width: 145px; height: 95px; top: 70px; left: 90px; transform: rotate(-20deg); }
.red-cell-b { top: 160px; left: 35px; transform: rotate(20deg); }
.red-cell-c { top: 160px; right: 30px; transform: rotate(-15deg); }
.red-cell-d { width: 80px; height: 53px; top: 35px; right: 40px; transform: rotate(20deg); }

.illustration-label {
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: var(--red);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  padding: 8px 18px;
  border-radius: 30px;
  white-space: nowrap;
}

.profile-text h3, .subheading h3 {
  font: 700 22px 'Poppins', sans-serif;
  margin-bottom: 12px;
}

.profile-text p { color: var(--gray); font-size: 14px; margin-bottom: 14px; }

.info-note, .warning-note {
  background: var(--light-red);
  border-left: 4px solid var(--red);
  padding: 17px;
  border-radius: 8px;
  margin-top: 20px;
}

.info-note strong, .warning-note strong { color: var(--dark-red); }
.info-note p { margin: 5px 0 0; font-size: 13px; }

.subheading {
  max-width: 1050px;
  margin: 55px auto 22px;
}

.subheading h3 { font-size: 20px; }
.subheading p { color: var(--gray); font-size: 13px; }

.three-grid {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.info-card, .cause-card {
  background: white;
  padding: 26px;
  border: 1px solid var(--border);
  border-radius: 15px;
  transition: .25s;
}

.info-card:hover, .cause-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
  border-color: #e7a4b0;
}

.info-card h3, .cause-card h3 {
  font: 700 16px 'Poppins', sans-serif;
  margin: 17px 0 8px;
}

.info-card p, .cause-card p { color: var(--gray); font-size: 13px; }

.general-info {
  max-width: 1050px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.general-info div {
  padding: 16px 20px;
  background: var(--soft);
  border: 1px solid var(--border);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.general-info b { color: var(--dark-red); font-size: 12px; }
.general-info span { color: var(--gray); font-size: 13px; }

.symptom-intro {
  max-width: 950px;
  margin: auto auto 35px;
  display: flex;
  align-items: center;
  gap: 25px;
  background: white;
  padding: 22px;
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.symptom-heart {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  padding: 17px;
  background: var(--red);
  color: white;
  border-radius: 18px;
}

.symptom-intro h3 { font: 700 18px 'Poppins', sans-serif; }
.symptom-intro p { color: var(--gray); font-size: 13px; }

.symptom-columns {
  max-width: 1050px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}

.symptom-box {
  background: white;
  border: 1px solid var(--border);
  padding: 25px;
  border-radius: 16px;
}

.symptom-box.advanced { border-top: 4px solid var(--red); }

.symptom-heading {
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 20px;
}

.symptom-number {
  background: var(--light-red);
  color: var(--red);
  border-radius: 12px;
  padding: 11px 13px;
  font-weight: 800;
}

.symptom-heading h3 { font: 700 17px 'Poppins', sans-serif; }
.symptom-heading p { font-size: 11px; color: var(--gray); }

.check-list {
  list-style: none;
  display: grid;
  gap: 12px;
}

.check-list li {
  position: relative;
  padding-left: 25px;
  font-size: 13px;
  color: #62575b;
}

.check-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 7px;
  width: 10px;
  height: 10px;
  background: var(--red);
  border-radius: 50%;
}

.warning-note { max-width: 1050px; margin: 25px auto 0; font-size: 13px; }

.risk-layout {
  max-width: 1050px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}

.risk-card {
  padding: 27px;
  background: var(--soft);
  border: 1px solid var(--border);
  border-radius: 15px;
}

.risk-tag {
  font-size: 9px;
  color: var(--red);
  letter-spacing: 1.5px;
  font-weight: 800;
}

.risk-card h3 { font: 700 18px 'Poppins', sans-serif; margin: 10px 0 20px; }

.prevention-layout {
  max-width: 1050px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 35px;
  align-items: center;
}

.prevention-item {
  display: flex;
  gap: 17px;
  padding: 16px 0;
  border-bottom: 1px solid var(--border);
}

.food-icon {
  width: 43px;
  height: 43px;
  flex-shrink: 0;
  padding: 11px;
  background: var(--light-red);
  color: var(--red);
  border-radius: 12px;
}

.prevention-item h3 { font: 700 14px 'Poppins', sans-serif; }
.prevention-item p { color: var(--gray); font-size: 12px; }

.food-panel {
  background: var(--light-red);
  border-radius: 20px;
  padding: 30px;
}

.food-panel h3 { font: 700 17px 'Poppins', sans-serif; text-align: center; }

.food-illustration { text-align: center; padding: 25px; }

.food-circle {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: auto;
  background: radial-gradient(circle at 35% 30%, #ff9ca6, #c71935 70%, #850019);
  color: white;
  box-shadow: 0 12px 25px rgba(160, 0, 30, .18);
}

.food-circle span { font: 800 30px 'Poppins', sans-serif; }

.food-caption {
  color: var(--red);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-top: 12px;
}

.food-panel ul { list-style: none; font-size: 13px; color: #59484d; }
.food-panel li { padding: 7px 0; border-bottom: 1px solid #f1cbd2; }
.food-panel li::before { content: "•"; color: var(--red); font-weight: 900; margin-right: 10px; }

.healthy-banner, .health-service {
  max-width: 1050px;
  margin: 30px auto 0;
  padding: 24px;
  background: linear-gradient(110deg, #a40d2a, #d92343);
  color: white;
  border-radius: 16px;
  display: flex;
  gap: 20px;
  align-items: center;
}

.healthy-icon, .health-service-icon {
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  padding: 14px;
  background: rgba(255,255,255,.16);
  border-radius: 15px;
}

.healthy-banner h3, .health-service h3 {
  font: 700 17px 'Poppins', sans-serif;
  margin-bottom: 5px;
}

.healthy-banner p, .health-service p { color: #ffe8eb; font-size: 13px; }

.treatment-intro {
  max-width: 1000px;
  margin: auto auto 35px;
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 25px;
  background: var(--light-red);
  border-radius: 16px;
}

.treatment-art {
  width: 90px;
  height: 90px;
  flex-shrink: 0;
  background: var(--red);
  color: white;
  border-radius: 20px;
  padding: 17px;
}

.treatment-intro h3 { font: 700 18px 'Poppins', sans-serif; margin-bottom: 7px; }
.treatment-intro p { font-size: 13px; color: var(--gray); }

.treatment-grid {
  max-width: 1050px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 17px;
}

.treatment-card {
  background: white;
  padding: 25px;
  border: 1px solid var(--border);
  border-radius: 14px;
}

.treatment-number { font: 800 27px 'Poppins', sans-serif; color: #e5a0ac; }
.treatment-card h3 { font: 700 15px 'Poppins', sans-serif; margin: 12px 0; }
.treatment-card p { color: var(--gray); font-size: 12px; }

.health-service { align-items: flex-start; }
.health-service p { margin-top: 7px; }

.consult-layout {
  max-width: 1050px;
  margin: auto;
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 35px;
  align-items: start;
}

.consult-info {
  padding: 30px;
  background: linear-gradient(145deg, #a70d2a, #d92343);
  color: white;
  border-radius: 18px;
}

.consult-symbol {
  width: 85px;
  height: 85px;
  padding: 15px;
  border-radius: 20px;
  background: rgba(255,255,255,.15);
  margin-bottom: 20px;
}

.consult-info h3 { font: 700 20px 'Poppins', sans-serif; margin-bottom: 10px; }
.consult-info > p { font-size: 13px; color: #ffe6ea; }

.consult-reminder {
  margin-top: 25px;
  padding: 17px;
  background: rgba(255,255,255,.13);
  border-radius: 10px;
}

.consult-reminder strong { font-size: 13px; }
.consult-reminder p { font-size: 12px; margin-top: 5px; color: #ffe6ea; }

.consult-form {
  padding: 30px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.consult-form h3 { font: 700 21px 'Poppins', sans-serif; margin-bottom: 20px; }

.consult-form label {
  display: block;
  font-size: 12px;
  font-weight: 700;
  margin: 13px 0 6px;
}

.consult-form input, .consult-form textarea {
  width: 100%;
  border: 1px solid #e8d7db;
  background: #fffafb;
  padding: 13px 14px;
  border-radius: 8px;
  font: 13px 'DM Sans', sans-serif;
  outline: none;
  resize: vertical;
}

.consult-form input:focus, .consult-form textarea:focus {
  border-color: var(--red);
  box-shadow: 0 0 0 3px rgba(199,25,53,.08);
}

.submit-button { width: 100%; margin-top: 18px; }

.form-message { margin-top: 13px; font-size: 13px; font-weight: 700; }
.form-message.success { color: #16834a; }
.form-message.error { color: var(--red); }

.form-caption {
  display: block;
  color: #88777c;
  font-size: 10px;
  margin-top: 12px;
}

.contact-grid {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 17px;
}

.contact-card {
  padding: 25px 17px;
  border: 1px solid var(--border);
  border-radius: 15px;
  text-align: center;
  transition: .2s;
}

.contact-card:hover { transform: translateY(-5px); box-shadow: var(--shadow); }

.contact-icon {
  width: 50px;
  height: 50px;
  padding: 13px;
  margin: 0 auto 15px;
  background: var(--red);
  color: white;
  border-radius: 14px;
}

.contact-card h3 { font: 700 15px 'Poppins', sans-serif; margin-bottom: 7px; }
.contact-card p { font-size: 12px; color: var(--gray); overflow-wrap: anywhere; }

.references { background: var(--soft); max-width: none; }

.source-list {
  max-width: 850px;
  margin: auto;
  display: grid;
  gap: 12px;
}

.source-list a {
  padding: 15px 20px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--dark-red);
  font-size: 13px;
  font-weight: 700;
  transition: .2s;
}

.source-list a:hover { background: var(--light-red); transform: translateX(5px); }

.footer {
  background: #2d1e23;
  color: white;
  text-align: center;
  padding: 35px 20px;
}

.footer-logo { font: 800 20px 'Poppins', sans-serif; color: white; }
.footer-logo b { color: #ff657d; }
.footer p { color: #cdbdc2; font-size: 12px; margin-top: 8px; }
.footer .copyright { color: #99888e; font-size: 11px; margin-top: 20px; }

.back-top {
  position: fixed;
  right: 22px;
  bottom: 22px;
  width: 43px;
  height: 43px;
  padding: 11px;
  border: none;
  border-radius: 12px;
  color: white;
  background: var(--red);
  box-shadow: 0 5px 15px rgba(150, 0, 30, .2);
  cursor: pointer;
  display: none;
  z-index: 50;
}

.back-top.show { display: block; }

@media (max-width: 1100px) {
  .navbar nav { gap: 10px; }
  .navbar nav a { font-size: 10px; }
  .hero-art { transform: scale(.85); margin-right: 0; }
  .treatment-grid, .contact-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 760px) {
  .navbar { padding: 12px 18px; }
  .menu-button { display: block; }

  .navbar nav {
    display: none;
    position: absolute;
    top: 75px;
    left: 0;
    width: 100%;
    padding: 18px 25px;
    background: white;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 10px 15px rgba(0,0,0,.07);
    gap: 16px;
  }

  .navbar nav.active { display: flex; }
  .navbar nav a { font-size: 13px; }

  .hero {
    min-height: auto;
    padding: 65px 7% 55px;
    flex-direction: column;
    text-align: center;
  }

  .hero p { margin-left: auto; margin-right: auto; }
  .hero-buttons { justify-content: center; }
  .hero-art { width: 260px; height: 260px; margin-top: 25px; transform: scale(.85); }

  .quick-section { grid-template-columns: 1fr; margin: 20px auto; }
  .section { padding: 65px 7%; }

  .profile-layout, .prevention-layout, .consult-layout {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .three-grid { grid-template-columns: repeat(2, 1fr); }
  .symptom-columns, .risk-layout { grid-template-columns: 1fr; }
  .general-info { grid-template-columns: 1fr; }
  .contact-grid { grid-template-columns: repeat(2, 1fr); }
  .treatment-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .three-grid, .contact-grid, .treatment-grid { grid-template-columns: 1fr; }
  .hero h1 { font-size: 35px; }
  .section-heading h2 { font-size: 27px; }
  .symptom-intro, .treatment-intro { align-items: flex-start; flex-direction: column; }
  .healthy-banner, .health-service { align-items: flex-start; flex-direction: column; }
  .consult-form, .consult-info { padding: 22px; }
  .quick-card { padding: 16px; }
  .blood-illustration { min-height: 280px; }
}
