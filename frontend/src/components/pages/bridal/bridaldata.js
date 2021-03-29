const card = [
    {
        id:1,
        vendor_name: "DDesigns | Gown Manufacturers",
        contact:"9650445478",
        vendor_image: "https://assets.vogue.in/photos/5ce41a753bf9b41f79b1b190/4:3/w_1440,h_1080,c_limit/brides-these-are-the-best-designers-for-your-wedding-lehenga-featured.jpg",
        flag: "❤ MOST POPULAR",
        location: "New Delhi",
        charge: "₹20,000-₹1,00,000",
        day: "For Bridal Lehangas",
        ratings: "★ 4.7"
    },
    {
        id:2,
        vendor_name: "The Indian Bridal Company",
        contact:"8745968710",
        vendor_image: "https://www.radhedesigner.com/content/images/thumbs/0042220_indian-bollywood-lehenga-choli-ethnic-lengha-party-wear-saree-pakistani-lehenga_550.jpeg",
        flag: "❤ MOST POPULAR",
        location: "Uttar Pradesh",
        charge: "₹20,000-₹5,50,000",
        day: "For Bridal Lehangas",
        ratings: "★ 4.3"
    },
    {
        id:3,
        vendor_name: "Anita Dongre - Designer Wear Elgin Road Kolkata",
        contact:"8336901486",
        vendor_image: "https://cdn.shaadiwish.com/img/cat/bridal-lehenga.jpg",
        flag: "★ FEATURED",
        location: "Kolkata",
        charge: "₹10,000-₹6,80,000",
        day: "For Bridal Lehangas",
        ratings: "★ 4.3"
    },
    {
        id:4,
        vendor_name: "Riya Kodali Design House",
        contact:"8041214372",
        vendor_image: "https://i.ytimg.com/vi/vLox2jxN0Og/maxresdefault.jpg",
        flag: "★ FEATURED",
        location: "Mumbai",
        charge: "₹30,000-₹4,90,000",
        day: "For Bridal Lehangas",
        ratings: "★ 4.4"
    },
    {
        id:5,
        vendor_name: "Vedam - Bridal",
        contact:"8745230148",
        vendor_image: "https://www.teahub.io/photos/full/346-3460291_latest-blouse-designs-collection-images-wallpapers-lehenga-blouse.jpg",
        flag: "❤ MOST POPULAR",
        location: "Pune",
        charge: "₹15,000-₹6,00,000",
        day: "For Bridal Lehangas",
        ratings: "★ 4.4"
    },
    {
        id:6,
        vendor_name: "Shubh Wedding",
        contact:"8020460279",
        vendor_image: "https://media.vogue.in/wp-content/uploads/2020/09/Isha-Ambani-lehenga1-1366x768-1920x1080.jpg",
        flag: "★ FEATURED",
        location: "Pune",
        charge: "₹12,000-₹3,50,000",
        day: "For Bridal Lehangas",
        ratings: "★ 4.5"
    },
    {
        id:7,
        vendor_name: "Women Oracle",
        contact:"9802360248",
        vendor_image: "https://121clicks.com/wp-content/uploads/2012/11/best_indian_wedding_08.jpg",
        flag: "❤ MOST POPULAR",
        location: "Kolkata",
        charge: "₹20,000-₹8,00,000",
        day: "For Bridal Lehangas",
        ratings: "★ 4.1"
    },
    {
        id:8,
        vendor_name: "Payal Singhal",
        contact:"9874587962",
        vendor_image: "https://i2.wp.com/www.weddingsutra.com/images/Vendor_Images/Bridal-Lehangas&Sarees/manish-malhotra/blog_16th_january_14_5manish.jpg",
        flag: "❤ MOST POPULAR",
        location: "Uttar Pradesh",
        charge: "₹5,000-₹7,50,000",
        day: "For Bridal Lehangas",
        ratings: "★ 4.9"
    },
    {
        id:9,
        vendor_name: "The Wedding Brigade",
        contact:"9856741026",
        vendor_image: "https://cdn0.weddingwire.in/articles/images/3/8/5/4/img_4583/velvet-diipakhoslainstagram-sabya.jpg",
        flag: "★ FEATURED",
        location: "Kolkata",
        charge: "10,000-₹5,00,000",
        day: "For Bridal Lehangas",
        ratings: "★ 3.8"
    },
    {
        id:10,
        vendor_name: "WeddingSutra",
        contact:"7896587425",
        vendor_image: "https://ik.imagekit.io/thestylist/tt/pub/media_tt/HOMEPAGE_IMAGES/15_Apr_20/01.jpg",
        flag: "★ FEATURED",
        location: "Pune",
        charge: "₹30,000-₹4,50,000",
        day: "For Bridal Lehangas",
        ratings: "★ 4.8"
    },
    {
        id:11,
        vendor_name: "Sb designs",
        contact:"9784502149",
        vendor_image: "https://cdn.shopify.com/s/files/1/0458/5429/4174/files/instagram599_x800.jpg?v=1614325241",
        flag: "❤ MOST POPULAR",
        location: "Delhi",
        charge: "₹90,000-₹10,00,000",
        day: "For Bridal Lehangas",
        ratings: "★ 4.9"
    },
    {
        id:12,
        vendor_name: "Designers Wedding",
        contact:"9567410235",
        vendor_image: "https://eventila.spyne.ai/photos/photographer/null/red-veds/1551763913495/mb_w7bc78513x.jpg",
        flag: "★ FEATURED",
        location: "Pune",
        charge: "₹10,000-₹6,80,000",
        day: "For Bridal Lehangas",
        ratings: "★ 4.7"
    },
    {
        id:13,
        vendor_name: "jackie designers",
        contact:"9654782149",
        vendor_image: "https://www.bollywoodshaadis.com/img/article-l-201872007340327243000.jpg",
        flag: "★ FEATURED",
        location: "Kolkata",
        charge: "₹10,000-₹7,40,000",
        day: "For Bridal Lehangas",
        ratings: "★ 4.7"
    },
    {
        id:14,
        vendor_name: "Bridal County",
        contact:"8741366710",
        vendor_image: "https://cpimg.tistatic.com/03468742/b/4/Stunning-Designer-Lehangas.jpg",
        flag: "★ FEATURED",
        location: "Delhi",
        charge: "₹5,000-₹4,40,000",
        day: "For Bridal Lehangas",
        ratings: "★ 3.8"
    },
    {
        id:15,
        vendor_name: "Barry weddings",
        contact:"8745031696",
        vendor_image: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/08/09/Pictures/_c8ba6a8e-9bd5-11e8-86f4-8f26f26dd985.JPG",
        flag: "★ FEATURED",
        location: "Pune",
        charge: "₹60,000-₹1,80,000",
        day: "For Bridal Lehangas",
        ratings: "★ 4.4"
    },
]

export default card;