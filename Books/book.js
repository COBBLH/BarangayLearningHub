
// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Initialize Swiper for books slider
var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    speed: 600,
});

// Books data array
const books = [
    { 
        title: "The Adventure Bible for Young Readers", 
        author: "Richards, Lawrence", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C1.jpg"
    },
    { 
        title: "LION GUARD: FOLLOW THAT HIPPO", 
        author: "Andrea Posner-Sanchez", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C2.png"
    },
    { 
        title: "The Critter Club", 
        author: "Darla Daine", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C3.jpg"
    },
    { 
        title: "5 Minute Princess Story", 
        author: "Disney Publishing Worldwide", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C4.jpg"
    },
    { 
        title: "Whats for BreakFast", 
        author: "Steph Stillwell", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C5.jpg"
    },
    { 
        title: "Again", 
        author: "Emily Gravett", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C6.jpg"
    },
    { 
        title: "How to Draw Pirates and Other Cool Stuff BookZoo", 
        author: "BookZoo", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C7.jpg"
    },
    { 
        title: "My First Treasury of Awesome Stories", 
        author: "Igloo Books", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C8.jpg"
    },
    { 
        title: "My Treasure of Stories for Girls: A Magical Collection of Beautiful Stories", 
        author: "Igloo Books", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C9.jpg"
    },
    { 
        title: "Lady and the Tramp", 
        author: "Walt Disney", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C10.jpg"
    },
    { 
        title: "Papa, Do you Love Me?", 
        author: "Barbara M. Joose", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C11.jpg"
    },
    { 
        title: "Queen Elizabeth", 
        author: "Maureen Spurgeon.", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C12.jpg"
    },
    { 
        title: "Guess How Much i love you 'Jigsaw Puzzle'", 
        author: "Sam McBratney", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C13.jpg"
    },
    { 
        title: "5 Minute Magical Stories", 
        author: "Disney Storybook Artists", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C14.jpg"
    },
    { 
        title: "The Jungle Book", 
        author: "Disney Storybook Artists", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C15.jpg"
    },
    { 
        title: "Gods Great News for Children", 
        author: "Katherine C. W. Hennig.", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C16.jpg"
    },
    { 
        title: "What Happens When Children Pray", 
        author: "Evelyn Christenson", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C17.jpg"
    },
    { 
        title: "Diplodocus", 
        author: "Ruth Thomson", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C18.jpg"
    },
    { 
        title: "The Great Big Book of Dinosaurs", 
        author: "Rupert Matthews", 
        location: "san-jose", 
        category: "children", 
        image: "../image/SAN JOSE/C19.jpg"
    },
    { 
        title: "Adrian Goldsworthy Vindolanda", 
        author: "Adrian Goldsworthy", 
        location: "san-jose", 
        category: "young-adult", 
        image: "../image/SAN JOSE/YA1.jpg"
    },
    { 
        title: "OH Dear Silvia", 
        author: "Dawn French ", 
        location: "san-jose", 
        category: "young-adult", 
        image: "../image/SAN JOSE/YA2.jpg"
    },
    { 
        title: "Down Under", 
        author: "Bill Bryson", 
        location: "san-jose", 
        category: "young-adult", 
        image: "../image/SAN JOSE/YA3.jpg"
    },
    { 
        title: "Let me Lie", 
        author: "Clark Mackintosh", 
        location: "san-jose", 
        category: "young-adult", 
        image: "../image/SAN JOSE/YA4.jpg"
    },
    { 
        title: "Rag and Bone Christmas", 
        author: "Dilly Court", 
        location: "san-jose", 
        category: "young-adult", 
        image: "../image/SAN JOSE/YA5.jpg"
    },
    { 
        title: "Perfect Daughter", 
        author: "Amanda Prowse", 
        location: "san-jose", 
        category: "adult", 
        image: "../image/SAN JOSE/A1.jpg"
    },
    { 
        title: "'Arena'", 
        author: "Simmon Scarrow and T.J. Andrews ", 
        location: "san-jose", 
        category: "adult", 
        image: "../image/SAN JOSE/A2.jpg"
    },
    { 
        title: "Burn for Burn", 
        author: "Jenny Han and Siobhan Vivian", 
        location: "san-jose", 
        category: "adult", 
        image: "../image/SAN JOSE/A3.jpg"
    },
    { 
        title: "Jeffrey Archer the Sins of the Father", 
        author: "Jeffrey Archer", 
        location: "san-jose", 
        category: "adult", 
        image: "../image/SAN JOSE/A4.jpg"
    },
    { 
        title: "Not Dead Yet", 
        author: "Peter James", 
        location: "san-jose", 
        category: "adult", 
        image: "../image/SAN JOSE/A5.jpg"
    },
    { 
        title: "I See You", 
        author: "Claire Mackintosh", 
        location: "san-jose", 
        category: "adult", 
        image: "../image/SAN JOSE/A6.jpg"
    },
    { 
        title: "The Swan Maid", 
        author: "Dilly Court", 
        location: "san-jose", 
        category: "adult", 
        image: "../image/SAN JOSE/A7.jpg"
    },
    { 
        title: "The Girl on the Train", 
        author: "Paula Hawkins", 
        location: "san-jose", 
        category: "adult", 
        image: "../image/SAN JOSE/A8.jpg"
    },
    { 
        title: "The Girl in the Letter", 
        author: "Emily Gunnis", 
        location: "san-jose", 
        category: "adult", 
        image: "../image/SAN JOSE/A9.jpg"
    },
    { 
        title: "Natties Secret", 
        author: "Dilly Court", 
        location: "san-jose", 
        category: "adult", 
        image: "../image/SAN JOSE/A10.jpg"
    },
    { 
        title: "Anybody Out There", 
        author: "Marian Reyes", 
        location: "san-jose", 
        category: "adult", 
        image: "../image/SAN JOSE/A11.jpg"
    },
    { 
        title: "The Summer of Secrets", 
        author: "Martina Reilly", 
        location: "san-jose", 
        category: "adult", 
        image: "../image/SAN JOSE/A12.jpg"
    },
    { 
        title: "The RED Queen", 
        author: "Philippa Gregory", 
        location: "san-jose", 
        category: "adult", 
        image: "../image/SAN JOSE/A13.jpg"
    },
    { 
        title: "The Amber Spyglass", 
        author: "Philip Pullman", 
        location: "san-jose", 
        category: "adult", 
        image: "../image/SAN JOSE/A14.jpg"
    },
    { 
        title: "Cinderella Sister", 
        author: "Dilly Court", 
        location: "san-jose", 
        category: "adult", 
        image: "../image/SAN JOSE/A15.jpg"
    },
    { 
        title: "The New Bestseller Marian Keyes the Other side of the Story", 
        author: "Marian Keyes", 
        location: "talisay", 
        category: "adult", 
        image: "../image/TALISAY/A1.jpg"
    },
    { 
        title: "Together for Christmas", 
        author: "Carol Rivers", 
        location: "talisay", 
        category: "adult", 
        image: "../image/TALISAY/A2.jpg"
    },
    { 
        title: "Us", 
        author: "David Nicholls", 
        location: "talisay", 
        category: "adult", 
        image: "../image/TALISAY/A3.jpg"
    },
    { 
        title: "Coming Home to Island House", 
        author: "Erica James", 
        location: "talisay", 
        category: "adult", 
        image: "../image/TALISAY/A4.jpg"
    },
    { 
        title: "A Mother Wish", 
        author: "Dilly Court", 
        location: "talisay", 
        category: "adult", 
        image: "../image/TALISAY/A5.jpg"
    },
    { 
        title: "Barack Obama Dreams From my Father", 
        author: "Barack Obama", 
        location: "talisay", 
        category: "adult", 
        image: "../image/TALISAY/A6.jpg"
    },
    { 
        title: "The No. 1 BestSeller Dawn French Oh Dear Silvia", 
        author: "Dawn French.", 
        location: "talisay", 
        category: "adult", 
        image: "../image/TALISAY/A7.jpg"
    },
    { 
        title: "An Eligible Bachelor", 
        author: "Veronica Henry", 
        location: "talisay", 
        category: "adult", 
        image: "../image/TALISAY/A8.jpg"
    },
    { 
        title: "Because of You", 
        author: "Dawn French", 
        location: "talisay", 
        category: "adult", 
        image: "../image/TALISAY/A9.jpg"
    },
    { 
        title: "My Favorite Fairy Tales 8 Magical Stories", 
        author: "Nina Filipek", 
        location: "talisay", 
        category: "young-adult", 
        image: "../image/TALISAY/YA.png"
    },
    { 
        title: "The Children Bible in 365 Stories", 
        author: "Mary Batchelor", 
        location: "talisay", 
        category: "young-adult", 
        image: "../image/TALISAY/YA1.jpg"
    },
    { 
        title: "Story Book Collection", 
        author: "PIXAR", 
        location: "talisay", 
        category: "young-adult", 
        image: "../image/TALISAY/YA3.jpg"
    },
    { 
        title: "Favorite Bedtime Stories", 
        author: "Jacob M. Garza", 
        location: "talisay", 
        category: "young-adult", 
        image: "../image/TALISAY/YA4.jpg"
    },
    { 
        title: "Funny Stories", 
        author: "Miles Kelly", 
        location: "talisay", 
        category: "young-adult", 
        image: "../image/TALISAY/YA2.jpg"
    },
    { 
        title: "Roald Dahl: The Witches", 
        author: "Quentin Blake", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C1.png"
    },
    { 
        title: "Sleep-Over", 
        author: "Nick Sharadt", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C2.jpg"
    },
    { 
        title: "The Naughtiest Girl", 
        author: "Enid Blyton", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C3.jpg"
    },
    { 
        title: "Roald Dahl: James and the Giant Peach", 
        author: "Quentin Blake", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C4.jpg"
    },
    { 
        title: "Roald Dahl: The BFG", 
        author: "Quentin Blake", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C5.jpg"
    },
    { 
        title: "Roald Dahl: Fantastic Mr Fox", 
        author: "Quentin Blake", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C6.jpg"
    },
    { 
        title: "The Storybook of the Legends", 
        author: "Shannon Hale", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C7.jpg"
    },
    { 
        title: "Shock SuspenStories", 
        author: "William Gaines", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C8.jpg"
    },
    { 
        title: "Violet Mackerel", 
        author: "Anna Brandford", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C9.png"
    },
    { 
        title: "Bad Girls", 
        author: "Jacqueline Wilson", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C10.jpg"
    },
    { 
        title: "Dork Diaries", 
        author: "Rachel Renee Russell", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C11.jpg"
    },
    { 
        title: "Amelia Jane Gets into Trouble", 
        author: "Enid Blyton", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C12.jpg"
    },
    { 
        title: "Roald Dahl: Charlie and the Chocolate Factory ", 
        author: "Quentin Blake", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C13.jpg"
    },
    { 
        title: "Roald Dahl: George's Marvelous Medicine", 
        author: "Quentin Blake", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C14.jpg"
    },
    { 
        title: "Roald Dahl: BOY", 
        author: "Quentin Blake", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C15.jpg"
    },
    { 
        title: "Jacqueline Wilson: The Tracy Breaker Quiz Book", 
        author: "Nick Sharatt", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C17.jpg"
    },
    { 
        title: "Jacqueline Wilson: Diamond Girls", 
        author: "Nick Sharatt", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C18.jpg"
    },
    { 
        title: "Jacqueline Wilson: The Illustrated Mom", 
        author: "Nick Sharatt", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C19.jpeg"
    },
    { 
        title: "Jacqueline Wilson: My Mum Tracy Breaker", 
        author: "Nick Sharatt", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C20.jpg"
    },
    { 
        title: "Our Daily Bread", 
        author: "N/A", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C21.jpg"
    },
    { 
        title: "Paano Maging Joyfully Single", 
        author: "Harold J. Sala", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C22.jpg"
    },
    { 
        title: "K-9 Unit Tracker", 
        author: "Lenora Worth", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C23.jpg"
    },
    { 
        title: "Ruth Rendell Harm Done", 
        author: "Christopher Ravenscroft", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C24.jpg"
    },
    { 
        title: "Folklore and Literature", 
        author: "Manuel Da Costa Fontes", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C25.jpg"
    },
    { 
        title: "Ang Bagong Tipan ng Magandang Balita ng Bibliya", 
        author: "Philippine Bible Society", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C26.jpg"
    },
    { 
        title: "Nicci French Until IT's Over", 
        author: "Nicci French,", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C27.jpg"
    },
    { 
        title: "Mr Nobody Eyes", 
        author: "Michael Morpurgo", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C28.jpg"
    },
    { 
        title: "The green and pleasant land", 
        author: "Ayisha Malik", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C29.jpg"
    },
    { 
        title: "Pigeon English", 
        author: "Stephen Kelman", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C30.jpg"
    },
    { 
        title: "Tuffers: Cricket Tales", 
        author: "Phil Tufnell", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C31.jpg"
    },
    { 
        title: "The Mother's Day Victory", 
        author: "Rosie Hendry", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C32.jpg"
    },
    { 
        title: "Green Crafts for Children", 
        author: "Emma Harly", 
        location: "talisay", 
        category: "children", 
        image: "../image/TALISAY/C33.jpg"
    },
    { 
        title: "Scarlet", 
        author: "Cathy Cassidy ", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C1.jpg"
    },
    { 
        title: "Rainy Day Fun", 
        author: "Joe Rhatigan. ", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C2.jpg"
    },
    { 
        title: "Glubbslyme", 
        author: "Jacqueline Wilson", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C3.jpg"
    },
    { 
        title: "ROALD DAHL FANTASTIC MR. FOX", 
        author: "Quentin Blake", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C4.jpg"
    },
    { 
        title: "Five on a Treasure Island", 
        author: "Enid Blyton", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C5.jpg"
    },
    { 
        title: "The Cat Mummy", 
        author: "Jacqueline Wilson", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C6.jpg"
    },
    { 
        title: "The Berenstain Bears and the Galloping Ghost", 
        author: "Stan and Jan Berenstain", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C7.jpg"
    },
    { 
        title: "The Garden", 
        author: "Louisa Leaman", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C8.jpg"
    },
    { 
        title: "Magical Stories", 
        author: "Roald Dahl", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C9.jpg"
    },
    { 
        title: "Amelia Jane Again!", 
        author: "Enid Blyton", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C10.jpg"
    },
    { 
        title: "Sweet Honey: The Chocolate Box Girls", 
        author: "Cathy Cassidy", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C11.jpg"
    },
    { 
        title: "Thirty Three Saints for Boys and Girls", 
        author: "Marguerite E. Jones", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C12.jpg"
    },
    { 
        title: "Super Average Kids", 
        author: "Bob Smiley and Jesse Florea", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C13.jpg"
    },
    { 
        title: "ROALD DAHL: The Witches", 
        author: "Quentin Blake", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C14.jpg"
    },
    { 
        title: "Dork Diaries: Dear Dork", 
        author: "Rachel Renee Russell", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C15.jpg"
    },
    { 
        title: "Ballet Shoes", 
        author: "Noel Streatfeild", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C16.jpg"
    },
    { 
        title: "Dork Diaries: Skating Sensation", 
        author: "Rachel Renee Russell", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C17.jpg"
    },
    { 
        title: "Dork Diaries: How to Dork Your Diary", 
        author: "Rachel Renee Russell", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C18.jpg"
    },
    { 
        title: "Dork Diaries: Drama Queen", 
        author: "Rachel Renee Russell", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C19.jpg"
    },
    { 
        title: "Scarlet", 
        author: "Cathy Cassidy", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C20.jpg"
    },
    { 
        title: "Dork Diaries: Holiday Heartbreak", 
        author: "Rachel Renee Russell", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C21.jpg"
    },
    { 
        title: "Dork Diaries: Puppy Love", 
        author: "Rachel Renee Russell", 
        location: "pto-rivas-itaas", 
        category: "children", 
        image: "../image/ITAAS/C22.jpg"
    },
    { 
        title: "The Healthy Puppet", 
        author: "Deborah Straw", 
        location: "pto-rivas-itaas", 
        category: "young-adult", 
        image: "../image/ITAAS/YA1.jpg"
    },
    { 
        title: "Shoe Money", 
        author: "Maggie Alderson", 
        location: "pto-rivas-itaas", 
        category: "young-adult", 
        image: "../image/ITAAS/YA2.jpg"
    },
    { 
        title: "James and The Giant Peach", 
        author: "Doris Burton", 
        location: "pto-rivas-itaas", 
        category: "young-adult", 
        image: "../image/ITAAS/YA3.jpg"
    },
    { 
        title: "All Stair Macleans Death Train", 
        author: "Alastair MacNeill", 
        location: "pto-rivas-itaas", 
        category: "young-adult", 
        image: "../image/ITAAS/YA4.jpg"
    },
    { 
        title: "My Lovely Wife", 
        author: "Samantha Downing", 
        location: "pto-rivas-itaas", 
        category: "young-adult", 
        image: "../image/ITAAS/YA5.jpg"
    },
    { 
        title: "The Freedom Broker", 
        author: "H.K. Howe", 
        location: "pto-rivas-itaas", 
        category: "young-adult", 
        image: "../image/ITAAS/YA6.jpg"
    },
    { 
        title: "The Picture House by the Sea", 
        author: "Holly Hepburn", 
        location: "pto-rivas-itaas", 
        category: "young-adult", 
        image: "../image/ITAAS/YA7.jpg"
    },
    { 
        title: "Its Not Supposed to be this Way", 
        author: "Lysa TerKeurst", 
        location: "pto-rivas-itaas", 
        category: "young-adult", 
        image: "../image/ITAAS/YA8.jpg"
    },
    { 
        title: "Light From Heaven", 
        author: "Jan Karon", 
        location: "pto-rivas-itaas", 
        category: "young-adult", 
        image: "../image/ITAAS/YA9.jpg"
    },
    { 
        title: "A Short History of Tractors in Ukrainian", 
        author: "Marina Lewycka", 
        location: "pto-rivas-itaas", 
        category: "young-adult", 
        image: "../image/ITAAS/YA10.jpg"
    },
    { 
        title: "The Voice of an Angel", 
        author: "Catherine Cookson", 
        location: "pto-rivas-itaas", 
        category: "young-adult", 
        image: "../image/ITAAS/YA11.jpg"
    },
    { 
        title: "The Curious Incident of the Dog in the Night-Time", 
        author: "Mark Haddon", 
        location: "pto-rivas-itaas", 
        category: "young-adult", 
        image: "../image/ITAAS/YA12.jpg"
    },
    { 
        title: "World War II", 
        author: "Mark Haddon", 
        location: "pto-rivas-itaas", 
        category: "adult", 
        image: "../image/ITAAS/A1.jpg"
    },
    { 
        title: "The Innocent Man", 
        author: "John Grisham", 
        location: "pto-rivas-itaas", 
        category: "adult", 
        image: "../image/ITAAS/A2.jpg"
    },
    { 
        title: "The Thursday Murder Club", 
        author: "Richard Osman", 
        location: "pto-rivas-itaas", 
        category: "adult", 
        image: "../image/ITAAS/A3.jpg"
    },
    { 
        title: "Atomic Habits", 
        author: "James Clear", 
        location: "pto-rivas-itaas", 
        category: "adult", 
        image: "../image/ITAAS/A4.jpg"
    },
    { 
        title: "Everything Under", 
        author: "Daisy Johnson", 
        location: "pto-rivas-itaas", 
        category: "adult", 
        image: "../image/ITAAS/A5.jpg"
    },
    { 
        title: "War Dog", 
        author: "Damien Lewis", 
        location: "pto-rivas-itaas", 
        category: "adult", 
        image: "../image/ITAAS/A6.jpg"
    },
    { 
        title: "A Family Henry", 
        author: "Veronica Henry", 
        location: "pto-rivas-itaas", 
        category: "adult", 
        image: "../image/ITAAS/A7.jpg"
    },
    { 
        title: "We were on a Break", 
        author: "Lindsey Kelk", 
        location: "pto-rivas-itaas", 
        category: "adult", 
        image: "../image/ITAAS/A8.jpg"
    },
    { 
        title: "The Life and Times of a Thunderbolt Kid", 
        author: "Bill Bryson", 
        location: "pto-rivas-itaas", 
        category: "adult", 
        image: "../image/ITAAS/A9.jpg"
    }
];

