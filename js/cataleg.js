document.addEventListener('DOMContentLoaded', () => {

    // --- PAS 1: DADES DELS PRODUCTES (25 DESCRIPCIONS COMPLETES) ---
    const dummyProducts = [
        {
            id: 1,
            nom: "Sabó de Camamilla",
            categoria: "sabons",
            descripcio: "És un sabó de textura cremosa i suau, amb un aroma delicat, ideal per aixecar-se al matí, ple de vitamines i bones energies!! Fet amb oli d'oliva, oli de coco, infusió i oleat de camamilla i oli essencial de camamilla. La camamilla és antiinflamatòria i calmant. Aquest sabó és ideal tant per pells joves com no tant, els hi dona vitalitat (llum) i hidratació.",
            imatges: [
                "img/productes/camamilla1.jpg",
                "img/productes/camamilla2.jpg",
                "img/productes/camamilla3.jpg",
                "img/productes/camamilla4.jpg"
            ]
        },
        {
            id: 2,
            nom: "Sabó de Canyella",
            categoria: "sabons",
            descripcio: "Un sabó ideal per començar el día, tònic, activador, estimulant, exfoliant suau, antibacterià, antifúngic i antiparasitari. Aquest sabó conté oli d´oliva extra verge, oli de coco, canyella, oli essencial de canyella. Es ideal per a pells seques, és astringent, elimina toxines i estimula la circulació.",
            imatges: [
                "img/productes/canyella1.jpg",
                "img/productes/canyella2.jpg",
                "img/productes/canyella3.jpg",
                "img/productes/canyella4.jpg"
            ]
        },
        {
            id: 3,
            nom: "Sabó de Calèndula",
            categoria: "sabons",
            descripcio: "Aquest sabó natural d'oli d’oliva i coco, calèndula i oli essencial ylang-ylang és ideal per a pells sensibles i atòpiques. Gràcies a les seves propietats antiinflamatòries i antioxidants, neteja profundament i protegeix contra l'envelliment. La seva fórmula ajuda a retenir la humitat i regenerar la dermis, essent un gran aliat per alleujar irritacions, acne, èczemes o cremades solars. Una peça essencial per a una pell neta, calmada i renovada.",
            imatges: [
                "img/productes/calendula1.jpg",
                "img/productes/calendula2.jpg",
                "img/productes/calendula3.jpg",
                "img/productes/calendula4.jpg"
            ]
        },
        {
            id: 4,
            nom: "Sabó de Lavanda",
            categoria: "sabons",
            descripcio: "El sabó artesà de lavanda és un potent protector natural amb propietats antisèptiques, hidratants i antioxidants, ideal per a la higiene diària de tota la família. Elaborat amb una base d’oli d’oliva i de coco, flors i oli essencial d'espígol, la seva textura cremosa purifica la pell mentre en millora notablement l'elasticitat i la suavitat. Per la seva delicadesa, és el sabó més adient per a la pell dels nens i per a la gent gran, ja que ajuda a cicatritzar pells esquerdades i protegeix contra infeccions o èczemes. A més, el seu aroma relaxant redueix l'estrès i facilita el son, sent el complement perfecte per al bany abans d'anar a dormir.",
            imatges: [
                "img/productes/lavanda1.jpg",
                "img/productes/lavanda2.jpg",
                "img/productes/lavanda3.jpg",
                "img/productes/lavanda4.jpg"
            ]
        },
        {
            id: 5,
            nom: "Sabó d'Argila Blanca",
            categoria: "sabons",
            descripcio: "El sabó d’argila blanca neteja els porus, desgreixa i oxigena, ajudant a mantenir una pell sana i lliure d’impureses. És aconsellable per a pells grasses, mixtes i amb tendència a l’acne. És bo per a toda mena de pell, però si tens la pell delicada, no l’utilitzis cada dia, amb dos dies ja en tindràs prou. Si volem que el sabó sigui més efectiu, l’hem d'aplicar directament sobre la pell per aconseguir una exfoliació suau. El deixarem actuar uns minuts i el retirarem amb aigua.",
            imatges: ["img/productes/argilab1.jpg", "img/productes/argilab2.jpg"]
        },
        {
            id: 6,
            nom: "Sabó de Llimona",
            categoria: "sabons",
            descripcio: "Regula les pells mixtes, un sabó dual que és eficaç amb les pells grasses i al mateix temps suau amb les zones seques. Va bé per mitigar els símptomes de les picades de mosquit. Si hi ha varius, ens podem fer una suau fricció a la zona, ja que produeix una sensació de ben estar i treu el formigueig. Oli d’oliva, llimones, oli de coco, cera d’abella, oli essencial de llimona.",
            imatges: ["img/productes/llimo1.jpg", "img/productes/llimo2.jpg", "img/productes/llimo3.jpg"]
        },
        {
            id: 7,
            nom: "Sabó de Timó",
            categoria: "sabons",
            descripcio: "Aquest sabó de timó és ideal per a pells grasses i la neteja de cos, cara i mans. Gràcies al seu contingut en timol i a la combinació d'olis essencials de timó, romaní i arbre del te, és un potent antisèptic i antifúngic que controla l'excés de greix i combat l'acne. A més de desinfectar, la seva fórmula estimula la producció d'elastina, ajudant a regenerar i tonificar la pell contra la flacciditat. Enriquit amb espirulina i llavors de rosella, ofereix una cura completa per mantenir la pell sana, ferma i lliure d'impureses.",
            imatges: ["img/productes/timo1.jpg", "img/productes/timo2.jpg", "img/productes/timo3.jpg"]
        },
        {
            id: 8,
            nom: "Sabó de Mel",
            categoria: "sabons",
            descripcio: "La dolçor i la força de la terra a la teva pell. Aquest sabó és un autèntic tresor elaborat amb mel de romaní de les abelles de Mel Ordolç (Torregrossa), un ingredient pur que transforma la higiene en un gest de cura profunda. Dissenyat com una abraçada per a les pells més fràgils, és el protector ideal per als infants i per a persones amb sensibilitat extrema. Més que un netejador, és un potent remei natural amb propietats antibiòtiques, cicatritzants i desinfectants que mineralitza i nutreix la dermis. Un bàsic imprescindible a la dutxa que cuida, cura i protegeix tota la família amb la saviesa de l'apicultura local.",
            imatges: ["img/productes/mel1.jpg", "img/productes/mel2.jpg"]
        },
        {
            id: 9,
            nom: "Sabó de Civada",
            categoria: "sabons",
            descripcio: "Una carícia per la pell, un sabó que calma, hidrata i suavitza. Mima la teva pell des de la hidratació més suau. Aporta les propietats amb extractes de civada, maceracions i destil·lacions de camamilla romana. Aroma suau i natural. Textura cremosa i suau. Indicat per a tota mena de pell. Oli d'oliva, oli de coco, oli de calèndula, extracte de civada, argila blanca, oli essencial de camamilla i violeta.",
            imatges: ["img/productes/civada1.jpg", "img/productes/civada2.jpg", "img/productes/civada3.jpg"]
        },
        {
            id: 10,
            nom: "Sabó d'Ortiga",
            categoria: "sabons",
            descripcio: "Reviu la teva pell amb la força mineralitzant de l’ortiga! Aquest sabó exfoliant és un autèntic tractament 'detox' que elimina toxines i enforteix la dermis gràcies a les propietats d'aquesta planta remeiera (i no pateixis, que no pica gens!). Enriquit amb olis d'oliva i coco, espirulina i un toc refrescant d'oli essencial d’eucaliptus, incorpora llavors de rosella per oferir-te una exfoliació natural que activa la regeneració cel·lular. Una combinació vibrant apta per a tota mena de pells que busquen sentir-se netes, tonificades i plenes de vida.",
            imatges: ["img/productes/ortiga1.jpg", "img/productes/ortiga2.jpg", "img/productes/ortiga3.jpg"]
        },
        {
            id: 11,
            nom: "Sabó Roba",
            categoria: "sabons",
            descripcio: "L'autèntic Sabó de Casa, el de tota la vida, recuperat per portar a la teva llar la saviesa de les nostres padrines. Aquest 'tot terreny' artesanal, elaborat amb oli reciclat, és la prova que els mètodes d'abans segueixen sent els millors: desgreixa els plats amb facilitat, neteja les mans amb suavitat i és un mestre amb la roba. Sorprèn per la seva capacitat de retornar la blancor més pura, mantenir els colors vibrants i deixar les peces delicades, com la llana o les tovalloles, amb una esponjositat natural sense necessitat de químics. Un gest conscient i ecològic que cuida el planeta mentre deixa la teva colada impecable i amb aquella olor de net que ja no es troba.",
            imatges: ["img/productes/roba1.jpg", "img/productes/roba2.jpg"]
        },
        {
            id: 12,
            nom: "Sabó de Coco",
            categoria: "sabons",
            descripcio: "Submergeix-te en la puresa tropical amb aquest sabó de coco, el secret millor guardat per a les pells grasses i mixtes que busquen un equilibri real. Més que una neteja, és un autèntic ritual 'detox' que escombra impureses i residus nocius, regalant-te una sensació de frescor profunda i duradora. Gràcies al seu còctel natural de proteïnes, vitamines i lípids humectants, actua com un escut contra l'envelliment mentre nodreix la pell intensament. El resultat? Una pell increïblement suau, elàstica i amb una lluentor natural tan radiant que no necessitaràs filtres.",
            imatges: ["img/productes/coco1.jpg"]
        },
        {
            id: 13,
            nom: "Sabó de Perilla",
            categoria: "sabons",
            descripcio: "Hem sucumbit als encants de la Perilla, una joia de la cosmètica asiàtica que, tot i no ser autòctona, és imbatible contra els problemes de la pell! Aquest sabó és un autèntic 'tot en un' terapèutic: actua com a potent antioxidant i antial·lèrgic, calmant irritacions i cicatritzant les marques de l'acne mentre en controla l'aparició. Enriquit amb olis de menta i eucaliptus per a una frescor absoluta, i llavors de rosella per a una exfoliació suau, és el tractament ideal per rejovenir i hidratar profundament les pells que més pateixen. Una excepció que val la pena per la salut del teu rostre i cos.",
            imatges: ["img/productes/perilla1.jpg", "img/productes/perilla2.jpg"]
        },
        {
            id: 14,
            nom: "Sabó de Taronja",
            categoria: "sabons",
            descripcio: "Sabó revitalitzant i nutritiu ideal per a pells mixtes i normals. Gràcies a la Vitamina C de la taronja i les propietats de l'oli d'hipèric, actua com un potent regenerador, astringent i cicatritzant, sent perfecte per tractar l'acne i l'excés de greix. Protegeix la pell dels agents externs i aporta una dosi d'energia al matí o un efecte balsàmic a la nit. Elaborat amb olis d'oliva, coco, hipèric i oli essencial de taronja dolça.",
            imatges: ["img/productes/taronja1.jpg", "img/productes/taronja2.jpg"]
        },
        {
            id: 15,
            nom: "Sabó de Cafè",
            categoria: "sabons",
            descripcio: "Activa el teu ritual diari amb un xut d’energia per a la teva pell! Aquest sabó de cafè i vainilla és l’aliat perfecte per a qui busca una exfoliació profunda i un efecte desodorant natural. Gràcies al cafè mòlt, la cafeïna penetra per estimular la circulació i ajudar a combatre la cel·lulitis, mentre neutralitza qualsevol olor de forma eficaç. Deixa’t captivar per l'aroma dolça i reconfortant dels olis essencials de vainilla i canyella, que converteixen la dutxa en un moment de pur plaer sensorial. Formulat amb olis d'oliva i coco, és ideal per renovar braços, cames i mans, deixant la pell llisa, ferma i deliciosament perfumada.",
            imatges: ["img/productes/cafe1.jpg", "img/productes/cafe2.jpg"]
        },
        {
            id: 16,
            nom: "Sabó d'Àloe Vera",
            categoria: "sabons",
            descripcio: "El sabó d'Àloe Vera, és un gran regenerador i hidratant. Per a pells sensibles o irritades. És un calmant molt eficaç quan la pell està enrogida per l'acció solar o amb petites ferides. Adequat per combatre l'acne. Elimina l'excés de grassa. El seu poder humectant ajuda a combatre les arrugues prematures.🌱🌿🌱 És fet a base d'oli d'oliva extra verge, oli de coco, àloe vera, oli essencial de Lemongrass i llavors de rosella. No es aconsellable per als menors de 6 anys",
            imatges: ["img/productes/aloe1.jpg"]
        },
        {
            id: 17,
            nom: "Sabó de Té Matcha",
            categoria: "sabons",
            descripcio: "Aquest sabó és un bàlsam de calma per a les pells que més pateixen, ideal per recuperar la dermis irritada o danyada per les temperatures extremes, ja sigui pel fred tallant de l'hivern o la calor intensa de l'estiu. Apte per a qualsevol tipus de pell, la seva fórmula amb olis d'oliva i coco és tan suau que permet un ús freqüent, sent perfecte per a les mans i el cos. L'oli essencial de Bergamota no només t'embolcallarà en una sensació de pau i tranquil·litat, sinó que et servirà d'escut natural contra els mosquits! Tot això amb el toc exfoliant de les llavors de rosella per a una pell sempre jove, tersa i protegida.",
            imatges: ["img/productes/te1.jpg"]
        },
        {
            id: 18,
            nom: "Sabó de Menta",
            categoria: "sabons",
            descripcio: "Aquest sabó de menta és la teva dosi d'energia pura per començar el dia amb la ment clara i el cos renovat. Gràcies a les propietats descongestionants i antisèptiques de la menta piperita, és un aliat excel·lent per a pells amb tendència grassa o acne, ja que neteja profundament i tanca els porus de forma natural. Però el seu gran secret és l'efecte fred: és un autèntic rescat per activar la circulació i alleujar la pesadesa de les cames cansades. Formulat amb oli d'oliva i coco, aquest sabó no només refresca intensament, sinó que deixa la pell suau i vibrant. Ideal per a la dutxa del matí o per recuperar-te després d'un dia calorós o de molta activitat física.",
            imatges: ["img/productes/menta1.jpg"]
        },
        {
            id: 19,
            nom: "Xampú Sòlid",
            categoria: "altres",
            descripcio: "Els sabons i xampús sòlids són una tendència que cada vegada té més seguidors. Són productes sense residus, elaborats amb ingredients naturals i respectuosos amb tu i amb el medi ambient. Formulats amb principis actius de plantes, olis essencials, hidrolats, mantegues vegetals, argiles i vitamines, ajuden a mantenir el cabell hidratat, suau i brillant.<br><br>Tria l'opció que millor s'adapti al teu cabell:<br><br><strong>Hidratant:</strong> Indicat per a cabell sec, encrespat, arrissat o amb puntes danyades. Proporciona una hidratació profunda per recuperar la vitalitat del cabell.<br><br><strong>Greasy (Anticaspa i Equilibrant):</strong> Ideal per a la caspa, picors, psoriasi i caiguda del cabell. Està elaborat amb SCI, argila verda, farina de civada, ortiga, oli de coco i aloe vera. Els olis essencials de menta i eucaliptus ajuden a regular el greix i activen la circulació amb una sensació de frescor intensa.<br><br><strong>Delicat:</strong> Pensat per a cabell normal i cuir cabellut delicat. Neteja amb suavitat per mantenir l'equilibri natural de la pell sense causar irritacions.",
            imatges: ["img/productes/xampu1.jpg",
                "img/productes/xampu2.jpg",
                "img/productes/xampu3.jpg"
            ]
        },
        
        {
            id: 20,
            nom: "Ambientador Ambar",
            categoria: "ambientadors",
            descripcio: "Els ambientadors sòlids de cera de soja elaborats amb ingredients totalment naturals, són una opció perfecta. Tots els ambientadors són elaborades artesanalment incorporen aromes increïbles gràcies als olis essencials amb què estan formulats. Aquests accessoris per la llar, amb una cinta incorporada, són ideals per perfumar armaris i calaixets amb un aroma únic i lliure de químics i substàncies nocives per a la salut i el medi ambient. Com que estan fets artesanalment, poden presentar lleugeres variacions i es recomana mantenir-los en llocs secs i frescos.",
            imatges: ["img/productes/ambar1.jpg", "img/productes/ambar2.jpg"]
        },
        {
            id: 21,
            nom: "Ambientador Bosc",
            categoria: "ambientadors",
            descripcio: "Aroma Fresc de bosc Transforma la teva llar amb l’acollidor aroma de pi, avet i cedre. Els ambientadors sòlids de cera de soja elaborats amb ingredients totalment naturals, són una opció perfecta. Tots els ambientadors són elaborades artesanalment incorporen aromes increïbles gràcies als olis essencials amb què estan formulats. Aquests accessoris per la llar, amb una cinta incorporada, són ideals per perfumar armaris i calaixets amb un aroma únic i lliure de químics i substàncies nocives per a la salut i el medi ambient. Com que estan fets artesanalment, poden presentar lleugeres variacions i es recomana mantenir-los en llocs secs i frescos.",
            imatges: ["img/productes/bosc1.jpg", "img/productes/bosc2.jpg"]
        },
        {
            id: 22,
            nom: "Ambientador Aina",
            categoria: "ambientadors",
            descripcio: "Aroma Floral. Els ambientadors sòlids de cera de soja elaborats amb ingredients totalment naturals, són una opció perfecta. Tots els ambientadors són elaborades artesanalment incorporen aromes increïbles gràcies als olis essencials amb què estan formulats. Aquests accessoris per la llar, amb una cinta incorporada, són ideals per perfumar armaris i calaixets amb un aroma únic i lliure de químics i substàncies nocives per a la salut i el medi ambient. Com que estan fets artesanalment, poden presentar lleugeres variacions i es recomana mantenir-los en llocs secs i frescos.",
            imatges: ["img/productes/aina1.jpg", "img/productes/aina2.jpg"]
        },
        {
            id: 23,
            nom: "Espelmes de Nadal",
            categoria: "espelmes",
            descripcio: "Flocs de Neu de cera de soja.❄️❄️❄️ Els petits detalls són les petites coses que fan llar. Porta la puresa i la màgia de l’hivern a la teva llar amb el floc de Nadal. Una vela decorativa, que captura l’elegància i la lleugeresa d’un floc de neu, símbol de la dolçor de les festes. Individual o lot de 2 flocs i safata de bambu.",
            imatges: ["img/productes/nadal1.jpg", "img/productes/nadal2.jpg", "img/productes/nadal3.jpg"]
        },
        {
            id: 24,
            nom: "Espelmes arc de Sant Martí",
            categoria: "espelmes",
            descripcio: "Espelma artesanal elaborada amb cera de soja 100% natural. Presenta una singular silueta d'arc de Sant Martí amb un disseny de línies corbes. Una peça escultòrica moderna, sòbria i sostenible, ideal per a qui busca objectes amb caràcter i una composició neta.",
            imatges: ["img/productes/arc1.jpg", "img/productes/arc2.jpg", "img/productes/arc3.jpg"]
        },
        {
            id: 25,
            nom: "Peònia Floral",
            categoria: "espelmes",
            descripcio: "La delicadesa de la natura feta espelma. Aquesta peònia esculpida en cera de soja és un tribut a l'elegància i al romanticisme. Amb pètals detallats i tons suaus de rosa i préssec, és ideal per crear una atmosfera de pau i benestar a la teva llar. En ser de soja, crema de manera neta i lenta, convertint-se en el regal perfecte per a aquells que busquen un detall artesanal, sostenible i ple de sensibilitat.",
            imatges: ["img/productes/rosa1.jpg"]
        },
        {
            id: 26,
            nom: "Esplema Joier",
            categoria: "espelmes",
            descripcio: "Espelma artesana feta amb cera de soja natural i olis essencials, decorada amb flors seques a l'interior. El recipient de vidre tallat està pensat per ser reutilitzat: un cop s'acaba la cera, es converteix en un joier funcional. Una opció pràctica i sostenible que aprofita el 100% de l'objecte sense generar residus.",
            imatges: ["img/productes/vidre1.jpg",
                "img/productes/vidre2.jpg",
                "img/productes/vidre3.jpg"
            ]
        },
        {
            id: 27,
            nom: "Col·lecció Blau Cel Arrecades",
            categoria: "joies",
            descripcio: "Arrecades amb flors encapsulades amb resina. Peces úniques, artesanes.",
            imatges: ["img/productes/ablau1.jpg",
                "img/productes/ablau2.jpg",
                "img/productes/ablau3.jpg"
            ]
        },
        {
            id: 28,
            nom: "Col·lecció Blau Cel Collarets",
            categoria: "joies",
            descripcio: "Collarets amb flors encapsulades amb resina. Peces úniques, artesanes.",
            imatges: ["img/productes/cblau1.jpg",
                "img/productes/cblau2.jpg",
                "img/productes/cblau3.jpg",
                "img/productes/cblau4.jpg",
                "img/productes/cblau5.jpg"
            ]
        },
        {
            id: 29,
            nom: "Col·lecció Cor Collarets",
            categoria: "joies",
            descripcio: "Collarets amb flors i plantes naturals encapsulades amb resina. Peces úniques d'artesania, un regal ideal.🌸🌿",
            imatges: ["img/productes/cor1.jpg",
                "img/productes/cor2.jpg",
            ]
        },
        {
            id: 30,
            nom: "Col·lecció Collarets Quadrats",
            categoria: "joies",
            descripcio: "Un prat d'estiu prou petit per sostenir-lo a la mà, aquests penjolls de flors silvestres presenten una barreja de flors acolorides i pètals que vaig recollir i premsar abans d'encapsular-los en resina dins d'un penjoll fet a mà.",
            imatges: ["img/productes/q1.jpg",
                "img/productes/q2.jpg",
                "img/productes/q3.jpg",
                "img/productes/q4.jpg"
            ]
        },
        {
            id: 31,
            nom: "Col·lecció Collarets Ovalats",
            categoria: "joies",
            descripcio: "Cada peça és única i té un valor especial. Aquestes peces estan fetes de flors i plantes reals, tingueu cura de guardar-les fora de la llum solar directa quan no les utilitzeu.🌸🌿",
            imatges: ["img/productes/01.jpg",
                "img/productes/02.jpg",
                "img/productes/03.jpg",
                "img/productes/04.jpg",
                "img/productes/05.jpg",
                "img/productes/06.jpg",
                "img/productes/07.jpg"
            ]
        },
        {
            id: 32,
            nom: "Arrecades Pètals",
            categoria: "joies",
            descripcio: "Arrecades amb flors i pètals naturals encapsulades amb resina. Peces úniques d'artesania, un regal ideal.🌸🌿",
            imatges: ["img/productes/p1.jpg",
                "img/productes/p2.jpg",
                "img/productes/p3.jpg"
            ]
        },
        {
            id: 33,
            nom: "Bosseta de Sissal",
            categoria: "altres",
            descripcio: "La bosseta de sisal és ideal per utilitzar amb els sabons sòlids.🧼 Posa el sabó dins la bosseta mulla-la i refrega-la amb les mans fins que estigui suau. Utilitza-la igual que una esponja!🧽A més de neteja la pell d’impureses aconseguiràs exfoliar-la i deixar-la molt suau. És genial per penjar a la dutxa 🚿 i allargar la durada del sabó sòlid.😍",
            imatges: ["img/productes/bossa1.jpg",
                "img/productes/bossa2.jpg"
            ]
        },
        {
            id: 34,
            nom: "Pack Sabons",
            categoria: "altres",
            descripcio: "Pack de 3 sabons que inclou una bosseta de Sisal i una sabonera de bambú.",
            imatges: ["img/productes/pack31.jpg",
                "img/productes/pack32.jpg",
                "img/productes/pack33.jpg",
                "img/productes/pack34.jpg"
            ]
        },
        {
            id: 35,
            nom: "Mini Pack",
            categoria: "altres",
            descripcio: "Pack d'un sabó + sabonera de bambú",
            imatges: ["img/productes/mpack1.jpg",
                "img/productes/mpack2.jpg"
            ]
        }
    ];

    const productGrid = document.getElementById('product-grid');
    let currentGallery = [];
    let currentIndex = 0;

    // --- PAS 2: FUNCIÓ PER RENDERITZAR PRODUCTES (OPTIMITZADA AMB LAZY LOADING) ---
    function renderProducts(products) {
        if (!productGrid) return;
        productGrid.innerHTML = '';

        if (products.length === 0) {
            productGrid.innerHTML = '<p class="no-products" style="grid-column: 1/-1; text-align:center;">No hi ha productes en aquesta categoria.</p>';
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            // OPTIMITZACIÓ: Fem servir <img> amb lazy loading natiu per accelerar la càrrega dels sabons
            productCard.innerHTML = `
                <div class="product-card-img-container" style="position:relative; height:300px; overflow:hidden; background:#eee; cursor:zoom-in;">
                    <img src="${product.imatges[0]}" 
                         loading="lazy" 
                         alt="${product.nom}"
                         data-id="${product.id}"
                         class="lazy-img"
                         style="width:100%; height:100%; object-fit:cover;"
                         onerror="this.src='https://via.placeholder.com/300x300.png?text=Foto+no+trobada'">
                </div>
                <div class="product-card-info">
                    <span class="categoria">${product.categoria}</span>
                    <h3>${product.nom}</h3>
                    <p>${product.descripcio}</p>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        // Event click a les imatges per obrir el Lightbox
        document.querySelectorAll('.lazy-img').forEach(img => {
            img.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                openLightbox(id);
            });
        });
    }

    // --- PAS 3: LÒGICA DEL FILTRE (AMB SUPORT PER URL) ---
    function applyFilter(filterName) {
        const filterButtons = document.querySelectorAll('.btn-filtre');
        
        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-filter') === filterName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        if (filterName === 'tots') {
            renderProducts(dummyProducts);
        } else {
            const filtered = dummyProducts.filter(p => p.categoria === filterName);
            renderProducts(filtered);
        }
    }

    const setupFilters = () => {
        const filterButtons = document.querySelectorAll('.btn-filtre');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                applyFilter(filter);
            });
        });
    };

    const checkUrlFilter = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const filterFromUrl = urlParams.get('filter');

        if (filterFromUrl) {
            applyFilter(filterFromUrl);
        } else {
            applyFilter('sabons');
        }
    };

    // --- PAS 4: LÒGICA DEL LIGHTBOX ---
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <span class="close-lightbox">&times;</span>
        <div class="lightbox-content">
            <img id="lightbox-img" src="" alt="">
            <div class="lightbox-nav">
                <button id="prev-btn">&#10094;</button>
                <button id="next-btn">&#10095;</button>
            </div>
            <div class="lightbox-counter"><span id="current-idx">1</span> / <span id="total-idx">1</span></div>
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    function openLightbox(id) {
        const product = dummyProducts.find(p => p.id === id);
        currentGallery = product.imatges;
        currentIndex = 0;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }

    function updateLightboxImage() {
        lightboxImg.src = currentGallery[currentIndex];
        document.getElementById('current-idx').innerText = currentIndex + 1;
        document.getElementById('total-idx').innerText = currentGallery.length;
        
        prevBtn.style.display = currentGallery.length > 1 ? 'block' : 'none';
        nextBtn.style.display = currentGallery.length > 1 ? 'block' : 'none';
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % currentGallery.length;
        updateLightboxImage();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        updateLightboxImage();
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // --- INICIALITZACIÓ ---
    setupFilters();
    checkUrlFilter(); 
});