
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

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Module Data
const moduleData = {
    intro: {
        title: "Introduction to AI",
        lessons: [
            {
                title: "What is Artificial Intelligence?",
                content: `
                    <h3>Understanding AI</h3>
                    <p>Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.</p>
                    
                    <h4>Key Characteristics of AI:</h4>
                    <ul>
                        <li><strong>Learning:</strong> The ability to improve performance based on experience</li>
                        <li><strong>Reasoning:</strong> The ability to solve problems through logical deduction</li>
                        <li><strong>Perception:</strong> The ability to interpret sensory input</li>
                        <li><strong>Language Understanding:</strong> The ability to process and generate human language</li>
                    </ul>
                    
                    <h4>Types of AI:</h4>
                    <ul>
                        <li><strong>Narrow AI:</strong> AI that is designed for specific tasks (like virtual assistants)</li>
                        <li><strong>General AI:</strong> AI that can perform any intellectual task that a human can</li>
                        <li><strong>Super AI:</strong> AI that surpasses human intelligence in all aspects</li>
                    </ul>
                `
            },
            {
                title: "History and Evolution of AI",
                content: `
                    <h3>AI Timeline</h3>
                    <p>The journey of AI development spans several decades, marked by significant breakthroughs and innovations.</p>
                    
                    <h4>Key Milestones:</h4>
                    <ul>
                        <li><strong>1950:</strong> Alan Turing proposes the Turing Test</li>
                        <li><strong>1956:</strong> Term "Artificial Intelligence" coined at Dartmouth Conference</li>
                        <li><strong>1997:</strong> IBM's Deep Blue defeats chess champion Garry Kasparov</li>
                        <li><strong>2011:</strong> IBM Watson wins Jeopardy!</li>
                        <li><strong>2016:</strong> AlphaGo defeats world Go champion</li>
                        <li><strong>2020:</strong> GPT-3 revolutionizes natural language processing</li>
                        <li><strong>2022:</strong> ChatGPT makes AI accessible to millions</li>
                    </ul>
                `
            },
            {
                title: "AI in Everyday Life",
                content: `
                    <h3>AI Around Us</h3>
                    <p>AI is already integrated into many aspects of our daily lives, often without us realizing it.</p>
                    
                    <h4>Common AI Applications:</h4>
                    <ul>
                        <li><strong>Search Engines:</strong> Google uses AI to understand and rank web pages</li>
                        <li><strong>Social Media:</strong> News feed algorithms, content recommendations</li>
                        <li><strong>Shopping:</strong> Product recommendations, price optimization</li>
                        <li><strong>Transportation:</strong> GPS navigation, ride-sharing optimization</li>
                        <li><strong>Entertainment:</strong> Netflix recommendations, music suggestions</li>
                        <li><strong>Communication:</strong> Email spam filters, language translation</li>
                        <li><strong>Smart Homes:</strong> Voice assistants, smart thermostats</li>
                    </ul>
                `
            }
        ]
    },
    chatgpt: {
        title: "ChatGPT & Language Models",
        lessons: [
            {
                title: "Understanding Large Language Models",
                content: `
                    <h3>What are Language Models?</h3>
                    <p>Large Language Models (LLMs) are AI systems trained on vast amounts of text data to understand and generate human-like text. They can engage in conversations, answer questions, write content, and assist with various tasks.</p>
                    
                    <h4>How They Work:</h4>
                    <ul>
                        <li><strong>Training:</strong> Models are trained on billions of text examples</li>
                        <li><strong>Pattern Recognition:</strong> They learn patterns in language and context</li>
                        <li><strong>Generation:</strong> They predict the most likely next words in a sequence</li>
                        <li><strong>Fine-tuning:</strong> Models are refined for specific tasks and safety</li>
                    </ul>
                    
                    <h4>Popular Language Models:</h4>
                    <ul>
                        <li>ChatGPT (OpenAI)</li>
                        <li>Claude (Anthropic)</li>
                        <li>Bard (Google)</li>
                        <li>LLaMA (Meta)</li>
                    </ul>
                `
            },
            {
                title: "Effective Prompt Engineering",
                content: `
                    <h3>Writing Better Prompts</h3>
                    <p>Prompt engineering is the art and science of crafting effective instructions for AI models to get the best results.</p>
                    
                    <h4>Best Practices:</h4>
                    <ul>
                        <li><strong>Be Specific:</strong> Provide clear, detailed instructions</li>
                        <li><strong>Give Context:</strong> Explain the background or purpose</li>
                        <li><strong>Use Examples:</strong> Show the AI what you want with examples</li>
                        <li><strong>Set the Role:</strong> Ask the AI to take on a specific persona</li>
                        <li><strong>Break Down Complex Tasks:</strong> Divide large tasks into smaller steps</li>
                    </ul>
                    
                    <h4>Example Prompts:</h4>
                    <div style="background: #f8f9fa; padding: 1rem; border-left: 4px solid #007bff; margin: 1rem 0;">
                        <strong>Poor:</strong> "Write about dogs"<br>
                        <strong>Better:</strong> "Write a 300-word informative article about dog training tips for new pet owners, focusing on basic commands and positive reinforcement techniques."
                    </div>
                `
            },
            {
                title: "Practical Applications",
                content: `
                    <h3>Using ChatGPT for Real Tasks</h3>
                    <p>ChatGPT and similar tools can assist with a wide variety of professional and personal tasks.</p>
                    
                    <h4>Content Creation:</h4>
                    <ul>
                        <li>Writing articles and blog posts</li>
                        <li>Creating social media content</li>
                        <li>Drafting emails and letters</li>
                        <li>Generating creative stories</li>
                    </ul>
                    
                    <h4>Learning and Research:</h4>
                    <ul>
                        <li>Explaining complex concepts</li>
                        <li>Summarizing long documents</li>
                        <li>Language translation</li>
                        <li>Quiz and test preparation</li>
                    </ul>
                    
                    <h4>Problem Solving:</h4>
                    <ul>
                        <li>Brainstorming ideas</li>
                        <li>Debugging code</li>
                        <li>Planning projects</li>
                        <li>Analyzing data</li>
                    </ul>
                `
            }
        ]
    },
    image: {
        title: "AI Image Generation",
        lessons: [
            {
                title: "Understanding AI Art",
                content: `
                    <h3>How AI Creates Images</h3>
                    <p>AI image generation uses machine learning models trained on millions of images to create new, original artwork based on text descriptions.</p>
                    
                    <h4>Key Technologies:</h4>
                    <ul>
                        <li><strong>Diffusion Models:</strong> Generate images by gradually removing noise</li>
                        <li><strong>GANs:</strong> Generative Adversarial Networks that compete to create realistic images</li>
                        <li><strong>Transformers:</strong> Models that understand the relationship between text and images</li>
                    </ul>
                    
                    <h4>Popular Platforms:</h4>
                    <ul>
                        <li>DALL-E 2 & 3 (OpenAI)</li>
                        <li>Midjourney</li>
                        <li>Stable Diffusion</li>
                        <li>Adobe Firefly</li>
                        <li>Google Imagen</li>
                    </ul>
                `
            },
            {
                title: "Writing Effective Image Prompts",
                content: `
                    <h3>Crafting Visual Descriptions</h3>
                    <p>Creating great AI art requires learning how to describe what you want in detail and using the right keywords.</p>
                    
                    <h4>Prompt Structure:</h4>
                    <ol>
                        <li><strong>Subject:</strong> What is the main focus?</li>
                        <li><strong>Style:</strong> What artistic style do you want?</li>
                        <li><strong>Composition:</strong> How should it be framed?</li>
                        <li><strong>Lighting:</strong> What kind of lighting?</li>
                        <li><strong>Color:</strong> What color palette?</li>
                        <li><strong>Quality:</strong> Technical specifications</li>
                    </ol>
                    
                    <h4>Style Keywords:</h4>
                    <ul>
                        <li>Photorealistic, oil painting, watercolor</li>
                        <li>Cyberpunk, steampunk, art deco</li>
                        <li>Minimalist, detailed, abstract</li>
                        <li>Studio lighting, golden hour, neon</li>
                    </ul>
                `
            },
            {
                title: "Creative Applications",
                content: `
                    <h3>Using AI Art in Projects</h3>
                    <p>AI-generated images can be used in various creative and professional contexts.</p>
                    
                    <h4>Commercial Uses:</h4>
                    <ul>
                        <li>Marketing materials and advertisements</li>
                        <li>Website and app design</li>
                        <li>Social media content</li>
                        <li>Product mockups and prototypes</li>
                        <li>Book covers and illustrations</li>
                    </ul>
                    
                    <h4>Personal Projects:</h4>
                    <ul>
                        <li>Custom artwork for home</li>
                        <li>Profile pictures and avatars</li>
                        <li>Creative writing illustrations</li>
                        <li>Gift design and personalization</li>
                    </ul>
                    
                    <h4>Ethical Considerations:</h4>
                    <ul>
                        <li>Copyright and ownership issues</li>
                        <li>Attribution to AI tools</li>
                        <li>Impact on traditional artists</li>
                        <li>Avoiding harmful or biased content</li>
                    </ul>
                `
            }
        ]
    },
    automation: {
        title: "AI Automation Tools",
        lessons: [
            {
                title: "Introduction to AI Automation",
                content: `
                    <h3>What is AI Automation?</h3>
                    <p>AI automation combines artificial intelligence with workflow automation to create systems that can perform complex tasks with minimal human intervention.</p>
                    
                    <h4>Types of Automation:</h4>
                    <ul>
                        <li><strong>Process Automation:</strong> Streamlining repetitive business processes</li>
                        <li><strong>Decision Automation:</strong> AI makes decisions based on data</li>
                        <li><strong>Content Automation:</strong> Automatic creation and management of content</li>
                        <li><strong>Communication Automation:</strong> Chatbots and automated responses</li>
                    </ul>
                    
                    <h4>Benefits:</h4>
                    <ul>
                        <li>Increased efficiency and productivity</li>
                        <li>Reduced human error</li>
                        <li>24/7 operation capability</li>
                        <li>Cost savings over time</li>
                        <li>Scalability</li>
                    </ul>
                `
            },
            {
                title: "Popular Automation Platforms",
                content: `
                    <h3>AI-Powered Automation Tools</h3>
                    <p>Various platforms offer AI-enhanced automation capabilities for different needs and skill levels.</p>
                    
                    <h4>No-Code/Low-Code Platforms:</h4>
                    <ul>
                        <li><strong>Zapier:</strong> Connect apps and automate workflows</li>
                        <li><strong>Microsoft Power Automate:</strong> Business process automation</li>
                        <li><strong>IFTTT:</strong> Simple trigger-based automation</li>
                        <li><strong>Make (formerly Integromat):</strong> Visual automation builder</li>
                    </ul>
                    
                    <h4>AI-Specific Tools:</h4>
                    <ul>
                        <li><strong>UiPath:</strong> Robotic Process Automation with AI</li>
                        <li><strong>Automation Anywhere:</strong> Intelligent automation platform</li>
                        <li><strong>Blue Prism:</strong> Enterprise-grade RPA</li>
                        <li><strong>Process Street:</strong> Workflow automation with AI</li>
                    </ul>
                `
            },
            {
                title: "Building Your First Automation",
                content: `
                    <h3>Step-by-Step Automation Guide</h3>
                    <p>Learn how to create your first AI-powered automation workflow.</p>
                    
                    <h4>Planning Phase:</h4>
                    <ol>
                        <li>Identify repetitive tasks in your work</li>
                        <li>Map out the current process</li>
                        <li>Define the desired outcome</li>
                        <li>Choose the right tools</li>
                    </ol>
                    
                    <h4>Implementation Steps:</h4>
                    <ol>
                        <li>Set up accounts on chosen platforms</li>
                        <li>Connect your apps and services</li>
                        <li>Create triggers and actions</li>
                        <li>Add AI components (if needed)</li>
                        <li>Test thoroughly</li>
                        <li>Monitor and optimize</li>
                    </ol>
                    
                    <h4>Example Automation Ideas:</h4>
                    <ul>
                        <li>Auto-sort emails using AI classification</li>
                        <li>Generate reports from data automatically</li>
                        <li>Social media posting scheduler with AI content</li>
                        <li>Customer service chatbot integration</li>
                    </ul>
                `
            }
        ]
    },
    ethics: {
        title: "AI Ethics & Safety",
        lessons: [
            {
                title: "Understanding AI Ethics",
                content: `
                    <h3>Why AI Ethics Matter</h3>
                    <p>As AI becomes more powerful and widespread, it's crucial to understand the ethical implications and responsibilities that come with its use.</p>
                    
                    <h4>Key Ethical Principles:</h4>
                    <ul>
                        <li><strong>Fairness:</strong> AI should not discriminate or show bias</li>
                        <li><strong>Transparency:</strong> AI decisions should be explainable</li>
                        <li><strong>Privacy:</strong> Personal data should be protected</li>
                        <li><strong>Accountability:</strong> Someone should be responsible for AI actions</li>
                        <li><strong>Human Autonomy:</strong> Humans should maintain control</li>
                    </ul>
                    
                    <h4>Common Ethical Concerns:</h4>
                    <ul>
                        <li>Bias in AI decision-making</li>
                        <li>Job displacement</li>
                        <li>Privacy violations</li>
                        <li>Autonomous weapons</li>
                        <li>Misinformation and deepfakes</li>
                    </ul>
                `
            },
            {
                title: "Responsible AI Usage",
                content: `
                    <h3>Best Practices for AI Users</h3>
                    <p>Guidelines for using AI tools responsibly and ethically in your work and personal life.</p>
                    
                    <h4>Do's:</h4>
                    <ul>
                        <li>Verify AI-generated information</li>
                        <li>Give credit when using AI assistance</li>
                        <li>Respect copyright and intellectual property</li>
                        <li>Consider the impact on others</li>
                        <li>Stay informed about AI developments</li>
                    </ul>
                    
                    <h4>Don'ts:</h4>
                    <ul>
                        <li>Use AI to create harmful content</li>
                        <li>Rely blindly on AI decisions</li>
                        <li>Share sensitive information with AI systems</li>
                        <li>Use AI to deceive or manipulate others</li>
                        <li>Ignore bias in AI outputs</li>
                    </ul>
                    
                    <h4>Questions to Ask:</h4>
                    <ul>
                        <li>Is this AI use beneficial or harmful?</li>
                        <li>Who might be affected by this decision?</li>
                        <li>Am I being transparent about AI involvement?</li>
                        <li>What are the potential risks?</li>
                    </ul>
                `
            },
            {
                title: "AI Safety and Security",
                content: `
                    <h3>Staying Safe with AI</h3>
                    <p>Understanding potential risks and how to protect yourself when using AI tools.</p>
                    
                    <h4>Security Risks:</h4>
                    <ul>
                        <li><strong>Data Breaches:</strong> AI systems can be hacked</li>
                        <li><strong>Prompt Injection:</strong> Malicious inputs to AI systems</li>
                        <li><strong>Model Poisoning:</strong> Corrupting AI training data</li>
                        <li><strong>Adversarial Attacks:</strong> Fooling AI with subtle changes</li>
                    </ul>
                    
                    <h4>Protection Strategies:</h4>
                    <ul>
                        <li>Use reputable AI platforms</li>
                        <li>Read privacy policies carefully</li>
                        <li>Avoid sharing sensitive information</li>
                        <li>Keep software updated</li>
                        <li>Be skeptical of AI outputs</li>
                    </ul>
                    
                    <h4>Identifying AI-Generated Content:</h4>
                    <ul>
                        <li>Look for inconsistencies in details</li>
                        <li>Check for unnatural patterns</li>
                        <li>Use detection tools when available</li>
                        <li>Verify information from multiple sources</li>
                    </ul>
                `
            }
        ]
    },
    future: {
        title: "Future of AI",
        lessons: [
            {
                title: "Emerging AI Trends",
                content: `
                    <h3>What's Next in AI?</h3>
                    <p>The AI landscape is rapidly evolving. Understanding emerging trends helps prepare for future opportunities and challenges.</p>
                    
                    <h4>Current Trends:</h4>
                    <ul>
                        <li><strong>Multimodal AI:</strong> Systems that understand text, images, audio, and video</li>
                        <li><strong>Edge AI:</strong> AI processing on local devices</li>
                        <li><strong>Federated Learning:</strong> Training AI without centralizing data</li>
                        <li><strong>Explainable AI:</strong> Making AI decisions more transparent</li>
                        <li><strong>AI Democratization:</strong> Making AI tools accessible to everyone</li>
                    </ul>
                    
                    <h4>Breakthrough Technologies:</h4>
                    <ul>
                        <li>Quantum machine learning</li>
                        <li>Neuromorphic computing</li>
                        <li>Advanced robotics</li>
                        <li>Brain-computer interfaces</li>
                        <li>Artificial General Intelligence (AGI)</li>
                    </ul>
                `
            },
            {
                title: "AI's Impact on Society",
                content: `
                    <h3>Transforming Our World</h3>
                    <p>AI will continue to reshape various aspects of society, from work and education to healthcare and governance.</p>
                    
                    <h4>Workplace Evolution:</h4>
                    <ul>
                        <li>New job categories emerging</li>
                        <li>Enhanced human-AI collaboration</li>
                        <li>Skill requirements changing</li>
                        <li>Remote work optimization</li>
                        <li>Productivity improvements</li>
                    </ul>
                    
                    <h4>Sectoral Transformations:</h4>
                    <ul>
                        <li><strong>Healthcare:</strong> Personalized medicine, drug discovery</li>
                        <li><strong>Education:</strong> Adaptive learning, virtual tutors</li>
                        <li><strong>Transportation:</strong> Autonomous vehicles, traffic optimization</li>
                        <li><strong>Environment:</strong> Climate modeling, resource management</li>
                        <li><strong>Governance:</strong> Smart cities, policy analysis</li>
                    </ul>
                `
            },
            {
                title: "Preparing for an AI Future",
                content: `
                    <h3>Getting Ready for Tomorrow</h3>
                    <p>How individuals, organizations, and society can prepare for an AI-driven future.</p>
                    
                    <h4>Essential Skills for the AI Era:</h4>
                    <ul>
                        <li><strong>AI Literacy:</strong> Understanding how AI works</li>
                        <li><strong>Critical Thinking:</strong> Evaluating AI outputs</li>
                        <li><strong>Creativity:</strong> Human skills that complement AI</li>
                        <li><strong>Emotional Intelligence:</strong> Human connection and empathy</li>
                        <li><strong>Adaptability:</strong> Learning new tools and methods</li>
                    </ul>
                    
                    <h4>Continuous Learning:</h4>
                    <ul>
                        <li>Stay updated with AI developments</li>
                        <li>Experiment with new AI tools</li>
                        <li>Join AI communities and forums</li>
                        <li>Take online courses and certifications</li>
                        <li>Practice ethical AI usage</li>
                    </ul>
                    
                    <h4>Career Preparation:</h4>
                    <ul>
                        <li>Identify AI applications in your field</li>
                        <li>Develop complementary skills</li>
                        <li>Build a portfolio showcasing AI literacy</li>
                        <li>Network with AI professionals</li>
                        <li>Consider AI-related career transitions</li>
                    </ul>
                `
            }
        ]
    }
};