// DOM elements
const bookListElement = document.getElementById('books-list');
const searchInput = document.getElementById('book-search');
const locationFilter = document.getElementById('location-filter');
const categoryFilter = document.getElementById('category-filter');
const noResultsMessage = document.querySelector('.no-results-message');

// Favorites functionality
let favorites = JSON.parse(localStorage.getItem('favoriteBooks') || '[]');

// Display books function with enhanced animations
function displayBooks(booksToDisplay) {
    // Hide loading animation
    const loadingElement = document.querySelector('.book-loading');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }

    if (booksToDisplay.length === 0) {
        bookListElement.innerHTML = '';
        noResultsMessage.style.display = 'block';
        return;
    }

    noResultsMessage.style.display = 'none';
    bookListElement.innerHTML = '';

    booksToDisplay.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.style.animationDelay = `${index * 0.1}s`;
        
        const isFavorited = favorites.includes(`${book.title}-${book.author}`);
        const categoryColor = getCategoryColor(book.category);
        
        bookItem.innerHTML = `
            <div class="favorite-icon ${isFavorited ? 'favorited' : ''}" onclick="toggleFavorite(this, '${book.title}', '${book.author}')">
                <i class="fas fa-heart"></i>
            </div>
            <span class="book-category" style="background: ${categoryColor}">${book.category.toUpperCase()}</span>
            <img src="${book.image}" alt="${book.title}" onerror="this.src='../image/placeholder.jpg'">
            <div class="book-content">
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p class="book-location"><i class="fas fa-map-marker-alt"></i> ${formatLocation(book.location)}</p>
            </div>
        `;
        
        bookListElement.appendChild(bookItem);
    });

    // Trigger scroll animations
    observeBookItems();
}
       document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
        document.addEventListener('keydown', function (e) {
            // Disable F12
            if (e.key === 'F12') {
                e.preventDefault();
            }
            // Disable Ctrl+Shift+I / Ctrl+U / Ctrl+S / Ctrl+C
            if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
                (e.ctrlKey && ['u', 's', 'c'].includes(e.key.toLowerCase()))) {
                e.preventDefault();
            }
        });
        document.addEventListener('copy', (e) => e.preventDefault());
        document.addEventListener('cut', (e) => e.preventDefault());
        document.addEventListener('paste', (e) => e.preventDefault());
