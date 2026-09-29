import jsPDF from 'jspdf';

export const generateBrochurePDF = () => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const maxWidth = pageWidth - (margin * 2);
  let yPosition = margin;

  // Helper function to add text with word wrap
  const addText = (text: string, fontSize: number = 10, isBold: boolean = false, color: number[] = [0, 0, 0]) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    doc.setTextColor(color[0], color[1], color[2]);
    
    const lines = doc.splitTextToSize(text, maxWidth);
    
    lines.forEach((line: string) => {
      if (yPosition > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
      }
      doc.text(line, margin, yPosition);
      yPosition += fontSize * 0.5;
    });
    
    yPosition += 3;
  };

  // Helper to add bullet point
  const addBullet = (text: string) => {
    doc.setFontSize(10);
    doc.text('•', margin + 2, yPosition);
    doc.text(text, margin + 8, yPosition);
    yPosition += 5;
  };

  const addSpacer = (height: number = 5) => {
    yPosition += height;
  };

  const addLine = () => {
    doc.setDrawColor(59, 130, 246);
    doc.setLineWidth(0.5);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 5;
  };

  // Header
  doc.setFillColor(59, 130, 246);
  doc.rect(0, 0, pageWidth, 50, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('BeSTEM Innovation Hub', pageWidth / 2, 20, { align: 'center' });
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Igniting Curiosity, Innovation & Leadership Through STEM', pageWidth / 2, 30, { align: 'center' });
  doc.text('43 Bathur Street, East Legon, Accra', pageWidth / 2, 38, { align: 'center' });
  
  yPosition = 60;

  // About Section
  addText('About BeSTEM', 16, true, [59, 130, 246]);
  addLine();
  addText('BeSTEM Innovation Hub is a leading STEM education organization in Ghana, dedicated to empowering young minds through hands-on learning experiences. We create innovation labs where learners build, experiment, and solve real-world challenges.');
  addSpacer(3);
  addText('Our Mission: To transform STEM education by making it practical, engaging, and accessible to all students aged 5 and above.', 10, true);
  addSpacer(8);

  // Programs Section
  addText('Our Programs', 16, true, [59, 130, 246]);
  addLine();

  const programs = [
    {
      name: 'STEM Foundations',
      description: 'Hands-on introduction to critical STEM concepts through engaging projects',
      highlights: ['Project-Based Learning', 'Critical Thinking', 'Scientific Method'],
      price: 'GHS 800'
    },
    {
      name: 'Innovation Labs',
      description: 'Creative design spaces where learners solve real-world problems',
      highlights: ['Problem Solving', 'Design Thinking', 'Prototyping'],
      price: 'GHS 1,200'
    },
    {
      name: 'Coding & Tech Skills',
      description: 'Future-ready training in digital literacy and software creation',
      highlights: ['Programming Languages', 'Web Development', 'App Creation'],
      price: 'GHS 1,000'
    },
    {
      name: 'AI & Machine Learning',
      description: 'Explore artificial intelligence and build intelligent systems',
      highlights: ['AI Fundamentals', 'Machine Learning', 'Data Science'],
      price: 'GHS 1,600'
    },
    {
      name: 'Engineering & Robotics',
      description: 'Practical problem-solving using modern tools and technologies',
      highlights: ['Robotics Design', '3D Printing', 'Automation'],
      price: 'GHS 1,500'
    },
    {
      name: 'Entrepreneurship in STEM',
      description: 'Nurturing creativity, leadership, and business thinking',
      highlights: ['Business Planning', 'Leadership Skills', 'Innovation'],
      price: 'GHS 1,200'
    }
  ];

  programs.forEach((program) => {
    if (yPosition > pageHeight - 60) {
      doc.addPage();
      yPosition = margin;
    }
    
    addText(program.name, 12, true, [59, 130, 246]);
    addText(program.description);
    addText(`Price: ${program.price} (12 weeks+) | Ages: 5+ | Class Size: 10-30 students`, 9, false, [100, 100, 100]);
    addText(`Highlights: ${program.highlights.join(', ')}`, 9, false, [80, 80, 80]);
    addSpacer(5);
  });

  // Why Choose BeSTEM
  if (yPosition > pageHeight - 80) {
    doc.addPage();
    yPosition = margin;
  }
  
  addText('Why Choose BeSTEM?', 16, true, [59, 130, 246]);
  addLine();
  addBullet('Hands-On Learning - Practical, project-based approach');
  addBullet('Real-World Skills - Preparing students for careers in technology');
  addBullet('Expert Instructors - Passionate educators with industry experience');
  addBullet('Modern Facilities - State-of-the-art labs with cutting-edge equipment');
  addBullet('Small Class Sizes - 10-30 students for quality instruction');
  addBullet('Certification - Industry-recognized certificates upon completion');
  addSpacer(8);

  // Partnerships
  addText('Official Partnerships', 16, true, [59, 130, 246]);
  addLine();
  addBullet('The Ghana STEM Network (2025)');
  addBullet('STEMAIDE');
  addBullet('Perfect End Int. School, St. Samuel Int. School');
  addBullet('Hall of Fame Montessori School');
  addBullet('Apostolic Faith School, SS Peters and Paul Catholic School');
  addSpacer(8);

  // Scholarships
  addText('Scholarship Opportunities', 16, true, [59, 130, 246]);
  addLine();
  addBullet('Need-based scholarships (up to 100% coverage)');
  addBullet('Merit-based scholarships for exceptional students');
  addBullet('Sibling discounts (20% off second child)');
  addBullet('Early bird discounts (15% off if paid 2 weeks early)');
  addSpacer(10);

  // Contact Footer
  doc.setFillColor(59, 130, 246);
  doc.rect(0, pageHeight - 45, pageWidth, 45, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Get Started Today!', pageWidth / 2, pageHeight - 35, { align: 'center' });
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Email: besteminnovationhub@gmail.com', pageWidth / 2, pageHeight - 28, { align: 'center' });
  doc.text('Phone: +233 53 048 6661 | +233 59 245 5824', pageWidth / 2, pageHeight - 22, { align: 'center' });
  doc.text('Location: 43 Bathur Street, East Legon, Accra', pageWidth / 2, pageHeight - 16, { align: 'center' });
  doc.setFontSize(8);
  doc.text('Follow us: @Bestem360 on Facebook, Instagram, YouTube, Twitter & LinkedIn', pageWidth / 2, pageHeight - 10, { align: 'center' });

  // Save the PDF
  doc.save('BeSTEM_Innovation_Hub_Brochure.pdf');
};

