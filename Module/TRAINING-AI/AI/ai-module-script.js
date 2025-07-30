
// Learning Module Data
const moduleData = {
    lessons: [
        {
            title: "What is AI?",
            content: `
                <h3>Understanding Artificial Intelligence</h3>
                <p>Artificial Intelligence (AI) is when machines are made to do tasks that usually need human intelligence, like thinking, learning, solving problems, understanding what they see, and processing language.</p>

                <h4>Key Characteristics of AI:</h4>
                <ul>
                    <li><strong>Thinking:</strong> Machines can process information and make decisions</li>
                    <li><strong>Learning:</strong> The ability to improve performance based on experience</li>
                    <li><strong>Problem Solving:</strong> Finding solutions to complex challenges</li>
                    <li><strong>Visual Understanding:</strong> Interpreting and analyzing visual information</li>
                    <li><strong>Language Processing:</strong> Understanding and generating human language</li>
                </ul>
                
                <h4>How AI Works:</h4>
                <p>AI systems use algorithms and data to simulate human intelligence. They analyze patterns, learn from examples, and make predictions or decisions based on their training.</p>
            `,
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "What is ChatGPT?",
            content: `
                <h3>Introduction to ChatGPT</h3>
                <p>ChatGPT is a conversational AI created by OpenAI using the GPT architecture. It generates human-like text and can handle various language tasks. It is designed to create human-like text based on input and can help with tasks like answering questions, giving explanations, and engaging in conversations.</p>
                
                <h4>Key Features of ChatGPT:</h4>
                <ul>
                    <li><strong>Conversational AI:</strong> Can engage in natural dialogue</li>
                    <li><strong>Text Generation:</strong> Creates human-like responses</li>
                    <li><strong>Question Answering:</strong> Provides informative answers</li>
                    <li><strong>Explanations:</strong> Breaks down complex topics</li>
                    <li><strong>Multiple Tasks:</strong> Handles various language-related activities</li>
                </ul>
                
                <h4>GPT Architecture:</h4>
                <p>GPT stands for "Generative Pre-trained Transformer" - a type of neural network designed specifically for understanding and generating human language.</p>
            `,
            image: "https://images.unsplash.com/photo-1676277791608-ac54ab0d5d72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "How ChatGPT Works",
            content: `
                <h3>Understanding ChatGPT's Functionality</h3>
                <p>ChatGPT is trained on large amounts of text from books, articles, and websites, learning language patterns, grammar, and facts to answer questions. After training, it is fine-tuned with specific datasets to improve accuracy and better meet user expectations.</p>
                
                <h4>The Process:</h4>
                <ol>
                    <li><strong>Training:</strong> ChatGPT was trained on vast amounts of text data from books, articles, and websites</li>
                    <li><strong>Pattern Recognition:</strong> It learned patterns in language, grammar, and knowledge</li>
                    <li><strong>Input Processing:</strong> When you type a message, it analyzes your text</li>
                    <li><strong>Context Understanding:</strong> It considers the conversation history and context</li>
                    <li><strong>Response Generation:</strong> Based on input, ChatGPT predicts and generates relevant text by refining its response word by word</li>
                </ol>
                
                <h4>Capabilities:</h4>
                <ul>
                    <li>Engage in conversations and answer questions</li>
                    <li>Write essays and create stories</li>
                    <li>Summarize reports and draft emails</li>
                    <li>Provide explanations and tutoring</li>
                </ul>
            `,
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "ChatGPT Applications & Tips",
            content: `
                <h3>Applications of ChatGPT</h3>
                <ul>
                    <li><strong>Customer Service:</strong> Automating chat responses to handle customer inquiries, complaints, and support tickets</li>
                    <li><strong>Content Creation:</strong> Assisting in writing blog posts, product descriptions, social media content</li>
                    <li><strong>Education:</strong> Providing explanations, tutoring in various subjects, and offering personalized learning experiences</li>
                    <li><strong>Entertainment:</strong> Creating interactive narratives, generating dialogue for virtual characters</li>
                    <li><strong>Business:</strong> Drafting emails, summarizing reports, and assisting in decision-making processes</li>
                </ul>
                
                <h4>How to Write Effective ChatGPT Prompts:</h4>
                <ol>
                    <li><strong>Be Clear About Format:</strong> Specify how you want the response structured (list, code block, table)</li>
                    <li><strong>Define Your Audience:</strong> Provide context about who will be reading the response</li>
                    <li><strong>Use Examples:</strong> Share examples of tone, format, or style you prefer</li>
                    <li><strong>Provide References:</strong> Include specific sources or paste text for context</li>
                    <li><strong>Experiment with Role-Play:</strong> Ask ChatGPT to respond as a specific persona</li>
                    <li><strong>Refine and Iterate:</strong> Expect to refine prompts and regenerate responses several times</li>
                </ol>
                
                <h4>Advantages & Disadvantages:</h4>
                <p><strong>Advantages:</strong> Versatile across various fields, fast and efficient, capable of creative content</p>
                <p><strong>Disadvantages:</strong> Can give incorrect answers, may reflect training data biases, lacks true understanding</p>
            `,
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "What is Ideogram?",
            content: `
                <h3>Introduction to Ideogram AI</h3>
                <p>Ideogram is a generative AI image generator that can create everything from artwork to realistic photos and diagrams based on your text prompt. It lets users generate up to 25 sets of four images daily for free.</p>
                
                <h4>Key Features of Ideogram AI:</h4>
                <ul>
                    <li><strong>Text-to-Image Conversion:</strong> Generates high-quality images from user prompts</li>
                    <li><strong>Text in Images:</strong> Allows users to create visuals with stylized and readable text</li>
                    <li><strong>Customizability:</strong> Wide range of styles, colors, and design features</li>
                    <li><strong>User-Friendly:</strong> Intuitive interface suitable for beginners and professionals</li>
                </ul>
                
                <h4>How to Use Ideogram AI:</h4>
                <ol>
                    <li>Visit the Ideogram website and sign up using Google or Apple ID</li>
                    <li>Choose and input a username when prompted</li>
                    <li>Type your text prompt in the search bar at the top</li>
                    <li>Select aspect ratio and turn Magic Prompt on or off</li>
                    <li>Click generate and wait for four images to be created</li>
                    <li>Right-click and save your favorite image or use remix options</li>
                </ol>
                
                <h4>Important Note:</h4>
                <p>With a free Ideogram AI account, you cannot delete any images. Once generated, images stay on the platform permanently.</p>
            `,
            image: "https://images.unsplash.com/photo-1686191128892-8983c73d0ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Ideogram Features & Tips",
            content: `
                <h3>Advanced Ideogram Features</h3>
                
                <h4>Aspect Ratios & Styles:</h4>
                <ul>
                    <li><strong>Vertical:</strong> 1:3 (banners), 9:16 (smartphones), 2:3 (portraits)</li>
                    <li><strong>Square:</strong> 1:1 (social media)</li>
                    <li><strong>Horizontal:</strong> 16:9 (screens), 3:2 (photography), 3:1 (large banners)</li>
                </ul>
                
                <h4>Style Options:</h4>
                <ul>
                    <li><strong>General:</strong> Ideal for artistic works, abstract paintings, sketches</li>
                    <li><strong>Realistic:</strong> Real-life photographic images</li>
                    <li><strong>Design:</strong> Logos, flyers, menus, graphic design elements</li>
                    <li><strong>3D:</strong> Characters and objects with 3D visual appeal</li>
                    <li><strong>Anime:</strong> Anime-style characters and scenes</li>
                </ul>
                
                <h4>Key Tools:</h4>
                <ul>
                    <li><strong>Magic Prompt:</strong> Uses AI to enhance your prompts automatically for better results</li>
                    <li><strong>Color Palettes:</strong> Set overall color schemes for your image generation</li>
                    <li><strong>Remix:</strong> Make changes to existing images with adjustable influence weight</li>
                    <li><strong>Describe:</strong> Detail the content of uploaded or generated images</li>
                </ul>
                
                <h4>Prompting Tips:</h4>
                <ul>
                    <li>Be precise and avoid contradictions in your descriptions</li>
                    <li>Use size qualifiers: huge, big, normal, small, minuscule</li>
                    <li>Specify styles: watercolor, pencil sketch, photography</li>
                    <li>Add text elements with clear positioning instructions</li>
                    <li>Consider lighting and atmosphere in your prompts</li>
                </ul>
                
                <h4>Applications:</h4>
                <p>Personal projects, marketing materials, educational infographics, entertainment content, book covers, and concept art.</p>
            `,
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        }
    ]
};