// Get category color
function getCategoryColor(category) {
    const colors = {
        'children': '#10b981',
        'young-adult': '#3b82f6',
        'adult': '#8b5cf6'
    };
    return colors[category] || '#64748b';
}

// Format location name
function formatLocation(location) {
    return location.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// Toggle favorite function with animation
function toggleFavorite(element, title, author) {
    const bookId = `${title}-${author}`;
    const heartIcon = element.querySelector('i');
    
    if (favorites.includes(bookId)) {
        favorites = favorites.filter(id => id !== bookId);
        element.classList.remove('favorited');
    } else {
        favorites.push(bookId);
        element.classList.add('favorited');
        
        // Create heart particles animation
        createHeartParticles(element);
    }
    
    localStorage.setItem('favoriteBooks', JSON.stringify(favorites));
}

// Create heart particles animation
function createHeartParticles(element) {
    const rect = element.getBoundingClientRect();
    const particles = 5;
    
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = '❤️';
        particle.className = 'heart-particle';
        particle.style.position = 'fixed';
        particle.style.left = rect.left + rect.width / 2 + 'px';
        particle.style.top = rect.top + rect.height / 2 + 'px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.fontSize = '1rem';
        
        // Random direction
        const angle = (Math.PI * 2 * i) / particles;
        const velocity = 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        document.body.appendChild(particle);
        
        // Animate particle
        let frame = 0;
        const animate = () => {
            frame++;
            const progress = frame / 60; // 1 second at 60fps
            
            if (progress >= 1) {
                particle.remove();
                return;
            }
            
            const x = rect.left + rect.width / 2 + vx * progress;
            const y = rect.top + rect.height / 2 + vy * progress - 50 * progress * progress;
            const opacity = 1 - progress;
            
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.opacity = opacity;
            
            requestAnimationFrame(animate);
        };
        
        requestAnimationFrame(animate);
    }
}

