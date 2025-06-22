"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ChevronDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Code,
  Database,
  Smartphone,
  Globe,
  Award,
  GraduationCap,
  Sun,
  Moon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "education", "skills", "projects", "extracurricular", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "C/C++", "JavaScript", "HTML/CSS", "SQL"],
      icon: Code,
      color: isDarkMode ? "from-blue-500 to-cyan-500" : "from-rose-500 to-red-500",
    },
    {
      category: "Frameworks & Libraries",
      items: ["Flutter", "Django", "Node.js", "Express.js", "Bootstrap", "React.js"],
      icon: Globe,
      color: isDarkMode ? "from-purple-500 to-pink-500" : "from-amber-500 to-orange-500",
    },
    {
      category: "Databases & Tools",
      items: ["MySQL", "MongoDB", "Android Studio", "VS Code", "PyCharm", "Git"],
      icon: Database,
      color: isDarkMode ? "from-emerald-500 to-teal-500" : "from-emerald-500 to-teal-500",
    },
    {
      category: "Design & Others",
      items: ["Adobe Illustrator", "Adobe Photoshop", "Canva", "Proteus 8", "Tkinter"],
      icon: Smartphone,
      color: isDarkMode ? "from-orange-500 to-red-500" : "from-purple-500 to-pink-500",
    },
  ]

  const projects = [
    {
      title: "QR Code Generator",
      description:
        "A web application that generates QR codes for text, URLs, and other data with customizable options.",
      image: "/qr-generator.png",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://qr-generator-d22u8nik9-dua-rizwans-projects.vercel.app/",
      github: "https://github.com/duarizwan25/QR-Generator",
      featured: true,
    },
    {
      title: "Medium Clone",
      description: "A blogging platform clone with article publishing, reading, and user interaction features.",
      image: "/medium-clone.png",
      tech: ["React.js", "Node.js", "MongoDB"],
      demo: "https://medium-clone-50r68t9wt-dua-rizwans-projects.vercel.app/",
      github: "https://github.com/duarizwan25/Medium-clone",
      featured: true,
    },
    {
      title: "Course Registration System",
      description: "Full-stack web application for student and course registration with admin panel and custom forms.",
      image: "/course-registration.png",
      tech: ["Python", "Django", "MySQL", "Bootstrap"],
      github: "https://github.com/duarizwan25/Course-Registration-System",
      featured: true,
    },
    {
      title: "Cardio Health Analyzer",
      description: "Health analysis tool with chatbot support, CSV data logging, and real-time health monitoring.",
      image: "/cardio-health.png",
      tech: ["Python", "Tkinter", "smtplib"],
      github: "https://github.com/duarizwan25/cardio-health-analyzer",
      featured: false,
    },
    {
      title: "Code Tutor",
      description: "Python learning mobile app with categorized code snippets and beginner-friendly interface.",
      image: "/code-tutor.png",
      tech: ["Flutter", "Android Studio"],
      github: "https://github.com/duarizwan25/python-for-beginners-app",
      featured: false,
    },
    {
      title: "Pacman Game",
      description: "Object-oriented Pacman game with modular game logic and responsive controls using Java Swing.",
      image: "/pacman-game.png",
      tech: ["Java", "Swing", "AWT"],
      github: "https://github.com/duarizwan25/Pacman_Game",
      featured: false,
    },
    {
      title: "Hangman Game",
      description: "Interactive word guessing game with multiple difficulty levels and scoring system.",
      image: "/hangman-game.png",
      tech: ["Python", "Tkinter"],
      github: "https://github.com/duarizwan25/Hangman_Game",
      featured: false,
    },
    {
      title: "Evaluation System",
      description: "Student evaluation and grading system with automated report generation.",
      image: "/evaluation-system.png",
      tech: ["Python", "Django", "MySQL"],
      github: "https://github.com/duarizwan25/Evauluation-System",
      featured: false,
    },
  ]

  const acmRoles = [
    {
      role: "Lead Team Design",
      period: "February 2025 - Present",
      description: "Leading the design team, overseeing creative projects and mentoring team members.",
    },
    {
      role: "Co-Lead Team Design",
      period: "March 2024 - February 2025",
      description: "Co-leading design initiatives, creating visuals for events, and managing design workflows.",
    },
    {
      role: "General Member",
      period: "September 2023 - March 2024",
      description: "Active participation in ACM activities, contributing to various technical and design projects.",
    },
  ]

  const bgClass = isDarkMode
    ? "bg-gradient-to-br from-slate-900 via-gray-900 to-black"
    : "bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50"

  const navClass = isDarkMode ? "bg-slate-900/80 border-slate-700/50" : "bg-white/80 border-amber-200/50"

  const textPrimary = isDarkMode ? "text-white" : "text-amber-900"
  const textSecondary = isDarkMode ? "text-slate-300" : "text-amber-800"
  const textMuted = isDarkMode ? "text-slate-400" : "text-amber-700"

  const cardClass = isDarkMode
    ? "bg-slate-800/50 border-slate-700 hover:bg-slate-800/70"
    : "bg-white/70 border-amber-200 hover:bg-white/90"

  const primaryGradient = isDarkMode ? "from-cyan-400 to-blue-400" : "from-rose-600 to-red-600"

  const buttonPrimary = isDarkMode
    ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
    : "bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700"

  return (
    <div className={`min-h-screen ${bgClass} transition-all duration-500`}>
      {/* Animated Background */}
      {isDarkMode && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>
      )}

      {!isDarkMode && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-200/20 via-amber-200/20 to-orange-200/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${navClass} backdrop-blur-xl shadow-sm transition-all duration-500`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-2xl font-bold bg-gradient-to-r ${primaryGradient} bg-clip-text text-transparent`}
            >
              Dua Rizwan
            </motion.div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                {["About", "Education", "Skills", "Projects", "Extracurricular", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item.toLowerCase()
                        ? isDarkMode
                          ? "text-cyan-400"
                          : "text-rose-600"
                        : isDarkMode
                          ? "text-slate-300 hover:text-cyan-400"
                          : "text-amber-800 hover:text-rose-600"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className={`${
                  isDarkMode
                    ? "border-slate-600 text-slate-300 hover:bg-slate-800"
                    : "border-amber-300 text-amber-800 hover:bg-amber-50"
                } transition-all duration-300`}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className={`w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r ${
                isDarkMode
                  ? "from-cyan-500 to-blue-500 shadow-2xl shadow-cyan-500/25"
                  : "from-rose-500 to-red-500 shadow-2xl shadow-rose-500/25"
              } flex items-center justify-center text-4xl font-bold text-white transition-all duration-500`}
            >
              DR
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold ${textPrimary} mb-4 transition-colors duration-500`}>
              Hi, I'm{" "}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${primaryGradient}`}>Dua Rizwan</span>
            </h1>
            <p className={`text-xl md:text-2xl ${textSecondary} mb-2 transition-colors duration-500`}>
              Computer Engineering Student
            </p>
            <p className={`text-lg ${textMuted} mb-8 max-w-2xl mx-auto transition-colors duration-500`}>
              University of Engineering and Technology, Lahore
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className={`${buttonPrimary} shadow-lg text-white border-0 transition-all duration-500 ${
                  isDarkMode ? "shadow-cyan-500/25" : "shadow-rose-500/25"
                }`}
              >
                View My Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className={`${
                  isDarkMode
                    ? "border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                    : "border-amber-300 text-amber-800 hover:bg-amber-50"
                } transition-all duration-500`}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className={`w-6 h-6 ${textMuted} transition-colors duration-500`} />
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 ${
          isDarkMode
            ? "bg-gradient-to-r from-slate-900/50 to-gray-900/50"
            : "bg-gradient-to-r from-white/30 to-amber-50/30"
        } relative transition-all duration-500`}
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold ${textPrimary} mb-6 transition-colors duration-500`}>
              About Me
            </h2>
            <p className={`text-lg ${textSecondary} max-w-3xl mx-auto transition-colors duration-500`}>
              I'm a passionate Computer Engineering student at UET Lahore with a strong interest in software
              development, web technologies, and mobile app development. I enjoy solving complex problems and creating
              innovative solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className={`${cardClass} transition-all duration-300 group backdrop-blur-sm`}>
                <CardHeader>
                  <Code
                    className={`w-12 h-12 ${
                      isDarkMode ? "text-cyan-400" : "text-rose-600"
                    } mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  />
                  <CardTitle className={`${textPrimary} transition-colors duration-500`}>
                    Full Stack Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={`${textSecondary} transition-colors duration-500`}>
                    Building web applications using modern frameworks like Django, React, and the MERN stack.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className={`${cardClass} transition-all duration-300 group backdrop-blur-sm`}>
                <CardHeader>
                  <Smartphone
                    className={`w-12 h-12 ${
                      isDarkMode ? "text-purple-400" : "text-amber-600"
                    } mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  />
                  <CardTitle className={`${textPrimary} transition-colors duration-500`}>Mobile Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={`${textSecondary} transition-colors duration-500`}>
                    Creating mobile applications using Flutter and Android Studio with focus on user experience.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className={`${cardClass} transition-all duration-300 group backdrop-blur-sm`}>
                <CardHeader>
                  <Award
                    className={`w-12 h-12 ${
                      isDarkMode ? "text-emerald-400" : "text-emerald-600"
                    } mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  />
                  <CardTitle className={`${textPrimary} transition-colors duration-500`}>Design & Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={`${textSecondary} transition-colors duration-500`}>
                    Leading design teams at ACM UET Lahore and creating visual content for various events and projects.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className={`py-20 ${
          isDarkMode
            ? "bg-gradient-to-l from-gray-900/50 to-slate-900/50"
            : "bg-gradient-to-l from-amber-50/30 to-rose-50/30"
        } relative transition-all duration-500`}
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold ${textPrimary} mb-6 transition-colors duration-500`}>
              Education
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className={`${cardClass} transition-all duration-300 backdrop-blur-sm`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className={`text-xl ${textPrimary} mb-2 transition-colors duration-500`}>
                        Bachelor in Computer Engineering
                      </CardTitle>
                      <CardDescription
                        className={`text-lg ${
                          isDarkMode ? "text-cyan-400" : "text-rose-600"
                        } font-medium transition-colors duration-500`}
                      >
                        University of Engineering and Technology, Lahore
                      </CardDescription>
                      <div className={`flex items-center gap-2 mt-2 ${textMuted} transition-colors duration-500`}>
                        <Calendar className="w-4 h-4" />
                        <span>September 2023 - Present</span>
                      </div>
                      <div className={`flex items-center gap-2 mt-1 ${textMuted} transition-colors duration-500`}>
                        <MapPin className="w-4 h-4" />
                        <span>Lahore, Pakistan</span>
                      </div>
                    </div>
                    <GraduationCap
                      className={`w-12 h-12 ${
                        isDarkMode ? "text-cyan-400" : "text-rose-600"
                      } transition-colors duration-500`}
                    />
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className={`${cardClass} transition-all duration-300 backdrop-blur-sm`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className={`text-xl ${textPrimary} mb-2 transition-colors duration-500`}>
                        F.Sc. (Pre-Engineering)
                      </CardTitle>
                      <CardDescription
                        className={`text-lg ${
                          isDarkMode ? "text-purple-400" : "text-amber-600"
                        } font-medium transition-colors duration-500`}
                      >
                        Punjab College, Burewala
                      </CardDescription>
                      <div className={`flex items-center gap-2 mt-2 ${textMuted} transition-colors duration-500`}>
                        <Calendar className="w-4 h-4" />
                        <span>March 2020 - May 2022</span>
                      </div>
                      <div className={`flex items-center gap-2 mt-1 ${textMuted} transition-colors duration-500`}>
                        <MapPin className="w-4 h-4" />
                        <span>Burewala, Pakistan</span>
                      </div>
                    </div>
                    <GraduationCap
                      className={`w-12 h-12 ${
                        isDarkMode ? "text-purple-400" : "text-amber-600"
                      } transition-colors duration-500`}
                    />
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 ${
          isDarkMode
            ? "bg-gradient-to-r from-slate-900/50 to-gray-900/50"
            : "bg-gradient-to-r from-white/30 to-amber-50/30"
        } relative transition-all duration-500`}
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold ${textPrimary} mb-6 transition-colors duration-500`}>
              Technical Skills
            </h2>
            <p className={`text-lg ${textSecondary} max-w-3xl mx-auto transition-colors duration-500`}>
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className={`${cardClass} transition-all duration-300 h-full backdrop-blur-sm`}>
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skillGroup.color} flex items-center justify-center mb-4 shadow-lg transition-all duration-500`}
                    >
                      <skillGroup.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className={`${textPrimary} text-lg transition-colors duration-500`}>
                      {skillGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={`${
                            isDarkMode
                              ? "bg-slate-700 text-slate-200 hover:bg-slate-600"
                              : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                          } transition-all duration-500`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 ${
          isDarkMode
            ? "bg-gradient-to-l from-gray-900/50 to-slate-900/50"
            : "bg-gradient-to-l from-amber-50/30 to-rose-50/30"
        } relative transition-all duration-500`}
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold ${textPrimary} mb-6 transition-colors duration-500`}>
              My Projects
            </h2>
            <p className={`text-lg ${textSecondary} max-w-3xl mx-auto transition-colors duration-500`}>
              A collection of projects I've worked on during my studies and personal time.
            </p>
          </motion.div>

          <Tabs defaultValue="featured" className="w-full">
            <TabsList
              className={`grid w-full grid-cols-2 ${
                isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white/80 border-amber-200"
              } backdrop-blur-sm transition-all duration-500`}
            >
              <TabsTrigger
                value="featured"
                className={`${
                  isDarkMode
                    ? "data-[state=active]:bg-cyan-600 data-[state=active]:text-white"
                    : "data-[state=active]:bg-rose-600 data-[state=active]:text-white"
                } transition-all duration-500`}
              >
                Featured Projects
              </TabsTrigger>
              <TabsTrigger
                value="all"
                className={`${
                  isDarkMode
                    ? "data-[state=active]:bg-cyan-600 data-[state=active]:text-white"
                    : "data-[state=active]:bg-rose-600 data-[state=active]:text-white"
                } transition-all duration-500`}
              >
                All Projects
              </TabsTrigger>
            </TabsList>

            <TabsContent value="featured" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((p) => p.featured)
                  .map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                      <Card className={`${cardClass} transition-all duration-300 h-full backdrop-blur-sm group`}>
                        <div
                          className={`aspect-video ${
                            isDarkMode
                              ? "bg-gradient-to-br from-slate-700 to-slate-800"
                              : "bg-gradient-to-br from-amber-100 to-rose-100"
                          } flex items-center justify-center overflow-hidden rounded-t-lg transition-all duration-500`}
                        >
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className={`${textPrimary} transition-colors duration-500`}>
                            {project.title}
                          </CardTitle>
                          <CardDescription className={`${textSecondary} transition-colors duration-500`}>
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className={`${
                                  isDarkMode ? "border-cyan-500/50 text-cyan-300" : "border-rose-500/50 text-rose-700"
                                } transition-all duration-500`}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            {project.demo && (
                              <Button
                                size="sm"
                                asChild
                                className={`${
                                  isDarkMode ? "bg-cyan-600 hover:bg-cyan-700" : "bg-rose-600 hover:bg-rose-700"
                                } text-white transition-all duration-500`}
                              >
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </a>
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              asChild
                              className={`${
                                isDarkMode
                                  ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                                  : "border-amber-300 text-amber-800 hover:bg-amber-50"
                              } transition-all duration-500`}
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <Card className={`${cardClass} transition-all duration-300 h-full backdrop-blur-sm group`}>
                      <div
                        className={`aspect-video ${
                          isDarkMode
                            ? "bg-gradient-to-br from-slate-700 to-slate-800"
                            : "bg-gradient-to-br from-amber-100 to-rose-100"
                        } flex items-center justify-center overflow-hidden rounded-t-lg transition-all duration-500`}
                      >
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className={`${textPrimary} text-lg transition-colors duration-500`}>
                          {project.title}
                        </CardTitle>
                        <CardDescription className={`${textSecondary} text-sm transition-colors duration-500`}>
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.tech.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className={`${
                                isDarkMode ? "border-cyan-500/50 text-cyan-300" : "border-rose-500/50 text-rose-700"
                              } text-xs transition-all duration-500`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          {project.demo && (
                            <Button
                              size="sm"
                              asChild
                              className={`${
                                isDarkMode ? "bg-cyan-600 hover:bg-cyan-700" : "bg-rose-600 hover:bg-rose-700"
                              } text-white text-xs transition-all duration-500`}
                            >
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Demo
                              </a>
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className={`${
                              isDarkMode
                                ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                                : "border-amber-300 text-amber-800 hover:bg-amber-50"
                            } text-xs transition-all duration-500`}
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3 h-3 mr-1" />
                              Code
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section
        id="extracurricular"
        className={`py-20 ${
          isDarkMode
            ? "bg-gradient-to-r from-slate-900/50 to-gray-900/50"
            : "bg-gradient-to-r from-white/30 to-amber-50/30"
        } relative transition-all duration-500`}
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold ${textPrimary} mb-6 transition-colors duration-500`}>
              Extracurricular Activities
            </h2>
            <p className={`text-lg ${textSecondary} max-w-3xl mx-auto transition-colors duration-500`}>
              My involvement and leadership roles at ACM UET Lahore.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <div className="text-center">
                <img
                  src="/acm-logo.png"
                  alt="ACM UET Lahore Logo"
                  className={`w-32 h-32 mx-auto mb-4 rounded-lg shadow-2xl ${
                    isDarkMode ? "shadow-cyan-500/25" : "shadow-rose-500/25"
                  } transition-all duration-500`}
                />
                <h3 className={`text-2xl font-bold ${textPrimary} transition-colors duration-500`}>ACM UET Lahore</h3>
                <p className={`${textSecondary} transition-colors duration-500`}>Association for Computing Machinery</p>
              </div>
            </div>

            <div className="space-y-8">
              {acmRoles.map((role, index) => (
                <motion.div
                  key={role.role}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className={`${cardClass} transition-all duration-300 backdrop-blur-sm`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className={`text-xl ${textPrimary} mb-2 transition-colors duration-500`}>
                            {role.role}
                          </CardTitle>
                          <div
                            className={`flex items-center gap-2 ${
                              isDarkMode ? "text-cyan-400" : "text-rose-600"
                            } font-medium mb-2 transition-colors duration-500`}
                          >
                            <Calendar className="w-4 h-4" />
                            <span>{role.period}</span>
                          </div>
                          <CardDescription className={`${textSecondary} transition-colors duration-500`}>
                            {role.description}
                          </CardDescription>
                        </div>
                        <Award
                          className={`w-8 h-8 ${
                            isDarkMode ? "text-cyan-400" : "text-rose-600"
                          } transition-colors duration-500`}
                        />
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <Card
                className={`${
                  isDarkMode
                    ? "bg-gradient-to-r from-slate-800/50 to-gray-800/50 border-slate-700"
                    : "bg-gradient-to-r from-white/50 to-amber-50/50 border-amber-300"
                } backdrop-blur-sm transition-all duration-500`}
              >
                <CardHeader>
                  <CardTitle className={`${textPrimary} text-center transition-colors duration-500`}>
                    Key Contributions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className={`font-semibold ${textPrimary} mb-2 transition-colors duration-500`}>
                        Design & Visual Content
                      </h4>
                      <p className={`${textSecondary} text-sm transition-colors duration-500`}>
                        Creating engaging visuals and graphics for ACM events and social media campaigns.
                      </p>
                    </div>
                    <div>
                      <h4 className={`font-semibold ${textPrimary} mb-2 transition-colors duration-500`}>
                        Team Leadership
                      </h4>
                      <p className={`${textSecondary} text-sm transition-colors duration-500`}>
                        Leading and mentoring junior designers, managing project timelines and deliverables.
                      </p>
                    </div>
                    <div>
                      <h4 className={`font-semibold ${textPrimary} mb-2 transition-colors duration-500`}>
                        Event Management
                      </h4>
                      <p className={`${textSecondary} text-sm transition-colors duration-500`}>
                        Contributing to the organization and promotion of technical workshops and competitions.
                      </p>
                    </div>
                    <div>
                      <h4 className={`font-semibold ${textPrimary} mb-2 transition-colors duration-500`}>
                        Problem Solving
                      </h4>
                      <p className={`${textSecondary} text-sm transition-colors duration-500`}>
                        Troubleshooting design issues and implementing creative solutions for various projects.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 ${
          isDarkMode
            ? "bg-gradient-to-l from-gray-900/50 to-slate-900/50"
            : "bg-gradient-to-l from-amber-50/30 to-rose-50/30"
        } relative transition-all duration-500`}
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold ${textPrimary} mb-6 transition-colors duration-500`}>
              Let's Connect
            </h2>
            <p className={`text-lg ${textSecondary} max-w-3xl mx-auto transition-colors duration-500`}>
              I'm always interested in new opportunities and exciting projects. Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className={`${cardClass} text-center transition-all duration-300 backdrop-blur-sm`}>
                <CardHeader>
                  <Mail
                    className={`w-12 h-12 ${
                      isDarkMode ? "text-cyan-400" : "text-rose-600"
                    } mx-auto mb-4 transition-colors duration-500`}
                  />
                  <CardTitle className={`${textPrimary} transition-colors duration-500`}>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${textSecondary} text-sm mb-4 transition-colors duration-500`}>
                    duaerizwan05@gmail.com
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${
                      isDarkMode
                        ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                        : "border-amber-300 text-amber-800 hover:bg-amber-50"
                    } transition-all duration-500`}
                    asChild
                  >
                    <a href="mailto:duaerizwan05@gmail.com">Send Email</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className={`${cardClass} text-center transition-all duration-300 backdrop-blur-sm`}>
                <CardHeader>
                  <Phone className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <CardTitle className={`${textPrimary} transition-colors duration-500`}>Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${textSecondary} text-sm mb-4 transition-colors duration-500`}>+92 313 6629907</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${
                      isDarkMode
                        ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                        : "border-amber-300 text-amber-800 hover:bg-amber-50"
                    } transition-all duration-500`}
                    asChild
                  >
                    <a href="tel:+923136629907">Call Now</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className={`${cardClass} text-center transition-all duration-300 backdrop-blur-sm`}>
                <CardHeader>
                  <Linkedin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className={`${textPrimary} transition-colors duration-500`}>LinkedIn</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${textSecondary} text-sm mb-4 transition-colors duration-500`}>dua-rizwan</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${
                      isDarkMode
                        ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                        : "border-amber-300 text-amber-800 hover:bg-amber-50"
                    } transition-all duration-500`}
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/dua-rizwan-a48116297"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className={`${cardClass} text-center transition-all duration-300 backdrop-blur-sm`}>
                <CardHeader>
                  <Github
                    className={`w-12 h-12 ${
                      isDarkMode ? "text-purple-400" : "text-gray-700"
                    } mx-auto mb-4 transition-colors duration-500`}
                  />
                  <CardTitle className={`${textPrimary} transition-colors duration-500`}>GitHub</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${textSecondary} text-sm mb-4 transition-colors duration-500`}>duarizwan25</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${
                      isDarkMode
                        ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                        : "border-amber-300 text-amber-800 hover:bg-amber-50"
                    } transition-all duration-500`}
                    asChild
                  >
                    <a href="https://github.com/duarizwan25" target="_blank" rel="noopener noreferrer">
                      Follow
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className={`${cardClass} text-center transition-all duration-300 backdrop-blur-sm`}>
                <CardHeader>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 1043.63 592.71"
                        className="w-12 h-12 mx-auto mb-4 fill-black dark:fill-white"
                  >
                   <g>
                     <path d="M588.67,296.31c0,163.66-131.92,296.4-294.77,296.4S0,459.97,0,296.31,131.92,0,293.9,0s294.77,132.65,294.77,296.31" />
                     <path d="M843.16,296.31c0,151.23-65.6,273.77-146.46,273.77s-146.46-122.54-146.46-273.77,65.6-273.77,146.46-273.77,146.46,122.54,146.46,273.77" />
                     <path d="M1043.63,296.31c0,140.47-28.99,254.42-64.76,254.42s-64.76-113.95-64.76-254.42,28.99-254.42,64.76-254.42,64.76,113.95,64.76,254.42" />
                  </g>
                </svg>
                  <CardTitle className={`${textPrimary} transition-colors duration-500`}>Medium</CardTitle>
               </CardHeader>
                 <CardContent>
                   <p className={`${textSecondary} text-sm mb-4 transition-colors duration-500`}>@duaerizwan05</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`${
                      isDarkMode
                      ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                      : "border-amber-300 text-amber-800 hover:bg-amber-50"
                      } transition-all duration-500`}
                      asChild
                              >
                        <a
                           href="https://medium.com/@duaerizwan05"
                           target="_blank"
                           rel="noopener noreferrer"
                           >
                             Read Articles
                         </a>
                     </Button>
                  </CardContent>
              </Card>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a href="/resume.pdf" download>
            <Button
              size="lg"
              className={`${buttonPrimary} shadow-xl text-white transition-all duration-500 ${
                isDarkMode ? "shadow-cyan-500/25" : "shadow-rose-500/25"
              }`}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume (PDF)
            </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 ${
          isDarkMode ? "bg-slate-900/80 border-slate-700" : "bg-white/80 border-amber-200"
        } border-t backdrop-blur-sm transition-all duration-500`}
      >
        <div className="container mx-auto px-6 text-center">
          <p className={`${textMuted} transition-colors duration-500`}>
            © 2024 Dua Rizwan. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
