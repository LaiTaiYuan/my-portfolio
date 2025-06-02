'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Code,
  Coffee,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Server,
  Sun,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const skills = [
    { name: 'Java', level: 95, icon: <Coffee className="w-5 h-5" /> },
    { name: 'Spring Boot', level: 90, icon: <Server className="w-5 h-5" /> },
    { name: 'MySQL', level: 85, icon: <Database className="w-5 h-5" /> },
    { name: 'PostgreSQL', level: 80, icon: <Database className="w-5 h-5" /> },
    { name: 'RESTful API', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'Microservices', level: 85, icon: <Server className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: '個案彙管系統',
      description: '企業級個案管理平台，提供完整的案件追蹤、狀態管理和報表功能',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Redis'],
      features: [
        '案件生命週期管理',
        '多角色權限控制',
        '即時通知系統',
        '數據分析報表',
      ],
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      title: '知識管理平台',
      description: '企業知識庫系統，支援文檔管理、搜索引擎和協作功能',
      tech: ['Java', 'Spring Boot', 'Elasticsearch', 'PostgreSQL'],
      features: ['全文檢索', '版本控制', '協作編輯', '權限管理'],
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      title: '微服務架構專案',
      description: '基於微服務架構的分散式系統，提供高可用性和擴展性',
      tech: ['Java', 'Spring Cloud', 'Docker', 'Kubernetes'],
      features: ['服務發現', '負載均衡', '熔斷器', '分散式追蹤'],
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      title: 'API Gateway 系統',
      description: '企業級 API 閘道器，提供統一的 API 管理和安全控制',
      tech: ['Java', 'Spring Gateway', 'OAuth2', 'JWT'],
      features: ['API 路由', '認證授權', '限流控制', '監控告警'],
      image: '/placeholder.svg?height=200&width=400',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Leonard Lai
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#home"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                首頁
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                關於我
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                技能
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                作品
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                聯絡
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="ml-4"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
                <Link
                  href="#home"
                  className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  首頁
                </Link>
                <Link
                  href="#about"
                  className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  關於我
                </Link>
                <Link
                  href="#skills"
                  className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  技能
                </Link>
                <Link
                  href="#projects"
                  className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  作品
                </Link>
                <Link
                  href="#contact"
                  className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  聯絡
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">L</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Leonard Lai
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
              後端工程師 | Java 專家
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              專精於 Java
              後端開發，擁有豐富的企業級系統開發經驗，致力於構建高效、可擴展的軟體解決方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="#projects" className="flex items-center">
                  查看作品
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="#contact" className="flex items-center">
                  聯絡我
                  <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              關於我
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">L</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                  後端工程師 & Java 專家
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  我是一名專精於 Java
                  後端開發的軟體工程師，擁有豐富的企業級系統開發經驗。
                  在我的職業生涯中，我專注於構建高效、可擴展且安全的後端系統。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  我曾參與開發個案彙管系統和知識管理平台等大型專案，這些經驗讓我深入了解企業級應用的複雜性和挑戰。
                  我熟悉微服務架構、分散式系統設計，並且在 API
                  設計和資料庫優化方面有豐富經驗。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">Spring Boot</Badge>
                  <Badge variant="secondary">微服務架構</Badge>
                  <Badge variant="secondary">資料庫設計</Badge>
                  <Badge variant="secondary">API 開發</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              技能專長
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg mr-3">
                        {skill.icon}
                      </div>
                      <h3 className="font-semibold">{skill.name}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>熟練度</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              專案作品
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">主要功能：</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">技術棧：</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">聯絡我</h2>
            <p className="text-lg text-muted-foreground mb-12">
              如果您對我的工作感興趣，或有任何合作機會，歡迎與我聯絡
            </p>

            <Card className="max-w-md mx-auto">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">電子郵件</p>
                      <p className="text-muted-foreground">
                        egroup.leonard@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="icon">
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={() =>
                        (window.location.href =
                          'mailto:egroup.leonard@gmail.com')
                      }
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      發送郵件
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Leonard Lai. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