// Quiz Questions
const quizQuestions = [
    {
        question: "What is Artificial Intelligence (AI)?",
        options: ["Machines that only calculate numbers", "Machines doing tasks that need human intelligence", "A type of computer game", "A new kind of social media"],
        correct: 1
    },
    {
        question: "Which company created ChatGPT?",
        options: ["Google", "Microsoft", "OpenAI", "Apple"],
        correct: 2
    },
    {
        question: "What can ChatGPT NOT do?",
        options: ["Answer questions", "Write stories", "Feel emotions", "Summarize reports"],
        correct: 2
    },
    {
        question: "What is one disadvantage of ChatGPT?",
        options: ["It is slow to respond", "It gives perfect answers every time", "It may give wrong or biased answers", "It can only speak one language"],
        correct: 2
    },
    {
        question: "How can you make ChatGPT give better responses?",
        options: ["Use clear prompts", "Only ask yes/no questions", "Avoid using examples", "Give very short commands"],
        correct: 0
    },
    {
        question: "What does Ideogram do?",
        options: ["It writes essays", "It generates images from text", "It translates languages", "It plays music"],
        correct: 1
    },
    {
        question: "What is a unique feature of Ideogram?",
        options: ["It can delete free images anytime", "It does not allow custom styles", "It lets you add readable text to images", "It only generates black-and-white images"],
        correct: 2
    },
    {
        question: "What does the Remix feature in Ideogram allow you to do?",
        options: ["Create music from images", "Make changes to an existing image", "Delete generated images", "Share images directly to social media"],
        correct: 1
    },
    {
        question: "What is the Magic Prompt in Ideogram?",
        options: ["A tool to make text bigger", "A feature that improves your prompts automatically", "A button to delete mistakes", "A setting to block other users"],
        correct: 1
    },
    {
        question: "Which of these is an application of Ideogram?",
        options: ["Writing novels", "Designing ad banners", "Playing video games", "Fixing computer bugs"],
        correct: 1
    }
];

