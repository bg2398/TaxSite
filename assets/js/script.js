'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);





const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});





const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {

  const sldierContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
  }


  const slideNext = function () {
    const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */

   const slidePrev = function () {

    if (currentSlidePos <= 0) {
      currentSlidePos = sldierContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }




const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);

}



const translations = {
  
  es: {
    servicesTitle: "Servicios que Ofrecemos",
    immigrationApplicationAssistance: "Asistencia con Solicitudes de Inmigración",
    taxPreparation: "Preparación de Impuestos",
    accountingBookkeeping: "Contabilidad/Libros",
    notaryServices: "Servicios Notarios",
    payrollServices: "Servicios de Nómina",
    arizonaTranslationServices: "Servicios de Traducción en Arizona",
    mexicanConsulate: "Asistencia con citas y procesos para el consulado Mexicano",
    realState: "Facilitar transacciones inmobiliarias fluidas con nuestro conocimiento de la industria.",
    welcomeCalderon: "Bienvenido a Calderon Community Services, un establecimiento distinguido con más de 16 años de compromiso inquebrantable con la excelencia. Fundado en 2007, nos hemos convertido en un socio confiable en la prestación de un conjunto integral de servicios profesionales para satisfacer diversas necesidades comerciales.",
    training: "Capacitación",
    aboutTitle: "Conoce nuestros servicios",
    aboutText1: "En Calderón Community Services LLC. Estamos dedicados a potenciar el éxito de nuestros clientes. Con un equipo de profesionales experimentados, nos esforzamos por lograr la excelencia, la precisión, y la confiabilidad en cada servicio que brindamos. Sus objetivos son nuestra prioridad y estamos orgullosos de contribuir a sus logros financieros y personales.",
    // aboutText2: "Nuestro viaje comenzó en 2007, impulsado por una pasión por la excelencia y un compromiso con la prestación de un servicio excepcional. A lo largo de los años, nos hemos ganado la confianza de nuestros clientes al entregar resultados que superan las expectativas.",
    experienceCard: "Nuestra Experiencia",
    experienceCardtext: "Más de 16 años de Experiencia comprobada.",
    reliabilityCard: "Compremetidos",
    reliabilityCardText: "Socios de confianza en todos nuestros servicios.",
   comprehensiveServices: "Servicios comprensivos",
   comprehensiveServicesText: "Soluciones integrales adaptadas a sus necesidades.",
   footerTranslate: "Únase a nuestra comunidad utilizando nuestros servicios y haga crecer su negocio. Póngase en contacto con nosotros hoy!",
    contactUs: "Contáctenos",
    WhyChooseUs: "Porque eligir nuestros servicios?",
    Experienceheader: "Nuestra experiencia",
    experienceLabel: "Más de 16 años de experiencia comprobada.",
    reliabiltyMain: "Servicios Confiables",
    reliabilityHeader: "Puede confiar en nuestros servicios confiables!",
    attentionDetailMain: "Atención a todos los detalles",
    attentionTextMain: "Meticulosos en todos los aspectos de nuestros servicios.",
    resolutionsHeader: "Hacemos que sus necesidades estén libres de estrés. ¡Tu éxito es nuestro negocio!",
    resolutionsText1: "Únase a las filas de clientes satisfechos que han experimentado trabajar con Calderón Community Services",
    resolutionsText2: "Seamos su socio en el éxito.",
    resolutionsText3: "Ofrecemos soluciones que van más allá de las expectativas.",
    resolutionsText4: "Descubra el poder de nuestra excelencia profesional.",
    getInTouch: "Contactanos hoy!",
    contactText: "¿Tiene preguntas o necesita ayuda? llámenos. ¡Estamos aquí para ayudar!",
    Callus: "Llamanos: Iris : (602)-446-3836)",
    Callus2: "Issa: (602)-516-5044",
    Callus3: "Horario: 8am-4pm de Lunes-Viernes",
    Callus4: "Fuera de horario solo con citas porfavor!",
    ExploreBtn: "Nuestros Servicios",
    ContactUsBtn: "Contactanos",
    HomeBtn: "Página principal",
    AboutBtn: "Conocenos",
    ServicesBtn: "Servicios",
    ContactBtn: "Contactos",
    // yourName: "Su Nombre",
    // emailAddress: "Dirección de Correo Electrónico",
    // message: "Mensaje",
    // sendMessage: "Enviar Mensaje",
  },

  en: {
    servicesTitle: "Services We Provide",
    immigrationApplicationAssistance: "Immigration Application Assistance",
    taxPreparation: "Tax Preparation",
    accountingBookkeeping: "Accounting/Bookkeeping",
    notaryServices: "Notary Services",
    payrollServices: "Payroll Services",
    arizonaTranslationServices: "Arizona Translation Services",
    mexicanConsulate:"Assistance with Mexican consulate appointments and services. ",
    realState: "Facilitating smooth real estate transactions with our industry insight.",
    // fingerprinting: "Fingerprinting",
    // training: "Training",
    welcomeCalderon: "Welcome to Calderon Community Services, a distinguished establishment with over 16 years of unwavering commitment to excellence Founded in 2007, we have emerged as a trusted partner in delivering a comprehensive suite of professional services to meet diverse business needs.",
    aboutTitle: "About Calderon Community Services",
    aboutText1: "At Calderon Community Services LLC. We are decated to empowering our clients success with a team of seasoned proffesionals. We strive for exelelence, accuracy, and reliability in every service we provide. Your goals are our priority and we take pride in contributing to your financial and personal achievements.",
    // aboutText2: "Our journey began in 2007, driven by a passion for excellence and a commitment to providing exceptional service. Over the years, we have earned the trust of our clients by consistently delivering results that exceed expectations.",
    experienceCard: "Experience",
    experienceCardtext: "Over 16 years of proven Experience.",
    reliabilityCard: "Reliability",
    reliabilityCardText: "A trusted partner in your business journey.",
    comprehensiveServices: "Comprehensive Services",
    comprehensiveServicesText: "One-stop solutions tailored to your needs.",
    WhyChooseUs: "Why choose our services?",
    Experienceheader: "Our experience",
    reliabilityHeader: "A trusted partner in your business journey.",
    reliabiltyMain: "Reliable",
    experienceLabel: "Over 16 years of proven expertise!",
    attentionDetailMain: "Attention to Detail",
    attentionTextMain: "Meticulous in every aspect of our services.",
    resolutionsHeader: "We make your needs stress-free. Your success is our business!",
    resolutionsText1: "Join the ranks of satisfied clients who have experienced working with Calderon Community Services",
    resolutionsText2: "Let us be your partner in success.",
    resolutionsText3: "We offer solutions that go beyond expectations.",
    resolutionsText4: "Discover the power of proffesional execellence.",
    getInTouch: "Get in Touch",
    Callus: "Llamanos: Iris: (602)-446-3836",
    Callus2: "Issa: (602)-516-5044",
    Callus3: "Hours of operation: 8AM-4PM Mon-Fri",
    Callus4: "After hours with Appoitnments only please!",
    ExploreBtn: "Explore Now",
    ContactUsBtn: "Contact Us",
    HomeBtn: "Home",
    AboutBtn: "About",
    ServicesBtn: "Services",
    ContactBtn: "Contact",
    footerTranslate: "Join our community by using our services and grow your business.Contact us today!",
    contactText: "Have questions or need assistance? give us a call. We're here to help!",
    // yourName: "Your Name",
    // emailAddress: "Email Address",
    // message: "Message",
    // sendMessage: "Send Message",
  
  }}






for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }