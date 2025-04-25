import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, ExternalLink, Github, Linkedin, Mail, MessageSquare, Sparkles, User } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ParticleBackground } from "@/components/particle-background"
import { FloatingIcons } from "@/components/floating-icons"
import { AnimatedGradient } from "@/components/animated-gradient"
import { TechPattern } from "@/components/tech-pattern"
import { ContactForm } from "@/components/Contact-Form"
import { ResumeButton} from "@/components/resume"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-100 relative overflow-hidden">
      <ParticleBackground />
      <FloatingIcons />
      {/* Navigation */}
      <header className="container mx-auto py-6 relative z-10">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-500" />
            <span className="font-bold text-xl">AVL</span>
          </div>
          <div className="hidden md:flex gap-6">
            <Link href="#about" className="hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-purple-400 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-purple-400 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <ThemeToggle />
            </div>
            <ResumeButton />
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-20 flex flex-col items-center text-center relative">
          <AnimatedGradient />
          <TechPattern className="opacity-10" />
          <div className="relative mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500">
              <img src="/profile/IMG_1077.jpg?height=128&width=128" alt="Arjun v l" className="object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-purple-500 rounded-full p-2">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Arjun V L</h1>
          <h2 className="text-2xl md:text-3xl text-purple-400 mb-6">AI Developer</h2>
          <p className="max-w-2xl text-slate-300 mb-8">
            Computer Science student specializing in artificial intelligence, machine learning, and natural language
            processing. Passionate about building intelligent systems that solve real-world problems.
          </p>
          <div className="flex gap-4">
  <Link href="mailto:vlarjun2022@gmail.com">
    <Button className="bg-purple-600 hover:bg-purple-700">
      <Mail className="mr-2 h-4 w-4" /> Contact Me
    </Button>
  </Link>
  
  <Link href="https://github.com/vlarjun20" target="_blank">
    <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
      <Github className="mr-2 h-4 w-4" /> GitHub
    </Button>
  </Link>
</div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 mb-6">
                <User className="h-6 w-6 text-purple-500" />
                <h2 className="text-3xl font-bold">About Me</h2>
              </div>
              <p className="text-slate-300 mb-4">
                I'm a final-year Computer Science student at Velammal Engineering College, specializing in Artificial
                Intelligence and Deep Learning. My academic journey has been focused on developing intelligent
                systems that can understand, learn, and adapt.
              </p>
              <p className="text-slate-300 mb-4">
                During my studies, I've had the opportunity to work on various projects in natural language
                processing, computer vision, and reinforcement learning. I'm particularly interested in the intersection
                of AI and healthcare, where I believe technology can make a significant positive impact.
              </p>
              <p className="text-slate-300">
                When I'm not coding or researching, you can find me participating in hackathons, contributing to
                open-source projects, or exploring the latest developments in the AI community.
              </p>
            </div>
            <div className="md:w-1/2 bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Velammal Engineering College</span>
                  <span className="text-purple-400">2022 - 2026</span>
                </div>
                <p className="text-sm text-slate-400">B.tech in Artificial Intelligence and Data Science</p>
              </div>

              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">ML & Robotics Intern</span>
                  <span className="text-purple-400">December 2024</span>
                </div>
                <p className="text-sm text-slate-400">Atlanwa, Chennai</p>
              </div>
              {/* <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">ML Engineering Intern</span>
                  <span className="text-purple-400">Summer 2022</span>
                </div>
                <p className="text-sm text-slate-400">Google Brain, Mountain View</p>
              </div> */}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="flex items-center gap-2 mb-8">
            <Code className="h-6 w-6 text-purple-500" />
            <h2 className="text-3xl font-bold">Skills & Technologies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>AI & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-purple-600">TensorFlow</Badge>
                <Badge className="bg-purple-600">PyTorch</Badge>
                <Badge className="bg-purple-600">Scikit-learn</Badge>
                <Badge className="bg-purple-600">Keras</Badge>
                <Badge className="bg-purple-600">Hugging Face</Badge>
                <Badge className="bg-purple-600">Computer Vision</Badge>
                <Badge className="bg-purple-600">Transformers</Badge>
                <Badge className="bg-purple-600">NLP</Badge>
                <Badge className="bg-purple-600">Reinforcement Learning</Badge>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>Programming Languages & Databases</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-blue-600">Python</Badge>
                <Badge className="bg-blue-600">JavaScript</Badge>
                {/* <Badge className="bg-blue-600">TypeScript</Badge> */}
                <Badge className="bg-blue-600">C++</Badge>
                <Badge className="bg-blue-600">C</Badge>
                <Badge className="bg-blue-600">SQL</Badge>
                <Badge className="bg-blue-600">MongoDB</Badge>
              </CardContent>
            </Card>

              <Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle>Web & Cloud</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-teal-600">HTML</Badge>
                  <Badge className="bg-teal-600">CSS</Badge>
                  {/* <Badge className="bg-teal-600">Node.js</Badge> */}
                  <Badge className="bg-teal-600">AWS</Badge>
                  <Badge className="bg-teal-600">Google Cloud</Badge>
                  {/* <Badge className="bg-teal-600">Docker</Badge>
                  <Badge className="bg-teal-600">Kubernetes</Badge> */}
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16">
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="h-6 w-6 text-purple-500" />
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 overflow-hidden">
  <div className="h-48 overflow-hidden">
    <img
      src="/sentiment voice2.png"
      alt="Sentiment Analysis of Incoming Calls"
      className="w-full object-cover"
    />
  </div>
  <CardHeader>
    <div className="flex justify-between items-start">
      <CardTitle>Sentiment Analysis of Incoming Calls in Helpdesk</CardTitle>
      <div className="flex gap-2">
        <Link
          href="https://github.com/vlarjun20/Sentiment-Analysis-of-Incoming-Calls-in-Helpdesk"
          className="text-slate-400 hover:text-purple-400"
        >
          <Github className="h-5 w-5" />
        </Link>
        {/* <Link href="#" className="text-slate-400 hover:text-purple-400">
          <ExternalLink className="h-5 w-5" />
        </Link> */}
      </div>
    </div>
    <CardDescription className="text-slate-400">
      NLP-powered system for analyzing call center sentiment
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-slate-300 mb-4">
      Built a model that processes helpdesk call transcripts to classify sentiments as positive, neutral, or negative. This aids customer support teams in understanding caller moods and improving service quality.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="text-purple-400 border-purple-400">
        NLP
      </Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">
        Python
      </Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">
        Customer Support
      </Badge>
    </div>
  </CardContent>
</Card>

<Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 overflow-hidden">
  <div className="h-48 overflow-hidden">
    <img src="/sentimat.webp" alt="Sentimatrix" className="w-full object-cover" />
  </div>
  <CardHeader>
    <div className="flex justify-between items-start">
      <CardTitle>Sentimatrix</CardTitle>
      <div className="flex gap-2">
        <Link href="https://github.com/Siddharth-magesh/Sentimatrix" className="text-slate-400 hover:text-purple-400">
          <Github className="h-5 w-5" />
        </Link>
      </div>
    </div>
    <CardDescription className="text-slate-400">
      Multi-language sentiment classifier
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-slate-300 mb-4">
      Built a multilingual sentiment analysis tool to detect polarity in user messages across languages using NLP and translation APIs.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="text-purple-400 border-purple-400">NLP</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Multi-language</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Flask</Badge>
    </div>
  </CardContent>
</Card>

<Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 overflow-hidden">
  <div className="h-48 overflow-hidden">
    <img src="/agri_new2.jpg" alt="Agri-Hub" className="w-full object-cover" />
  </div>
  <CardHeader>
    <div className="flex justify-between items-start">
      <CardTitle>Agri-Hub</CardTitle>
      <div className="flex gap-2">
        <Link href="https://github.com/Siddharth-magesh/Agri-Hub" className="text-slate-400 hover:text-purple-400">
          <Github className="h-5 w-5" />
        </Link>
      </div>
    </div>
    <CardDescription className="text-slate-400">
      Collaborated on a farmer-focused platform for agricultural data
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-slate-300 mb-4">
      Helped build a full-stack platform enabling farmers to access real-time crop insights, market prices, and expert advice, bridging the information gap in agriculture.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="text-purple-400 border-purple-400">Full Stack</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Agritech</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">React</Badge>
    </div>
  </CardContent>
</Card>


<Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 overflow-hidden">
  <div className="h-48 overflow-hidden">
    <img src="/VEC1.jpg" alt="VEC Landing Page" className="w-full object-cover" />
  </div>
  <CardHeader>
    <div className="flex justify-between items-start">
      <CardTitle>VEC Website</CardTitle>
      <div className="flex gap-2">
        <Link href="https://github.com/SAMSDP/VEC_Landing" className="text-slate-400 hover:text-purple-400">
          <Github className="h-5 w-5" />
        </Link>
      </div>
    </div>
    <CardDescription className="text-slate-400">
      Collaborated on the official landing page for Velammal Engineering College
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-slate-300 mb-4">
      Worked as a contributor on a clean and accessible landing page for Velammal Engineering College with sections for news, achievements, and departmental links.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="text-purple-400 border-purple-400">React</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Node.js</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Web Design</Badge>
    </div>
  </CardContent>
</Card>

