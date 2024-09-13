import Head from 'next/head';

export default function About() {
  return (
    <div className="container mx-auto p-4 pt-6">
      <Head>
        <title>About - Full Stack Developer Portfolio</title>
      </Head>

      {/* About Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">About Me</h2>

        <p className="text-gray-700 mb-4 leading-relaxed text-lg">
          Hi, I'm <strong>Anmol Yagik</strong>, a passionate and innovative <span className="text-blue-600">Full Stack Developer</span> with a knack for building web applications that solve real-world problems. With a diverse skill set and experience in front-end and back-end technologies, I'm constantly pushing boundaries and exploring new ways to create impactful software solutions.
        </p>

        <h3 className="text-3xl font-semibold text-blue-500 mb-4">🚀 Unveiling the Next Frontier of Social Media</h3>
        <p className="text-gray-700 mb-4 leading-relaxed text-lg">
          I am thrilled to share my latest research paper, <strong>"Unveiling the Next Frontier of Social Media: A Paradigm Shift in Content Sharing."</strong> This research dives deep into how social media platforms are evolving and proposes innovative strategies centered on user empowerment, security, and community engagement.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-6">
          <h4 className="text-2xl font-semibold text-blue-500 mb-2">🔍 Key Highlights:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Personalization through AI:</strong> Using advanced algorithms to tailor content and improve user experience.</li>
            <li><strong>Blockchain for Security and Transparency:</strong> Decentralized networks to ensure secure content ownership and transactions.</li>
            <li><strong>User-Centric Content Creation:</strong> Empowering users with intuitive tools and rewards for collaborative content.</li>
            <li><strong>Community-Driven Engagement:</strong> Fostering meaningful connections through inclusive spaces and constructive dialogue.</li>
          </ul>
        </div>

        <p className="text-gray-700 mb-4 leading-relaxed text-lg">
          In this paper, I outline a comprehensive blueprint for the future of content sharing, focusing on emerging technologies like AI, AR/VR, and blockchain. I believe these technologies will transform how we engage with digital spaces, enabling a more authentic and inclusive experience.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          📄 <a href="https://lnkd.in/giU89Nv9" target="_blank" className="text-blue-500 underline hover:text-blue-700">Read the full paper here</a>.
        </p>

        <h3 className="text-3xl font-semibold text-blue-500 mb-4">Skills & Technologies</h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>JavaScript (ES6+), TypeScript</li>
          <li>React.js, Next.js</li>
          <li>Node.js, Express.js</li>
          <li>MongoDB, PostgreSQL</li>
          <li>Docker, CI/CD, Git/GitHub</li>
          <li>Cloud Platforms (AWS, Google Cloud)</li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-500 mb-4">Professional Experience</h3>
        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          I have hands-on experience developing an <strong>e-agriculture platform</strong> that optimizes farming processes using modern web technologies. Additionally, I built an <strong>e-commerce platform</strong> with features like product browsing, cart management, and secure transactions.
        </p>

        <h3 className="text-3xl font-semibold text-blue-500 mb-4">Education</h3>
        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          I hold a <strong>Master of Computer Applications (MCA)</strong> from <strong>G.L. Bajaj Institute of Technology and Management</strong>, where I developed expertise in full stack development, cloud computing, and software engineering.
        </p>

        <h3 className="text-3xl font-semibold text-blue-500 mb-4">Interests & Hobbies</h3>
        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          When I'm not coding, I enjoy reading, writing, and playing cricket. I'm always on the lookout for new technologies to learn and love collaborating on projects that challenge the status quo.
        </p>

        <h3 className="text-3xl font-semibold text-blue-500 mb-4">Get in Touch</h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          I'm always open to exciting opportunities and collaborations. Feel free to reach out to me via my <a href="/contact" className="text-blue-500 underline hover:text-blue-700">Contact</a> page.
        </p>
      </div>
    </div>
  );
}