// Module functionality
let currentModule = null;
let currentLesson = 0;

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Modal elements
    const modal = document.getElementById('moduleModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const modalProgress = document.getElementById('modalProgress');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const completeBtn = document.getElementById('completeBtn');

    // Module card click handlers
    document.querySelectorAll('.module-card').forEach(card => {
        const moduleBtn = card.querySelector('.module-btn');
        if (moduleBtn) {
            moduleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const moduleId = card.getAttribute('data-module');
                openModule(moduleId);
            });
        }
    });

    function openModule(moduleId) {
        if (!modal) return;
        
        currentModule = moduleId;
        currentLesson = 0;
        
        const module = moduleData[moduleId];
        if (!module) return;
        
        if (modalTitle) modalTitle.textContent = module.title;
        updateModalContent();
        updateModalProgress();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function updateModalContent() {
        if (!currentModule || !moduleData[currentModule] || !modalContent) return;
        
        const module = moduleData[currentModule];
        const lesson = module.lessons[currentLesson];
        
        modalContent.innerHTML = `
            <div class="lesson-content">
                <h2>${lesson.title}</h2>
                ${lesson.content}
            </div>
            <div class="lesson-nav">
                <p>Lesson ${currentLesson + 1} of ${module.lessons.length}</p>
            </div>
        `;
        
        // Update button states
        if (prevBtn) prevBtn.style.display = currentLesson === 0 ? 'none' : 'inline-block';
        if (nextBtn) nextBtn.style.display = currentLesson === module.lessons.length - 1 ? 'none' : 'inline-block';
        if (completeBtn) completeBtn.style.display = currentLesson === module.lessons.length - 1 ? 'inline-block' : 'none';
    }

    function updateModalProgress() {
        if (!currentModule || !moduleData[currentModule] || !modalProgress) return;
        
        const module = moduleData[currentModule];
        const progress = ((currentLesson + 1) / module.lessons.length) * 100;
        modalProgress.style.width = `${progress}%`;
    }

    function updateModuleProgress(moduleId, progress) {
        const moduleCard = document.querySelector(`[data-module="${moduleId}"]`);
        if (moduleCard) {
            const progressBar = moduleCard.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.width = `${progress}%`;
                progressBar.setAttribute('data-progress', progress);
            }
        }
    }

    // Modal navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentLesson > 0) {
                currentLesson--;
                updateModalContent();
                updateModalProgress();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentModule && moduleData[currentModule] && currentLesson < moduleData[currentModule].lessons.length - 1) {
                currentLesson++;
                updateModalContent();
                updateModalProgress();
            }
        });
    }

    if (completeBtn) {
        completeBtn.addEventListener('click', () => {
            if (currentModule) {
                // Mark module as completed
                updateModuleProgress(currentModule, 100);
                
                // Save progress to localStorage
                const progress = JSON.parse(localStorage.getItem('aiModuleProgress') || '{}');
                progress[currentModule] = 100;
                localStorage.setItem('aiModuleProgress', JSON.stringify(progress));
                
                // Show completion message
                if (modalContent) {
                    modalContent.innerHTML = `
                        <div class="completion-message" style="text-align: center; padding: 2rem;">
                            <i class="fas fa-check-circle" style="font-size: 4rem; color: var(--accent-yellow); margin-bottom: 1rem;"></i>
                            <h2>Congratulations!</h2>
                            <p>You have successfully completed the <strong>${moduleData[currentModule].title}</strong> module.</p>
                            <p>You're one step closer to mastering AI tools!</p>
                        </div>
                    `;
                }
                
                if (prevBtn) prevBtn.style.display = 'none';
                if (nextBtn) nextBtn.style.display = 'none';
                if (completeBtn) completeBtn.style.display = 'none';
                
                // Auto-close modal after 3 seconds
                setTimeout(() => {
                    closeModal();
                }, 3000);
            }
        });
    }

    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            currentModule = null;
            currentLesson = 0;
        }
    }

    // Load saved progress on page load
    const savedProgress = JSON.parse(localStorage.getItem('aiModuleProgress') || '{}');
    
    Object.keys(savedProgress).forEach(moduleId => {
        updateModuleProgress(moduleId, savedProgress[moduleId]);
    });

    // Enhanced scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');

                // Add staggered animation for cards
                if (entry.target.classList.contains('animated-card')) {
                    const cards = entry.target.parentElement.querySelectorAll('.animated-card');
                    cards.forEach((card, index) => {
                        if (card === entry.target) {
                            card.style.animationDelay = `${index * 0.1}s`;
                        }
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animated-card, .animated-title, .contact-item, .training-card');
    animatedElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });

    // Contact form submission with enhanced feedback
    const supportForm = document.getElementById('contactForm');
    if (supportForm) {
        supportForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(supportForm);
            const formObj = Object.fromEntries(formData.entries());

            // Enhanced form submission feedback
            const submitBtn = supportForm.querySelector('.submit-btn');
            if (submitBtn) {
                const originalText = submitBtn.textContent;

                // Loading state
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                submitBtn.style.background = 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)';

                setTimeout(() => {
                    // Success state
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                    submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

                    // Show success animation
                    submitBtn.style.transform = 'scale(1.05)';

                    setTimeout(() => {
                        // Reset form
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                        submitBtn.style.transform = '';
                        supportForm.reset();

                        // Show thank you message
                        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                    }, 2000);
                }, 1500);
            }
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Close functionality
        const closeBtn = notification.querySelector('.notification-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            });
        }

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }
        }, 5000);
    }

    // Smooth scrolling for navigation links
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

    // Enhanced scroll effect to header
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (!header) return;

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }

        // Add header background opacity based on scroll
        const opacity = Math.min(scrollTop / 100, 1);
        header.style.background = `linear-gradient(135deg, 
            rgba(30, 58, 138, ${0.9 + opacity * 0.1}) 0%, 
            rgba(59, 130, 246, ${0.9 + opacity * 0.1}) 100%)`;

        lastScrollTop = scrollTop;
    });

    // Tool card interactions
    document.querySelectorAll('.tool-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const toolName = btn.closest('.tool-card').querySelector('h3').textContent;
            showNotification(`Opening ${toolName}...`, 'info');
        });
    });

    // Module progress tracking
    document.querySelectorAll('.module-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const moduleCard = e.target.closest('.module-card');
            if (moduleCard) {
                const moduleId = moduleCard.getAttribute('data-module');
                // Track module access
                console.log(`Accessing module: ${moduleId}`);
            }
        });
    });
});
