/* Revisa si existe ya una preferencia de lenguaje de visitas anteriores, y si no encuentra ninguna utiliza el lenguaje del navegador como valor por defecto. */


var lang = localStorage.getItem('lang') || navigator.languages;

var checkBox = document.getElementById("switch");



/* Al cargar, injecta el texto del lenguaje preselecionado */

window.onload = function() {

    if (lang.includes("es")) {
        
        inject(spanish);
        checkBox.checked = true;

    }

    else {
        inject(english);
    }

};


/* En caso de que el usuario haga click en el switch del menu de navegación, esta función dispara para cambiar el idoma. */

function langSwitch() {

    if (checkBox.checked == true){

        lang = localStorage.setItem('lang', 'es');
        inject(spanish);
        

    }
    else {

        lang = localStorage.setItem('lang', 'en');
        inject(english);

    }
    

}

/* Por cada elemento que contiene texto en el sitio, injetcta el contenido en base al lenguaje selecionado. */

function inject(language) {
        
        skip.innerHTML = language.nav.skip;
        
        navHome.innerHTML = language.nav.home;
        navApp.innerHTML = language.nav.app;
        navAbout.innerHTML = language.nav.about;
        navTeam.innerHTML = language.nav.team
        navContact.innerHTML = language.nav.contact;
        
        showcaseTitle.innerHTML = language.showcase.title_top;
        showcaseTitleBottom.innerHTML = language.showcase.title_bottom;
        showcaseDescription.innerHTML = language.showcase.description;
        showcaseB1.innerHTML = language.showcase.button_1;
        showcaseB2.innerHTML = language.showcase.button_2;
        
        appTitle.innerHTML = language.application.title_top;
        appTitleBottom.innerHTML = language.application.title_bottom;
        appDescription.innerHTML = language.application.description;
        
        aboutTitle.innerHTML = language.about.title_top;
        aboutTitleBottom.innerHTML = language.about.title_bottom;
        aboutDescription1.innerHTML = language.about.paragraph_1;
        aboutDescription2.innerHTML = language.about.paragraph_2;
        aboutDescription3.innerHTML = language.about.paragraph_3;
        
        teamTitle.innerHTML = language.team.title;
        teamQ1.innerHTML = language.team.quote_1;
        teamQ2.innerHTML = language.team.quote_2;
        teamQ3.innerHTML = language.team.quote_3;
        teamQ4.innerHTML = language.team.quote_4;

        contactA1.innerHTML = language.contact.address;
        contactA2.innerHTML = language.contact.address;
        contactEmail.innerHTML = language.contact.email_title;
        contactTitle.innerHTML = language.contact.title;
        contactDescription.innerHTML = language.contact.description;
        contactNamePH.placeholder = language.contact.name_ph;
        contactEmailPH.placeholder = language.contact.email_ph;
        contactText.placeholder = language.contact.textarea_ph;
        contactB1.value = language.contact.button_1;
        
        copyright.innerHTML = language.footer.copyright;
        footerHome.innerHTML = language.nav.home;
        footerApp.innerHTML = language.nav.app;
        footerAbout.innerHTML = language.nav.about;
        footerTeam.innerHTML = language.nav.team
        footerContact.innerHTML = language.nav.contact;

}