{/* <Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 overflow-hidden">
  <div className="h-48 overflow-hidden">
    <img src="/placeholder.svg" alt="VEC Backend" className="w-full object-cover" />
  </div>
  <CardHeader>
    <div className="flex justify-between items-start">
      <CardTitle>VEC Backend System</CardTitle>
      <div className="flex gap-2">
        <Link href="https://github.com/Siddharth-magesh/Velammal-Engineering-College-Backend" className="text-slate-400 hover:text-purple-400">
          <Github className="h-5 w-5" />
        </Link>
      </div>
    </div>
    <CardDescription className="text-slate-400">
      Collaborated on backend APIs for college admin systems
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-slate-300 mb-4">
      Contributed to building secure RESTful APIs for managing student, staff, and announcement data in a Node.js and MongoDB stack for Velammal Engineering College.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="text-purple-400 border-purple-400">Node.js</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">MongoDB</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Backend</Badge>
    </div>
  </CardContent>
</Card> */}
<Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 overflow-hidden">
  <div className="h-48 overflow-hidden">
    <img src="/wildlife.png" alt="Wildlife Conservation Tool" className="w-full object-cover" />
  </div>
  <CardHeader>
    <div className="flex justify-between items-start">
      <CardTitle>AI-based Wildlife Conservation Tool</CardTitle>
      <div className="flex gap-2">
        <Link href="https://github.com/vlarjun20/AI-based-Wildlife-Conservation-Tool" className="text-slate-400 hover:text-purple-400">
          <Github className="h-5 w-5" />
        </Link>
      </div>
    </div>
    <CardDescription className="text-slate-400">
      Real-time AI surveillance to protect forests
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-slate-300 mb-4">
      Used YOLOv8 to detect animals and intruders in thermal and night vision footage, sending instant alerts to forest officers via a dashboard system.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="text-purple-400 border-purple-400">YOLOv8</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Computer Vision</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Conservation</Badge>
    </div>
  </CardContent>
</Card>
<Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 overflow-hidden">
  <div className="h-48 overflow-hidden">
    <img src="/digi.png" alt="Digital Character Recognition" className="w-full object-cover" />
  </div>
  <CardHeader>
    <div className="flex justify-between items-start">
      <CardTitle>Digital Character Recognition</CardTitle>
      <div className="flex gap-2">
        <Link href="https://github.com/vlarjun20/-Digital-Character-Recognition" className="text-slate-400 hover:text-purple-400">
          <Github className="h-5 w-5" />
        </Link>
      </div>
    </div>
    <CardDescription className="text-slate-400">
      OCR system for LCD screen character detection
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-slate-300 mb-4">
      Trained a YOLO model to identify alphanumeric and special characters on 16x2 LCD screens, designed for real-time embedded applications.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="text-purple-400 border-purple-400">YOLO</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Computer Vision</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Embedded AI</Badge>
    </div>
  </CardContent>
</Card>
<Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 overflow-hidden">
  <div className="h-48 overflow-hidden">
    <img src="/senti12.png" alt="Sentiment Analysis - Product Reviews" className="w-full object-cover" />
  </div>
  <CardHeader>
    <div className="flex justify-between items-start">
      <CardTitle>Sentiment Analysis of Product Reviews</CardTitle>
      <div className="flex gap-2">
        <Link href="https://github.com/vlarjun20/Sentiment-Analysis-of-Product-Reviews-using-streamlit-and-flask" className="text-slate-400 hover:text-purple-400">
          <Github className="h-5 w-5" />
        </Link>
      </div>
    </div>
    <CardDescription className="text-slate-400">
      Web app for real-time review sentiment analysis
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-slate-300 mb-4">
      Developed an interactive app using Flask and Streamlit to classify and visualize sentiments in user reviews for business insights.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="text-purple-400 border-purple-400">Flask</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Streamlit</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">NLP</Badge>
    </div>
  </CardContent>
</Card>
<Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 overflow-hidden">
  <div className="h-48 overflow-hidden">
    <img src="/hand-gesture12.png" alt="Gesture-based App Launcher" className="w-full object-cover" />
  </div>
  <CardHeader>
    <div className="flex justify-between items-start">
      <CardTitle>Gesture-Based App Launcher</CardTitle>
      <div className="flex gap-2">
        <Link href="https://github.com/vlarjun20/Accessing-Windows-Applications-by-Hand-gesture-using-Google-s-hand-gesture-recognizer" className="text-slate-400 hover:text-purple-400">
          <Github className="h-5 w-5" />
        </Link>
      </div>
    </div>
    <CardDescription className="text-slate-400">
      Control apps using hand gestures via webcam
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-slate-300 mb-4">
      Built a system using Google’s hand gesture recognizer to launch and control Windows applications without physical input.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="text-purple-400 border-purple-400">MediaPipe</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Gesture Recognition</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Automation</Badge>
    </div>
  </CardContent>