// Global variables
let currentLesson = 0;
let currentQuestion = 0;
let selectedAnswers = [];
let score = 0;
let quizStarted = false;

// DOM Elements
const learningInterface = document.getElementById('learning-interface');
const quizSection = document.getElementById('quiz-section');
const lessonContent = document.getElementById('lesson-content');
const lessonImage = document.getElementById('lesson-image');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const quizBtn = document.getElementById('quiz-btn');
const questionCard = document.getElementById('question-card');
const questionText = document.getElementById('question-text');
const answerOptions = document.getElementById('answer-options');
const quizNextBtn = document.getElementById('quiz-next-btn');
const quizProgressText = document.getElementById('quiz-progress-text');
const quizProgressFill = document.getElementById('quiz-progress-fill');
const quizResults = document.getElementById('quiz-results');
const quizContainer = document.getElementById('quiz-container');
const finalScore = document.getElementById('final-score');
const resultsMessage = document.getElementById('results-message');
const resultsIcon = document.getElementById('results-icon');

// Initialize the application
function startLearning() {
    document.querySelector('.hero').style.display = 'none';
    learningInterface.style.display = 'block';
    loadLesson(0);
}

// Load a specific lesson
function loadLesson(lessonIndex) {
    currentLesson = lessonIndex;
    const lesson = moduleData.lessons[lessonIndex];
    
    // Add animation class
    lessonContent.classList.remove('animate-fadeInLeft');
    lessonImage.classList.remove('animate-fadeInRight');
    
    setTimeout(() => {
        lessonContent.innerHTML = lesson.content;
        lessonImage.querySelector('.content-image').src = lesson.image;
        lessonImage.querySelector('.content-image').alt = lesson.title;
        
        lessonContent.classList.add('animate-fadeInLeft');
        lessonImage.classList.add('animate-fadeInRight');
    }, 100);
    
    updateProgress();
    updateNavigationButtons();
}