// Enhanced filter function with debouncing
let filterTimeout;
function filterBooks() {
    clearTimeout(filterTimeout);
    filterTimeout = setTimeout(() => {
        const searchValue = searchInput.value.toLowerCase().trim();
        const locationValue = locationFilter.value;
        const categoryValue = categoryFilter.value;

        const filteredBooks = books.filter(book => {
            const matchesSearch = searchValue === '' || 
                book.title.toLowerCase().includes(searchValue) || 
                book.author.toLowerCase().includes(searchValue);
            const matchesLocation = locationValue === 'all' || book.location === locationValue;
            const matchesCategory = categoryValue === 'all' || book.category === categoryValue;
            return matchesSearch && matchesLocation && matchesCategory;
        });

        displayBooks(filteredBooks);
    }, 300);
}

// Intersection Observer for scroll animations
function observeBookItems() {
    const bookItems = document.querySelectorAll('.book-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    bookItems.forEach((item) => {
        observer.observe(item);
    });
}

// Enhanced scroll effects
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(59, 130, 246, 0.95) 100%)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, var(--primary-blue) 0%, var(--light-blue) 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Search input enhancements
searchInput.addEventListener('input', () => {
    const searchIcon = document.querySelector('.search-icon');
    if (searchInput.value.length > 0) {
        searchIcon.style.color = 'var(--light-blue)';
    } else {
        searchIcon.style.color = 'var(--gray)';
    }
    filterBooks();
});

// Add event listeners
if (searchInput) searchInput.addEventListener('input', filterBooks);
if (locationFilter) locationFilter.addEventListener('change', filterBooks);
if (categoryFilter) categoryFilter.addEventListener('change', filterBooks);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Show loading animation initially
    setTimeout(() => {
        displayBooks(books);
    }, 1000);
    
    // Add entrance animations to elements
    const animatedElements = document.querySelectorAll('.search-container, .section-title, .section-description');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
});

// Security features (disable right-click and dev tools)
document.addEventListener("contextmenu", event => event.preventDefault());
document.addEventListener("keydown", event => {
    if (event.ctrlKey && (event.key === "u" || event.key === "s" || event.key === "i" || event.key === "j")) {
        event.preventDefault();
    }
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});

// Performance optimization
window.addEventListener('load', () => {
    // Preload images for better performance
    const imageUrls = books.map(book => book.image);
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
});