var spanish = {
        
        nav: {
            home: "Inicio",
            app: "Score",
            about: "Sobre Nosotros",
            team: "Nuestro Equipo",
            contact: "Contacto",
            skip: "Omitir Navegación"
        },
        
        showcase: {
            title_top: "Con <span class='highlight'>CandS</span>,",
            title_bottom: "olvida la complejidad",
            description: "Estamos aquí para llevar tu empresa al siguiente nivel! Eliminamos sistemáticamente la complejidad de tus tareas, desarrollando herramientas adaptadas a las necesidades de tu empresa y brindándote la libertad y el tiempo para esforzarte al máximo! Porque el éxito es nuestro viaje juntos.",
            button_1: "APRENDE MÁS",
            button_2: "CONTACTANOS"        
        },
        
        application: {
            title_top: "simplicidad",
            title_bottom: "contigo, siempre",
            description: "Nunca más te encuentres cuestionando tus datos. Score te sigue donde quiera que vayas: desde tu computadora hasta tus dispositivos móviles, brindándole los datos más precisos con solo presionar un botón. Porque la verdadera simpleza sólo viene de la disponibilidad absoluta."
        },
        
        about: {
            title_top: "",
            title_bottom: "sobre nosotros",
            paragraph_1: "CandS, Consulting and Service, se fundó para resolver un problema siempre presente que afecta a la industria: la <span class='highlight'>complejización excesiva de las tareas básicas</span>. A lo largo de los años, hemos estado sobre este problema, optimizando la infraestructura de nuestros clientes y brindándoles las herramientas para <span class='highlight'>aumentar su eficiencia diez veces</span>.",
            paragraph_2: "Nuestro equipo cuenta con una impresionante <span class='highlight'>experiencia colectiva de 50 años</span> en el desarrollo de software, y con la adquisición regular de nuevos y emocionantes talentos, siempre contamos con el mejor equipo para la tarea en cuestión.",
            paragraph_3: "Nuestro objetivo es mejorar exponencialmente la eficiencia de tu empresa, <span class='highlight'>resolviendo dificultades antes de que se conviertan en problemas</span> y reduciendo la complejidad de cada una de tus tareas. Con ese fin, hemos desarrollado herramientas como nuestra aplicación multiplataforma interna, <span class='highlight'>Score!</span>, que permite a nuestros clientes monitorear sus datos, ordenar stock automáticamente, administrar las rutas y cargas de camiones de reparto, e incluso notificar a sus proveedores para que las cantidades exactas de materia prima estén listas cuando sea necesario."        
        },
        
        team: {
            title: "Conoce a nuestros líderes",
            quote_1: "“Utilizo mi experiencia para liderar de manera efectiva equipos que desarrollan para la optimización de recursos”",
            quote_2: "",
            quote_3: "“Quiero que el trabajo que hago importe, y ese deseo me ha llevado a C&S”",
            quote_4: "",
        },
        
        contact: {
            email_title: "Correo",
            address: "Dirección",
            title: "Dí adiós a la complejidad, <span>ponte en contacto hoy!</span>",
            description: "Dinos todo acerca de ti! Qué cosas increíbles hace tu empresa? A qué problemas te enfrentas? Estás a solo un mensaje de distancia de la grandeza!",
            name_ph: "Nombre",
            email_ph: "ejemplo@ejemplo.com",
            textarea_ph: "Dinos cómo podemos ayudarte!",
            button_1: "Enviar!"
        },
        
        footer: {
            copyright: "© 2022 CandSArg. Todos los derechos reservados | <span>Diseñado por Martín Davico</span>"
        }
    }
    
var english = { 
        
        nav: {
            home: "Home",
            app: "Score",
            about: "About Us",
            team: "Our Team",
            contact: "Contact us",
            skip: "Skip Navigation"   
        },
        
        showcase: {
            title_top: "With <span class='highlight'>CandS</span>",
            title_bottom: "say bye to Complexity",
            description: "We're here to take your company to the next level! We systematically eliminate the complexity in your tasks, developing tools fitted to your company's needs and giving you the freedom and time to strive for your best! Because success is our journey together.",
            button_1: "Learn More",
            button_2: "Contact Us"        
        },
        
        application: {
            title_top: "TRUE SIMPLICITY",
            title_bottom: "WITH YOU, ALWAYS",
            description: "Never find yourself second-guessing your data ever again. Score follows you wherever you go: from your computer to your mobile devices, bringing you the most accurate data at the press of a button. Because true simplicity only comes from absolute availability."
        },
        
        about: {
            title_top: "LET US TELL YOU A BIT",
            title_bottom: "ABOUT US",
            paragraph_1: "CandS, Consulting and Service, was founded to solve an ever-present issue plaguing the industry: the <span class='highlight'>over-complexification of basic tasks</span>. Over the years, we've been on top of that problem, streamlining our clients' infrastructure and providing them with the tools to  <span class='highlight'>boost their efficiency tenfold</span>.",
            paragraph_2: "Our team boasts an impressive  <span class='highlight'>50 years of collective experience</span> in software development, and with the regular acquisition of new and exciting talent, we always have the best crew for the task at hand.",
            paragraph_3: "We aim to exponentially improve the efficiency of your company,  <span class='highlight'>solving issues before they become problems</span> and reducing the complexity of your every task. To that end, we've developed tools such as our in-house multiplatform app,  <span class='highlight'>Score!</span> Allowing our clients to monitor their data, order stock automatically, manage the routes and loads of delivery trucks, and even notify their suppliers so that the exact amounts of raw material are ready when they need to be."        
        },
        
        team: {
            title: "meet our team leaders",
            quote_1: "“I use my experience to effectively lead teams that develop for resource optimization”",
            quote_2: "",
            quote_3: "“I want the work that I do to matter, and that drive has lead me to C&S.”",
            quote_4: "",
        },
        
        contact: {
            email_title: "Email us",
            address: "Address",
            title: "Say goodbye to complexity, <span>get in touch today!</span>",
            description: "Let us know about you! What incredible things does your company do? What troubles do you face? You're just one message away from greatness!",
            name_ph: "Enter your name",
            email_ph: "Enter your email",
            textarea_ph: "Tell us how we can help you!",
            button_1: "Send!"
        },
        
        footer: {
            copyright: "© 2022 CandSArg. All rights reserved | <span>Designed by Martín Davico</span>"
        }
    }
    