// Update progress bar
function updateProgress() {
    const progress = ((currentLesson + 1) / moduleData.lessons.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;
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
// Update navigation buttons
function updateNavigationButtons() {
    prevBtn.disabled = currentLesson === 0;
    
    if (currentLesson === moduleData.lessons.length - 1) {
        nextBtn.style.display = 'none';
        quizBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        quizBtn.style.display = 'none';
    }
}

// Navigation functions
function previousLesson() {
    if (currentLesson > 0) {
        loadLesson(currentLesson - 1);
    }
}

function nextLesson() {
    if (currentLesson < moduleData.lessons.length - 1) {
        loadLesson(currentLesson + 1);
    }
}

// Start the quiz
function startQuiz() {
    learningInterface.style.display = 'none';
    quizSection.style.display = 'block';
    quizResults.style.display = 'none';
    quizContainer.style.display = 'block';
    
    currentQuestion = 0;
    selectedAnswers = [];
    score = 0;
    quizStarted = true;
    
    loadQuestion(0);
}

// Load a quiz question
function loadQuestion(questionIndex) {
    currentQuestion = questionIndex;
    const question = quizQuestions[questionIndex];
    
    // Add animation
    questionCard.classList.remove('animate-slideIn');
    setTimeout(() => {
        questionText.textContent = question.question;
        
        // Create answer options
        answerOptions.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'answer-option';
            optionDiv.innerHTML = `
                <div style="width: 30px; height: 30px; border: 2px solid var(--gray); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <span style="font-weight: bold; color: var(--gray);">${String.fromCharCode(65 + index)}</span>
                </div>
                <span>${option}</span>
            `;
            optionDiv.onclick = () => selectAnswer(index, optionDiv);
            answerOptions.appendChild(optionDiv);
        });
        
        questionCard.classList.add('animate-slideIn');
    }, 100);
    
    updateQuizProgress();
    quizNextBtn.disabled = true;
}

// Select an answer
function selectAnswer(answerIndex, optionElement) {
    // Remove previous selection
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to current option
    optionElement.classList.add('selected');
    selectedAnswers[currentQuestion] = answerIndex;
    quizNextBtn.disabled = false;
}

// Move to next question
function nextQuestion() {
    const question = quizQuestions[currentQuestion];
    const selectedAnswer = selectedAnswers[currentQuestion];
    
    // Show correct/incorrect answers
    document.querySelectorAll('.answer-option').forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && index !== question.correct) {
            option.classList.add('incorrect');
        }
    });
    
    // Check if answer is correct
    if (selectedAnswer === question.correct) {
        score++;
    }
    
    // Wait before moving to next question
    setTimeout(() => {
        if (currentQuestion < quizQuestions.length - 1) {
            loadQuestion(currentQuestion + 1);
        } else {
            showQuizResults();
        }
    }, 1500);
    
    quizNextBtn.disabled = true;
}

// Update quiz progress
function updateQuizProgress() {
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    quizProgressFill.style.width = `${progress}%`;
    quizProgressText.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    
    if (currentQuestion === quizQuestions.length - 1) {
        quizNextBtn.innerHTML = 'Finish Quiz <i class="fas fa-check"></i>';
    } else {
        quizNextBtn.innerHTML = 'Next Question <i class="fas fa-arrow-right"></i>';
    }
}

// Show quiz results
function showQuizResults() {
    quizContainer.style.display = 'none';
    quizResults.style.display = 'block';
    
    finalScore.textContent = score;
    
    let message, iconClass;
    if (score >= 8) {
        message = "Excellent! You have a great understanding of AI, ChatGPT, and Ideogram concepts.";
        iconClass = "fas fa-trophy";
        resultsIcon.style.color = "var(--accent-yellow)";
    } else if (score >= 6) {
        message = "Good job! You have a solid grasp of AI fundamentals and tools.";
        iconClass = "fas fa-medal";
        resultsIcon.style.color = "var(--success-green)";
    } else if (score >= 4) {
        message = "Not bad! Consider reviewing the lessons for better understanding.";
        iconClass = "fas fa-thumbs-up";
        resultsIcon.style.color = "var(--light-blue)";
    } else {
        message = "Keep learning! Review the lessons and try again.";
        iconClass = "fas fa-book";
        resultsIcon.style.color = "var(--warning-orange)";
    }
    
    resultsMessage.textContent = message;
    resultsIcon.className = iconClass;
}

// Quiz control functions
function retakeQuiz() {
    startQuiz();
}

function backToLearning() {
    quizSection.style.display = 'none';
    learningInterface.style.display = 'block';
    loadLesson(0);
}

// Mobile menu toggle
document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    document.querySelectorAll('.lesson-content, .lesson-image, .question-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add stagger animation to hero elements
    const heroElements = document.querySelectorAll('.animate-fadeInUp');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
    
    addScrollAnimations();
});

// Add smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add floating animation to cards
function addFloatingAnimation() {
    const cards = document.querySelectorAll('.lesson-container, .question-card, .results-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize floating animations when learning interface is shown
const originalStartLearning = startLearning;
startLearning = function() {
    originalStartLearning();
    setTimeout(addFloatingAnimation, 100);
};