</Card>
<Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 overflow-hidden">
  <div className="h-48 overflow-hidden">
    <img src="/save.jpg" alt="Power Circle" className="w-full object-cover" />
  </div>
  <CardHeader>
    <div className="flex justify-between items-start">
      <CardTitle>Power Circle</CardTitle>
      <div className="flex gap-2">
        <Link href="https://github.com/vlarjun20/Power-Circle" className="text-slate-400 hover:text-purple-400">
          <Github className="h-5 w-5" />
        </Link>
      </div>
    </div>
    <CardDescription className="text-slate-400">
      Smart energy consumption monitoring app
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-slate-300 mb-4">
      Built a dashboard that monitors power usage patterns and helps optimize device consumption with actionable insights.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="text-purple-400 border-purple-400">Energy</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Data Viz</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Python</Badge>
    </div>
  </CardContent>
</Card>
<Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 overflow-hidden">
  <div className="h-48 overflow-hidden">
    <img src="/inv.jpg" alt="Invoice Generator" className="w-full object-cover" />
  </div>
  <CardHeader>
    <div className="flex justify-between items-start">
      <CardTitle>Invoice Generator</CardTitle>
      <div className="flex gap-2">
        <Link href="https://github.com/vlarjun20/Invoice-Generator" className="text-slate-400 hover:text-purple-400">
          <Github className="h-5 w-5" />
        </Link>
      </div>
    </div>
    <CardDescription className="text-slate-400">
      Simple tool to create and export custom invoices
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-slate-300 mb-4">
      Designed a web app to input client data and generate PDF invoices dynamically, reducing manual work for freelancers and businesses.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="text-purple-400 border-purple-400">HTML/CSS</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">JavaScript</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">PDF</Badge>
    </div>
  </CardContent>
</Card>
<Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 overflow-hidden">
  <div className="h-48 overflow-hidden">
    <img src="/cred.jpg" alt="Credit Card Fraud Detection" className="w-full object-cover" />
  </div>
  <CardHeader>
    <div className="flex justify-between items-start">
      <CardTitle>Credit Card Fraud Detection</CardTitle>
      <div className="flex gap-2">
        <Link href="https://github.com/vlarjun20/Credit-Card-Fraud-Detection-using-Logistic-Regression" className="text-slate-400 hover:text-purple-400">
          <Github className="h-5 w-5" />
        </Link>
      </div>
    </div>
    <CardDescription className="text-slate-400">
      Logistic regression-based anomaly detection
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-slate-300 mb-4">
      Implemented a machine learning model to flag fraudulent credit card transactions using logistic regression and data imbalance techniques.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="text-purple-400 border-purple-400">Logistic Regression</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Sklearn</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Finance</Badge>
    </div>
  </CardContent>
</Card>
<Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 overflow-hidden">
  <div className="h-48 overflow-hidden">
    <img src="/learn1.png" alt="Learning Hub" className="w-full object-cover" />
  </div>
  <CardHeader>
    <div className="flex justify-between items-start">
      <CardTitle>Learning Hub</CardTitle>
      <div className="flex gap-2">
        <Link href="https://github.com/vlarjun20/Learning-Hub" className="text-slate-400 hover:text-purple-400">
          <Github className="h-5 w-5" />
        </Link>
      </div>
    </div>
    <CardDescription className="text-slate-400">
      All-in-one academic dashboard for students
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-slate-300 mb-4">
    This project is designed to create a platform similar to Google Classroom, integrated with a multimodal assistant. The assistant utilizes Retrieval-Augmented Generation (RAG) to access relevant GitHub repository links and provide YouTube videos based on student study topics. The goal is to enhance the learning experience by facilitating easy access to resources.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="text-purple-400 border-purple-400">HTML/CSS</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">EduTech</Badge>
      <Badge variant="outline" className="text-purple-400 border-purple-400">Dashboard</Badge>
    </div>
  </CardContent>
</Card>

          </div>
        </section>

       
        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="flex items-center gap-2 mb-8">
            <MessageSquare className="h-6 w-6 text-purple-500" />
            <h2 className="text-3xl font-bold">Get In Touch</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription className="text-slate-400">
                  Feel free to reach out for collaborations or just a chat!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-purple-500" />
                  <span className="text-slate-300">vlarjun2022@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-purple-500" />
                  <Link href="https://www.linkedin.com/in/arjun-vanmeeganathan-lakshmi-63b820258/" className="text-slate-300 hover:text-purple-400">
                  linkedin.com/in/arjun-vanmeeganathan-lakshmi
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-purple-500" />
                  <Link href="https://github.com/vlarjun20" className="text-slate-300 hover:text-purple-400">
                  github.com/vlarjun20
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription className="text-slate-400">I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">© 2025 Arjun V L. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="https://github.com/vlarjun20" className="text-slate-400 hover:text-purple-400">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/arjun-vanmeeganathan-lakshmi-63b820258/" className="text-slate-400 hover:text-purple-400">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:vlarjun2022@gmail.com" className="text-slate-400 hover:text-purple-400">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
