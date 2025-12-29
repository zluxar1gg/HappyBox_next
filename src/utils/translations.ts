
export type Language = 'en' | 'ru';

export const translations = {
  en: {
    nav: {
      services: 'Services',
      reviews: 'Reviews',
      cost: 'Cost',
      tracking: 'Tracking',
      contacts: 'Contacts'
    },
    hero: {
      title: 'Fast, Affordable, and Trustworthy Shipping from China & Hong Kong',
      minWeightBadge: 'No minimum weight requirements — shipping from 0.1 kg',
      features: {
        operating: 'Operating since 2016',
        warehouse: 'We store and consolidate your orders for free',
        buy: 'We can buy from any store you choose',
        packaging: 'Careful and secure packaging',
        payment: 'Flexible payment options – choose what\'s most convenient',
        support: '24/7 customer support',
        worldwide: 'Worldwide delivery',
        appreciate: 'We genuinely appreciate every customer'
      },
      stats: 'customers from around the world'
    },
    deliveryPath: {
      title: 'Your Parcel\'s Journey',
      steps: [
        { title: 'Warehouse', desc: 'Reception & Inspection' },
        { title: 'Processing', desc: 'Packing & Consolidation' },
        { title: 'Customs', desc: 'Clearance & Duties' },
        { title: 'Delivery', desc: 'Direct to your door' }
      ]
    },
    guides: {
      title: 'Expert Advice',
      subtitle: 'Master the art of shopping in China with our insider tips and pro advice',
      cards: [
        { 
          id: '1688', 
          title: '1688.com', 
          desc: 'Buy directly from factories at the source price.',
          steps: [
            'Rating 5–4 is the standard for reliability. Sellers with ratings below 4.0 are risky and often slow.',
            'Verify real weight/dimensions: listings often have inaccurate data. Ask before paying to avoid shipping surprises.',
            'Check electronics for 220V compatibility and specify your required plug type.',
            'Specify individual packaging for items like clothes, notebooks, plush toys, etc. otherwise they may arrive in a bulk "bag".',
            'For fragile items, request a "wood crate" for safer transit within China.'
          ],
          tip: 'Stock numbers on 1688 are often inaccurate. Always send us the link first so our agent can verify the REAL availability before you pay.',
          compare: { label: 'Electronics', local: '$150', china: '$45' }
        },
        { 
          id: 'poizon', 
          title: 'Poizon (Dewu)', 
          desc: 'Authentic luxury goods 30-50% cheaper than local retail.',
          steps: [
            'Prices vary by size because it\'s a stock-market model. Check adjacent sizes to save up to 30%.',
            '"95 New" means USED/Pre-owned (95% condition). "Damaged Box" means BRAND NEW with a dented box.',
            'Verification system: Poizon inspects every item, which significantly reduces counterfeit risks.',
            'Keep the blue tag and NFC certificate! They are essential for proving authenticity and resale value.'
          ],
          tip: 'Use the price chart to buy during dips. Never remove the blue tag until you are 100% sure about the item.',
          compare: { label: 'Jordan 4 Retro', local: '$480', china: '$290' }
        },
        { 
          id: 'taobao', 
          title: 'Taobao & Tmall', 
          desc: 'Find the best deals with real customer reviews.',
          steps: [
            'Tmall (red icon) features official brands/dealers with near-zero defect risk. Regular Taobao is cheaper.',
            'Always look for the camera icon in reviews to see "Live Photos" instead of studio renders.',
            'Prioritize sellers active for 5–10 years; they value their reputation and history on the platform.'
          ],
          tip: 'Use our warehouse for "Consolidation". Buy small items from 10 different stores, and we will pack them into ONE box to save you up to 60% on shipping.',
          compare: { label: 'Design Decor', local: '$85', china: '$12' }
        }
      ],
      close: 'Close Advice',
      buyForMe: "Too complex? We can handle the full purchasing process for you."
    },
    quiz: {
      cta: 'Not sure which delivery to choose?',
      button: 'Take 30s Quiz',
      title: 'Find Your Perfect Route',
      back: 'Back',
      questions: {
        country: 'Where are we shipping to?',
        category: 'What type of goods?',
        weight: 'Approximate weight?',
        priority: 'What is your priority?'
      },
      options: {
        us_ca: '🇺🇸 USA / Canada',
        eu: '🇪🇺 Europe',
        uae: '🇦🇪 UAE (Dubai)',
        au: '🇦🇺 Australia',
        clothing: 'Clothing & Shoes',
        electronics: 'Electronics',
        cosmetics: 'Cosmetics',
        furniture: 'Furniture / Heavy',
        other: 'Other',
        under30: 'Under 30 kg',
        over30: 'Over 30 kg',
        fast: 'Fastest Delivery',
        cheap: 'Lowest Price'
      },
      results: {
        title: 'Recommended Route:',
        air: {
          title: 'Express Air',
          desc: 'Air freight is the only reliable option for this weight class. Fast, trackable, and efficient.',
          desc_us_light: 'Sea freight to USA/Canada is only available from 30kg. For your weight, Air is the only reliable option.',
          desc_uae_light: 'Land freight (Truck) starts from 30kg. For smaller parcels, we use fast air lines.',
          desc_speed: 'When time is of the essence, Air Express is the only choice. The most stable and fastest route.'
        },
        sea: {
          title: 'Sea Freight',
          desc: 'The best way to save on heavy shipments. Ideal for furniture or large commercial batches.'
        },
        rail: {
          title: 'Rail / Multimodal',
          desc: 'For heavy cargo to EU, there are cost-effective ground routes. Note: Availability depends on item type.'
        },
        truck: {
          title: 'Road Freight (Truck)',
          desc: 'Optimal balance: cheaper than air, faster than sea. Delivered by truck directly to your door.'
        }
      },
      contactBtn: 'Discuss this route'
    },
    about: {
      title: 'For over 9 years, we\'ve been providing reliable shipping and purchasing services from China and Hong Kong.',
      text: 'We are one of the **most trusted purchasing and forwarding services**, with our own automated warehouse in China and Hong Kong. We ensure your delivery gets straight to your doorstep.'
    },
    services: {
      title: 'Services',
      amazonTitle: 'Amazon Logistics',
      items: {
        reception: { title: 'Parcel Reception – Free of Charge', text: 'No matter the store, number of items, or weight, we receive all incoming parcels at our warehouse completely free.' },
        storage: { title: 'Storage – Free of Charge', text: 'All your purchases are stored for free—no time limits. Enjoy worry-free storage while we handle your parcels.' },
        consolidation: { title: 'Consolidation – Free of Charge', text: 'We combine any number of orders from one or multiple stores into a single package for free, helping you save on shipping costs.' },
        purchasing: { title: 'Purchasing Items by Our Specialists – 1% of the item\'s value', text: '(minimum RMB 120 for online stores, RMB 200 for offline stores) Prefer to shop yourself? There\'s no commission at all! If you\'d like our specialists to purchase items for you, we handle it carefully and efficiently, making the process effortless.' },
        photo: { title: 'Product Photo/Video – Free of Charge', text: 'We can take photos or videos of your items—or specific parts—so you can check them before shipment.' },
        splitting: { title: 'Splitting One Order into Multiple Shipments – Free of Charge', text: 'Need to split a large order into multiple shipments? We do it for free, making shipping flexible and convenient for you.' },
        packing: { title: 'Package Packing – Free of Charge', text: 'We provide high-quality packaging suitable for international shipping at no extra cost, ensuring your purchases arrive safely.' },
        insurance: { title: 'Package Insurance – Optional', text: 'At your request, we can insure your package to minimize delivery risks. Pricing: 150 RMB per $100 declared value for Asia, 130 RMB per $100 for Europe.' },
        returns: { title: 'Return of Item to Store – Free of Charge', text: 'Only the shipping cost within the store\'s country applies; everything else is handled by us for free.' }
      },
      amazonItems: {
        fba: { title: 'FBA Prep Services', text: 'We handle FNSKU labeling, poly-bagging, bubble wrapping, and bundling to ensure your products meet Amazon US and EU strict requirements before they leave China.' },
        direct: { title: 'Direct Shipping to Amazon FBA (USA & EU)', text: 'We ship directly from China to Amazon FBA fulfillment centers in the USA, UK, and Europe. We utilize optimal routes to bypass intermediate storage, saving you time and money.' },
        ddp: { title: 'DDP Shipping (Delivered Duty Paid)', text: 'Critical for Amazon sellers: We handle all customs clearance and duty payments upfront. Your goods arrive at FBA warehouses without delays or surprise fees.' },
        inspection: { title: 'Quality Inspection', text: 'Our team inspects your goods before they are shipped to Amazon to prevent returns due to manufacturing defects or packaging damage.' },
        storage: { title: 'Storage & Consolidation', text: 'Aggregate products from multiple suppliers at our warehouse before sending a consolidated shipment to Amazon to optimize shipping rates.' },
        samples: { title: 'Sample Consolidation', text: 'We can collect samples from various factories and send them to you in one package for review before you place a bulk order.' }
      }
    },
    reviews: {
      title: 'Over a thousand customers put their trust in us every month — here\'s what they share:',
      data: [
        {
          name: "Anastasia",
          location: "Dubai, UAE",
          text: "Living in Dubai, finding specific decor is hard. Ordered these Hermes cups for my collection. HappyBox packed them with such care! Not a single chip. The consolidation service is a lifesaver.",
          image: "https://i.ibb.co/RGjpLh3Z/Happy-Box-review8.webp"
        },
        {
          name: "Jason Miller",
          location: "Los Angeles, USA",
          text: "I ordered a full electric drum kit. It was a huge box, but the shipping cost was surprisingly reasonable. Everything arrived intact and works perfectly. Great service for large items!",
          image: "https://i.ibb.co/Q3G8jNRR/Happy-Box-review9.webp"
        },
        {
          name: "Elena Petrova",
          location: "Berlin, Germany",
          text: "Got my Gucci shoes! I was worried about the box getting crushed, but they double-boxed everything. They are 100% authentic and arrived in Berlin in perfect condition.",
          image: "https://i.ibb.co/0y8mfkkB/Happy-Box-review12.webp"
        },
        {
          name: "Michael Chen",
          location: "Toronto, Canada",
          text: "I was looking for an e-foil everywhere. The HappyBox team helped me find a supplier on 1688 much cheaper than I could find on my own. Saved me over $1000!",
          image: "https://i.ibb.co/whXdYLzr/Happy-Box-review6.webp"
        },
        {
          name: "Olga S.",
          location: "Riga, Latvia",
          text: "So happy you can ship food products! I ordered a big batch of baby cookies and snacks that my children love. Everything arrived fresh and well-packed. Thank you!",
          image: "https://i.ibb.co/YFwfYJht/Happy-Box-review11.webp"
        },
        {
          name: "Jessica Miller",
          location: "London, UK",
          text: "Fast, reliable, and honest. I've been using them for 2 years now for personal shopping. The consolidation feature is the best – I save about 40% on shipping compared to direct delivery.",
          image: "https://i.ibb.co/4n8HyptV/Happy-Box-review3.webp"
        },
        {
          name: "Polina K.",
          location: "Warsaw, Poland",
          text: "Заказала фен Dyson. It's the real deal! Works with my voltage perfectly. The team checked the serial number for me before shipping. Highly recommended.",
          image: "https://i.ibb.co/6JmvY3Kp/Happy-Box-review7.webp"
        },
        {
          name: "Emma Davis",
          location: "New York, USA",
          text: "These cute cushions for my dining chairs are adorable! They look exactly like the photos. The 'purchase for me' service made buying from Taobao so easy.",
          image: "https://i.ibb.co/6cbcytdJ/Happy-Box-review13.webp"
        },
        {
          name: "Sarah Weber",
          location: "Munich, Germany",
          text: "Very professional logistics. Tracking was accurate all the way to my door in Munich. The rates for heavy shipments are very competitive. Will definitely use again.",
          image: "https://i.ibb.co/4RF5Hdbw/Happy-Box-review10.webp"
        },
        {
          name: "Sophie Martin",
          location: "Paris, France",
          text: "My Hermes bag arrived! I can't believe I got it for this price. The inspection photos gave me peace of mind before shipping. It's absolutely beautiful.",
          image: "https://i.ibb.co/ZRC3B1k5/Happy-Box-review.webp"
        },
        {
          name: "Maria Gonzalez",
          location: "Madrid, Spain",
          text: "These branded boots are stunning. Leather quality is amazing. HappyBox checked the size for me, so they fit perfectly. Shipping to Madrid was fast.",
          image: "https://i.ibb.co/BKrDsfWw/Happy-Box-review2.webp"
        },
        {
          name: "Daniel Kim",
          location: "Vancouver, Canada",
          text: "Solid service. Had a small issue with a missing tracking number once, but support resolved it via Telegram in 10 minutes. It feels like they really care about your package.",
          image: "https://i.ibb.co/xycMWf1/Happy-Box-review4.webp"
        }
      ]
    },
    calculator: {
      title: 'Online shipping cost calculator',
      subtitle: 'Door-to-door delivery. Prices include all taxes and customs duties.',
      weightPlaceholder: 'Weight',
      minWeightHint: 'Min. weight — 0.1 kg',
      kg: 'Kilogram (kg)',
      lb: 'Pound (lb)',
      selectCountry: 'Select destination country',
      postalPlaceholder: 'Postal Code (Optional)',
      button: 'Calculate Shipping',
      error: 'Please select a country',
      resultTitle: 'Estimated Cost',
      deliveryTime: 'Delivery',
      timeDays: 'days',
      note: '*Calculated for {weight} kg. Final price may vary based on volumetric weight.',
      recalculate: 'Recalculate',
      airRate: 'Air Delivery Rate',
      time: 'Time',
      contactQuote: 'Contact us for a quote',
      contactDesc: 'For this destination, please contact our support team for a precise calculation.',
      contactBtn: 'Contact Support',
      altDelivery: 'Interested in Sea or Rail delivery?',
      altContact: 'Contact us for a quote',
      methodAir: 'Air Express',
      methodSea: 'Sea Freight',
      methodRail: 'Rail/Truck',
      minWeightSeaRail: 'Sea/Rail available from 15kg',
      minWeightSeaUS: 'Sea delivery for US/CA starts from 30kg. For lighter loads, Air is the only option.',
      euDisclaimer: 'Note: Not all items can be shipped by Sea/Land due to local laws. Please consult our support.',
      bulkInquiry: 'For heavy shipments to this destination, please contact us for custom rates.',
      onlyAirForCountry: 'Only Air delivery is available for this destination',
      countries: {
        us: 'USA',
        ca: 'Canada',
        au: 'Australia',
        ae: 'UAE (Dubai)',
        eng: 'England',
        sct: 'Scotland',
        wls: 'Wales',
        nir: 'Northern Ireland',
        no: 'Norway',
        is: 'Iceland',
        at: 'Austria',
        be: 'Belgium',
        bg: 'Bulgaria',
        hr: 'Croatia',
        cy: 'Cyprus',
        cz: 'Czech Republic',
        dk: 'Denmark',
        ee: 'Estonia',
        fi: 'Finland',
        fr: 'France',
        de: 'Germany',
        gr: 'Greece',
        hu: 'Hungary',
        ie: 'Ireland',
        it: 'Italy',
        lv: 'Latvia',
        lt: 'Lithuania',
        lu: 'Luxembourg',
        mt: 'Malta',
        nl: 'Netherlands',
        pl: 'Poland',
        pt: 'Portugal',
        ro: 'Romania',
        sk: 'Slovakia',
        si: 'Slovenia',
        es: 'Spain',
        se: 'Sweden',
        other: 'Other Country'
      }
    },
    tracking: {
      title: 'Track your package',
      subtitle: 'We support',
      carriers: '1500+ carriers',
      subtitle2: 'including China Post, Cainiao, USPS, and DHL.',
      placeholder: 'Enter tracking number (e.g. LV123456789CN)',
      button: 'Track',
      result: 'Tracking Results',
      powered: 'Powered by 17TRACK'
    },
    contact: {
      title: 'Shipping products from China and Hong Kong has never been easier with',
      text: 'HappyBox lets you purchase any items from online and offline stores in China and Hong Kong and have them delivered straight to your door. We offer affordable shipping for clothing, cosmetics, shoes, electronics, snacks, vitamins, and many other products!',
      contactUs: 'Contact Us'
    },
    footer: {
      support: 'Support',
      contact: 'Contact Support',
      privacy: 'Privacy Policy',
      terms: 'User Agreement',
      rights: 'HappyBox. All rights reserved.',
      iUnderstand: 'I Understand',
      privacyTitle: 'Privacy Policy',
      termsTitle: 'User Agreement'
    },
    devModal: {
        title: 'Section Under Development',
        message: 'Personal accounts are coming soon! We are working hard to bring you a seamless tracking and management experience.',
        close: 'Close'
    },
    seoBlock: {
      toggle: 'Popular Destinations & Services',
      categories: {
        destinations: {
          title: 'Shipping Destinations',
          items: [
            'Delivery from China to USA',
            'Shipping from China to UK',
            'Delivery from China to UAE (Dubai)',
            'Shipping from China to Germany',
            'Delivery from China to France',
            'Shipping from China to Canada',
            'Delivery from China to Australia',
            'Shipping from Hong Kong to USA',
            'Shipping from Hong Kong to Europe'
          ]
        },
        services: {
          title: 'Our Services',
          items: [
            'Small Package Delivery from China',
            'Amazon FBA Shipping to USA',
            'DDP Shipping (Tax Free)',
            'Consolidation Service China',
            'Free Warehousing in China',
            'Personal Shopper Service',
            'Furniture Delivery from China',
            'Electronics Shipping'
          ]
        },
        platforms: {
          title: 'Shopping Agents',
          items: [
            'Taobao Agent',
            '1688 Agent',
            'Buy from Tmall',
            'Poizon (Dewu) Delivery',
            'Alibaba Forwarding Agent',
            'Weidian Agent',
            'Xianyu Second-hand Agent'
          ]
        }
      }
    }
  },
  ru: {
    nav: {
      services: 'Услуги',
      reviews: 'Отзывы',
      cost: 'Стоимость',
      tracking: 'Отслеживание',
      contacts: 'Контакты'
    },
    hero: {
      title: 'Быстрая, доступная и надежная доставка из Китая и Гонконга',
      minWeightBadge: 'Никаких ограничений по минимальному весу — доставка от 0.1 кг',
      features: {
        operating: 'Работаем с 2016 года',
        warehouse: 'Храним и консолидируем ваши заказы бесплатно',
        buy: 'Выкупаем товары из любых магазинов',
        packaging: 'Бережная и надежная упаковка',
        payment: 'Гибкая оплата – выбирайте, что удобнее',
        support: 'Поддержка клиентов 24/7',
        worldwide: 'Доставка по всему миру',
        appreciate: 'Мы искренне ценим каждого клиента'
      },
      stats: 'клиентов со всего мира'
    },
    deliveryPath: {
      title: 'Путь вашей посылки',
      steps: [
        { title: 'Склад', desc: 'Прием и Проверка' },
        { title: 'Обработка', desc: 'Упаковка и Консолидация' },
        { title: 'Таможня', desc: 'Оформление и Пошлины' },
        { title: 'Доставка', desc: 'Прямо в ваши руки' }
      ]
    },
    guides: {
      title: 'Экспертные советы',
      subtitle: 'Покупайте в Китае как профи с нашими инсайдерскими советами',
      cards: [
        { 
          id: '1688', 
          title: '1688.com', 
          desc: 'Покупайте напрямую у фабрик по самым низким ценам.',
          steps: [
            'Рейтинг 5–4: это стандарт надежности. Если рейтинг ниже 4.0 — велик риск брака или очень долгой отгрузки.',
            'Ловушка веса: в карточках часто врут про габариты. Уточняйте реальные параметры упаковки, чтобы цена доставки не стала сюрпризом.',
            'Электроника: обязательно проверяйте вольтаж (220V) и уточняйте нужный тип вилки.',
            'Упаковка: если берете одежду, тетради, игрушки и т.д., требуйте индивидуальную упаковку, иначе приедет "мешок" вещей.',
            'Доп. защита: просите деревянную обрешетку (wood crate) для хрупких или тяжелых товаров при перевозке по Китаю.'
          ],
          tip: 'Остатки на 1688 часто неактуальны. Сначала отправьте ссылку нам: наш агент проверит РЕАЛЬНОЕ наличие, прежде чем вы оплатите заказ.',
          compare: { label: 'Электроника', local: '15,000₽', china: '4,500₽' }
        },
        { 
          id: 'poizon', 
          title: 'Poizon (Dewu)', 
          desc: 'Оригинальные бренды на 30-50% дешевле, чем в магазинах вашего города.',
          steps: [
            '95 New vs Damaged Box: 95 New — это Б/У товар (95% от нового), а Damaged Box — абсолютно новая вещь с примятой коробкой (экономия!).',
            'Биржа цен: цена зависит от размера и меняется в реальном времени. Проверьте соседние размеры — разница бывает до 30%.',
            'Система проверки: Poizon осматривает каждую вещь, что сильно снижает риск подделки, но сохраняйте бдительность.',
            'Берегите синюю клипсу и NFC-сертификат! Они подтверждают проверку платформой и важны при перепродаже.'
          ],
          tip: 'Следите за графиком цен, чтобы купить на "дне". Не срезайте синюю пломбу, пока не убедитесь, что товар вам подходит.',
          compare: { label: 'Jordan 4 Retro', local: '45,000₽', china: '28,000₽' }
        },
        { 
          id: 'taobao', 
          title: 'Taobao и Tmall', 
          desc: 'Лучшие предложения и честные отзывы покупателей.',
          steps: [
            'Tmall (красный значок) — это официальные бренды с практически нулевым риском брака. Обычный Taobao дешевле.',
            'Живые фото: всегда ищите иконку камеры в отзывах. Студийные фото продавца часто сильно отличаются от реальности.',
            'Стаж магазина: выбирайте продавцов, которые на площадке 5–10 лет — они больше дорожат репутацией.'
          ],
          tip: 'Используйте наш склад для «Консолидации». Покупайте мелочи в 10 разных магазинах, а мы соберем их в ОДНУ коробку, экономя вам до 60% на доставке.',
          compare: { label: 'Декор для дома', local: '8,000₽', china: '1,200₽' }
        }
      ],
      close: 'Закрыть советы',
      buyForMe: "Сложно разобраться? Мы полностью возьмем выкуп на себя."
    },
    quiz: {
      cta: 'Не знаете, что выбрать?',
      button: 'Тест за 30 сек',
      title: 'Идеальный маршрут',
      back: 'Назад',
      questions: {
        country: 'Куда везем груз?',
        category: 'Что везем?',
        weight: 'Общий вес?',
        priority: 'Что для вас важнее?'
      },
      options: {
        us_ca: '🇺🇸 США / Канада',
        eu: '🇪🇺 Европа',
        uae: '🇦🇪 ОАЭ (Дубай)',
        au: '🇦🇺 Австралия',
        clothing: 'Одежда и Обувь',
        electronics: 'Электроника',
        cosmetics: 'Косметика',
        furniture: 'Мебель / Тяжелое',
        other: 'Другое',
        under30: 'До 30 кг',
        over30: 'Более 30 кг',
        fast: 'Скорость',
        cheap: 'Цена'
      },
      results: {
        title: 'Наша рекомендация:',
        air: {
          title: 'Авиа Экспресс',
          desc: 'Быстрая и надежная доставка. Идеально для небольших и ценных грузов.',
          desc_us_light: 'Морская доставка в США/Канаду доступна только от 30 кг. Для вашего веса Авиа — единственный надежный вариант.',
          desc_uae_light: 'Наземная доставка (грузовик) начинается от 30 кг. Для небольших посылок используем быстрые авиалинии.',
          desc_speed: 'Если время поджимает — только Авиа. Самый стабильный и быстрый маршрут.'
        },
        sea: {
          title: 'Морская перевозка',
          desc: 'Лучший способ сэкономить на тяжелом грузе. Идеально для мебели или больших партий товара.'
        },
        rail: {
          title: 'Авто / ЖД Доставка',
          desc: 'Комбинированный маршрут: морем или поездом до хаба в ЕС, затем автодоставка до двери. Оптимально для тяжелых грузов.'
        },
        truck: {
          title: 'Наземная (Авто)',
          desc: 'Оптимальный баланс: дешевле чем авиа, но быстрее чем море. Доставим грузовиком до двери.'
        }
      },
      contactBtn: 'Обсудить маршрут'
    },
    about: {
      title: 'Уже более 9 лет мы обеспечиваем надежную доставку и выкуп товаров из Китая и Гонконга.',
      text: 'Уже более 9 лет мы обеспечиваем надежную доставку и выкуп товаров из Китая и Гонконга.'
    },
    services: {
      title: 'Услуги',
      amazonTitle: 'Логистика для Amazon',
      items: {
        reception: { title: 'Прием посылок – Бесплатно', text: 'Независимо от магазина, количества товаров или веса, мы принимаем все входящие посылки на нашем складе абсолютно бесплатно.' },
        storage: { title: 'Хранение – Бесплатно', text: 'Все ваши покупки хранятся бесплатно и без ограничений по времени. Наслаждайтесь спокойствием, пока мы заботимся о ваших посылках.' },
        consolidation: { title: 'Консолидация – Бесплатно', text: 'Мы объединяем любое количество заказов из одного или разных магазинов в одну посылку бесплатно, помогая вам экономить на доставке.' },
        purchasing: { title: 'Выкуп товаров нашими специалистами – 1% от стоимости', text: '(минимум 120 юаней для онлайн-магазинов, 200 юаней для офлайн). Хотите покупать сами? Тогда никакой комиссии! Если вы поручите выкуп нам, мы сделаем это быстро и эффективно.' },
        photo: { title: 'Фото/Видео товара – Бесплатно', text: 'Мы можем сделать фото или видео ваших товаров (или их деталей), чтобы вы могли проверить их перед отправкой.' },
        splitting: { title: 'Разделение заказа на несколько посылок – Бесплатно', text: 'Нужно разделить большой заказ? Мы сделаем это бесплатно, обеспечивая гибкость и удобство доставки.' },
        packing: { title: 'Упаковка посылок – Бесплатно', text: 'Мы предоставляем качественную упаковку для международной пересылки без дополнительных затрат, чтобы ваши покупки доехали в сохранности.' },
        insurance: { title: 'Страхование посылки – Опционально', text: 'По вашему запросу мы можем застраховать посылку для минимизации рисков. Стоимость: 150 юаней за каждые $100 объявленной стоимости для Азии, 130 юаней для Европы.' },
        returns: { title: 'Возврат товара в магазин – Бесплатно', text: 'Вы оплачиваете только стоимость доставки по стране магазина; все остальное мы берем на себя.' }
      },
      amazonItems: {
        fba: { title: 'Подготовка к FBA', text: 'Мы занимаемся маркировкой FNSKU, упаковкой в пакеты, пупырчатую пленку и комплектацией, чтобы ваши товары соответствовали строгим требованиям Amazon (США, Европа) перед отправкой из Китая.' },
        direct: { title: 'Прямая доставка на склады Amazon FBA (США и Европа)', text: 'Мы специализируемся на доставке в FBA. Отправляляем грузы из Китая напрямую в центры Amazon FBA в США и Европе, минуя промежуточное хранение. Это быстрее и дешевле.' },
        ddp: { title: 'Доставка DDP (с оплатой пошлин) для Amazon', text: 'Критично для продавцов на Amazon: мы берем на себя таможенное оформление и уплату всех пошлин. Груз поступает на склад FBA уже очищенным.' },
        inspection: { title: 'Инспекция качества', text: 'Наша команда проверяет товары перед отправкой на Amazon, чтобы предотвратить возвраты из-за брака или поврежденной упаковки.' },
        storage: { title: 'Хранение и консолидация', text: 'Мы собираем товары от разных поставщиков на нашем складе перед отправкой консолидированного груза на Amazon для оптимизации расходов.' },
        samples: { title: 'Консолидация образцов', text: 'Мы можем собрать образцы с разных фабрик и отправить их вам одной посылкой для проверки перед размещением оптового заказа.' }
      }
    },
    reviews: {
      title: 'Более тысячи клиентов доверяют нам ежемесячно — вот что они говорят:',
      data: [
        {
          name: "Анастасия",
          location: "Дубай, ОАЭ",
          text: "Живя в Дубае, сложно найти специфический декор. Заказала чашки Hermes для коллекции. HappyBox упаковали их идеально! Ни единого скола. Услуга консолидации — просто спасение.",
          image: "https://i.ibb.co/RGjpLh3Z/Happy-Box-review8.webp"
        },
        {
          name: "Джейсон Миллер",
          location: "Лос-Анджелес, США",
          text: "Заказал полную электронную ударную установку. Коробка была огромной, но цена доставки приятно удивила. Все пришло целым и работает отлично. Отличный сервис для крупных грузов!",
          image: "https://i.ibb.co/Q3G8jNRR/Happy-Box-review9.webp"
        },
        {
          name: "Елена Петрова",
          location: "Берлин, Германия",
          text: "Получила свои туфли Gucci! Боялась, что коробка помнется, но они упаковали в двойную коробку. 100% оригинал, доставили в Берлин в идеальном состоянии.",
          image: "https://i.ibb.co/0y8mfkkB/Happy-Box-review12.webp"
        },
        {
          name: "Майкл Чен",
          location: "Торонто, Канада",
          text: "Везде искал электро-фойл (e-foil). Команда HappyBox помогла найти поставщика на 1688 намного дешевле, чем я мог найти сам. Сэкономил более $1000!",
          image: "https://i.ibb.co/whXdYLzr/Happy-Box-review6.webp"
        },
        {
          name: "Ольга С.",
          location: "Рига, Латвия",
          text: "Так рада, что вы отправляете продукты! Заказала большую партию детского печенья и снеков, которые любят мои дети. Все пришло свежим и отлично упакованным. Спасибо!",
          image: "https://i.ibb.co/YFwfYJht/Happy-Box-review11.webp"
        },
        {
          name: "Джессика Миллер",
          location: "Лондон, Великобритания",
          text: "Быстро, надежно и честно. Пользуюсь сервисом уже 2 года для личных покупок. Консолидация — лучшее, что есть, экономлю около 40% на доставке по сравнению с прямой отправкой.",
          image: "https://i.ibb.co/4n8HyptV/Happy-Box-review3.webp"
        },
        {
          name: "Полина К.",
          location: "Варшава, Польша",
          text: "Заказала фен Dyson. Это оригинал! Отлично работает с нашим напряжением. Команда проверила серийный номер перед отправкой. Очень рекомендую.",
          image: "https://i.ibb.co/6JmvY3Kp/Happy-Box-review7.webp"
        },
        {
          name: "Эмма Дэвис",
          location: "Нью-Йорк, США",
          text: "Эти милые подушки для стульев просто прелесть! Выглядят точно как на фото. Услуга «выкуп» сделала покупку на Таобао такой простой.",
          image: "https://i.ibb.co/6cbcytdJ/Happy-Box-review13.webp"
        },
        {
          name: "Сара Вебер",
          location: "Мюнхен, Германия",
          text: "Очень профессиональная логистика. Отслеживание было точным до самой двери в Мюнхене. Тарифы на тяжелые посылки очень конкурентные. Обязательно воспользуюсь снова.",
          image: "https://i.ibb.co/4RF5Hdbw/Happy-Box-review10.webp"
        },
        {
          name: "Софи Мартин",
          location: "Париж, Франция",
          text: "Моя сумка Hermes приехала! Не могу поверить, что купила её по такой цене. Фото с проверки успокоили меня перед отправкой. Она прекрасна.",
          image: "https://i.ibb.co/ZRC3B1k5/Happy-Box-review.webp"
        },
        {
          name: "Мария Гонсалес",
          location: "Мадрид, Испания",
          text: "Эти брендовые сапоги потрясающие. Качество кожи изумительное. HappyBox проверили размер, так что подошли идеально. Доставка в Мадрид была быстрой.",
          image: "https://i.ibb.co/BKrDsfWw/Happy-Box-review2.webp"
        },
        {
          name: "Дэниел Ким",
          location: "Ванкувер, Канада",
          text: "Надежный сервис. Был небольшой вопрос с трек-номером, но поддержка в Telegram решила все за 10 минут. Чувствуется, что им не все равно.",
          image: "https://i.ibb.co/xycMWf1/Happy-Box-review4.webp"
        }
      ]
    },
    calculator: {
      title: 'Онлайн калькулятор доставки',
      subtitle: 'Доставка до двери. Цены включают все налоги и таможенные пошлины.',
      weightPlaceholder: 'Вес',
      minWeightHint: 'Минимальный вес — 0.1 кг',
      kg: 'Килограмм (кг)',
      lb: 'Фунт (lb)',
      selectCountry: 'Выберите страну назначения',
      postalPlaceholder: 'Почтовый индекс (опционально)',
      button: 'Рассчитать стоимость',
      error: 'Пожалуйста, выберите страну',
      resultTitle: 'Примерная стоимость',
      deliveryTime: 'Доставка',
      timeDays: 'дней',
      note: '*Рассчитано для {weight} кг. Итоговая цена может отличаться в зависимости от объемного веса.',
      recalculate: 'Пересчитать',
      airRate: 'Тариф Авиадоставки',
      time: 'Срок',
      contactQuote: 'Свяжитесь для расчета',
      contactDesc: 'Для этого направления, пожалуйста, свяжитесь с нашей поддержкой для точного расчета.',
      contactBtn: 'Написать в поддержку',
      altDelivery: 'Интересует ЖД или Море?',
      altContact: 'Свяжитесь с нами для расчета',
      methodAir: 'Авиа Экспресс',
      methodSea: 'Морская перевозка',
      methodRail: 'ЖД / Авто',
      minWeightSeaRail: 'Море/ЖД доступно от 15кг',
      minWeightSeaUS: 'Морская доставка в США/Канаду от 30кг. При меньшем весе доступна только Авиа.',
      euDisclaimer: 'Внимание: не все товары могут быть приняты для моря/наземки из-за местных законов ЕС. Уточняйте у нас.',
      bulkInquiry: 'Для крупных партий в это направление, пожалуйста, напишите нам для расчета спец. тарифа.',
      onlyAirForCountry: 'Для этого направления доступна только Авиадоставка',
      countries: {
        us: 'США',
        ca: 'Канада',
        au: 'Австралия',
        ae: 'ОАЭ (Дубай)',
        eng: 'Англия',
        sct: 'Шотландия',
        wls: 'Уэльс',
        nir: 'Северная Ирландия',
        no: 'Норвегия',
        is: 'Исландия',
        at: 'Австрия',
        be: 'Бельгия',
        bg: 'Болгария',
        hr: 'Хорватия',
        cy: 'Кипр',
        cz: 'Чехия',
        dk: ' Дания',
        ee: 'Эстония',
        fi: 'Финляндия',
        fr: 'Франция',
        de: 'Германия',
        gr: 'Греция',
        hu: 'Венгрия',
        ie: 'Ирландия',
        it: 'Италия',
        lv: 'Латвия',
        lt: 'Литва',
        lu: 'Люксембург',
        mt: 'Мальта',
        nl: 'Нидерланды',
        pl: 'Польша',
        pt: 'Португалия',
        ro: 'Румыния',
        sk: 'Словакия',
        si: 'Словения',
        es: 'Испания',
        se: 'Швеция',
        other: 'Другая страна'
      }
    },
    tracking: {
      title: 'Отследить посылку',
      subtitle: 'Мы поддерживаем',
      carriers: '1500+ перевозчиков',
      subtitle2: 'включая China Post, Cainiao, USPS и DHL.',
      placeholder: 'Введите трек-номер (например, LV123456789CN)',
      button: 'Отследить',
      result: 'Результаты отслеживания',
      powered: 'Работает на 17TRACK'
    },
    contact: {
      title: 'Доставка товаров из Китая и Гонконга никогда не была такой простой с',
      text: 'HappyBox позволяет покупать любые товары в онлайн и офлайн магазинах Китая и Гонконга с доставкой прямо до вашей двери. Мы предлагаем доступную доставку одежды, косметики, обуви, электроники, снеков, витаминов и многих других товаров!',
      contactUs: 'Свяжитесь с нами'
    },
    footer: {
      support: 'Поддержка',
      contact: 'Написать в поддержку',
      privacy: 'Политика конфиденциальности',
      terms: 'Пользовательское соглашение',
      rights: 'HappyBox. All rights reserved.',
      iUnderstand: 'I Understand',
      privacyTitle: 'Политика конфиденциальности',
      termsTitle: 'Пользовательское соглашение'
    },
    devModal: {
        title: 'Раздел в разработке',
        message: 'Личный кабинет скоро появится! Мы усердно работаем над созданием удобной системы для отслеживания и управления вашими заказами.',
        close: 'Закрыть'
    },
    seoBlock: {
      toggle: 'Популярные направления и услуги',
      categories: {
        destinations: {
          title: 'Направления доставки',
          items: [
            'Delivery from China to USA',
            'Shipping from China to UK',
            'Delivery from China to UAE (Dubai)',
            'Shipping from China to Germany',
            'Delivery from China to France',
            'Shipping from China to Canada',
            'Delivery from China to Australia',
            'Shipping from Hong Kong to USA',
            'Shipping from Hong Kong to Europe'
          ]
        },
        services: {
          title: 'Our Services',
          items: [
            'Small Package Delivery from China',
            'Amazon FBA Shipping to USA',
            'DDP Shipping (Tax Free)',
            'Consolidation Service China',
            'Free Warehousing in China',
            'Personal Shopper Service',
            'Furniture Delivery from China',
            'Electronics Shipping'
          ]
        },
        platforms: {
          title: 'Shopping Agents',
          items: [
            'Taobao Agent',
            '1688 Agent',
            'Buy from Tmall',
            'Poizon (Dewu) Delivery',
            'Alibaba Forwarding Agent',
            'Weidian Agent',
            'Xianyu Second-hand Agent'
          ]
        }
      }
    }
  }
};
