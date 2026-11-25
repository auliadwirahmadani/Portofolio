/* ── types ── */
export interface Project {
	title: string;
	description: string;
	tags: string[];
	image?: string;
	liveUrl?: string;
	githubUrl?: string;
}
export interface Experience {
	role: string;
	company: string;
	period: string;
	description: string;
	tags: string[];
}
export interface Skill {
	name: string;
	icon: string;
	category: 'frontend' | 'backend' | 'tools' | 'other';
}
export interface Social {
	name: string;
	url: string;
	icon: string;
}
export interface ShowcasePanel {
	title: string;
	url: string;
	accent: string;
	accentAlt: string;
	h: number;
}

/* ══════════════════════════════════════════════
   🔧  EDIT YOUR DATA BELOW
   ══════════════════════════════════════════════ */

export const personalInfo = {
	name: 'Aulia Dwi Rahmadani',
	title: 'Full-Stack Web Developer &\nWebGIS Enthusiast',
	eyebrow: "HI, I'M AULIA",
	quote: '"Mahasiswa Informatika berfokus pada web full-stack dan WebGIS, bersertifikat Full-Stack Web Developer dari Dicoding (Coding Camp 2026)."',
	email: 'auliadwirahmadani81@gmail.com',
	location: 'Bengkulu, Indonesia',
	status: 'Open to opportunities',
	spots: 'Available',
};

export const showcasePanels: ShowcasePanel[] = [
	{ title: 'TechHire Intelligence',   url: 'github.com/auliadwirahmadani', accent: '#1b3328', accentAlt: '#2d5a42', h: 190 },
	{ title: 'Geoportal Bengkulu',      url: 'github.com/auliadwirahmadani', accent: '#1a1e2e', accentAlt: '#2e3550', h: 165 },
	{ title: 'WebGIS Wisata Pesisir',   url: 'github.com/auliadwirahmadani', accent: '#2a1f24', accentAlt: '#4a3540', h: 200 },
	{ title: 'IoT Smart Irrigation',    url: 'github.com/auliadwirahmadani', accent: '#1a2230', accentAlt: '#2b3a52', h: 175 },
	{ title: 'Portfolio v1',            url: 'github.com/auliadwirahmadani', accent: '#1f2a1e', accentAlt: '#384a35', h: 185 },
	{ title: 'Bengkulu Satu Data',      url: 'github.com/auliadwirahmadani', accent: '#20222a', accentAlt: '#363845', h: 195 },
	{ title: 'Laravel Admin Panel',     url: 'github.com/auliadwirahmadani', accent: '#2a251a', accentAlt: '#4a4230', h: 170 },
	{ title: 'REST API Projects',       url: 'github.com/auliadwirahmadani', accent: '#1a2a2a', accentAlt: '#304848', h: 180 },
];

export const skills: Skill[] = [
	// Frontend & Web
	{ name: 'JavaScript',         icon: 'js',         category: 'frontend' },
	{ name: 'React',              icon: 'react',      category: 'frontend' },
	{ name: 'Laravel',            icon: 'laravel',    category: 'frontend' },
	{ name: 'Leaflet (WebGIS)',   icon: 'leaflet',    category: 'frontend' },
	{ name: 'REST API',           icon: 'api',        category: 'frontend' },
	// Backend & DB
	{ name: 'PHP',                icon: 'php',        category: 'backend' },
	{ name: 'Python',             icon: 'python',     category: 'backend' },
	{ name: 'Node.js',            icon: 'nodejs',     category: 'backend' },
	{ name: 'FastAPI',            icon: 'fastapi',    category: 'backend' },
	{ name: 'PostgreSQL/PostGIS', icon: 'postgresql', category: 'backend' },
	{ name: 'MySQL',              icon: 'mysql',      category: 'backend' },
	{ name: 'C/C++',              icon: 'cpp',        category: 'backend' },
	{ name: 'Java',               icon: 'java',       category: 'backend' },
	// Tools
	{ name: 'Git & GitHub',       icon: 'git',        category: 'tools' },
	{ name: 'Figma',              icon: 'figma',      category: 'tools' },
	{ name: 'VS Code',            icon: 'vscode',     category: 'tools' },
	{ name: 'Postman',            icon: 'postman',    category: 'tools' },
	{ name: 'Laragon',            icon: 'laragon',    category: 'tools' },
];

export const projects: Project[] = [
	{
		title: 'TechHire Intelligence System',
		description:
			'Platform rekrutmen end-to-end: antarmuka recruiter/kandidat, REST API autentikasi JWT, serta AI Service untuk NLP, CV parsing, dan model matching.',
		tags: ['React 19', 'Vite', 'Node.js', 'Express', 'Python', 'FastAPI'],
		githubUrl: 'https://github.com/auliadwirahmadani',
	},
	{
		title: 'Sistem Informasi Geoportal Provinsi Bengkulu',
		description:
			'Geoportal WebGIS lengkap dengan backend Laravel, peta interaktif Leaflet, fitur penyajian data spasial untuk publik dan instansi, serta autentikasi dan admin panel.',
		tags: ['Laravel', 'Leaflet', 'PostgreSQL', 'PostGIS'],
		githubUrl: 'https://github.com/auliadwirahmadani',
	},
	{
		title: 'Website Peta Interaktif Wisata Pesisir Bengkulu',
		description:
			'Website WebGIS menampilkan destinasi wisata pesisir lengkap dengan titik lokasi, rute perjalanan, pencarian, navigasi, dan admin panel berbasis Laravel.',
		tags: ['Laravel', 'Leaflet', 'MySQL', 'WebGIS'],
		githubUrl: 'https://github.com/auliadwirahmadani',
	},
	{
		title: 'IoT Smart Irrigation System',
		description:
			'Sistem monitoring kelembapan tanah dan penyiraman otomatis yang dapat dipantau jarak jauh via internet, menghemat air dan energi tanpa intervensi manual.',
		tags: ['IoT', 'Python', 'REST API', 'Sensor'],
		githubUrl: 'https://github.com/auliadwirahmadani',
	},
];

export const experiences: Experience[] = [
	{
		role: 'Intern — Divisi Statistik & Kriptografi',
		company: 'Dinas Komunikasi, Informatika, dan Statistik Provinsi Bengkulu',
		period: 'Jan 2026 – Apr 2026',
		description:
			'Mengembangkan fitur peta interaktif geoportal "Bengkulu Satu Data" untuk visualisasi data spasial. Menganalisis kebutuhan pengguna, mengolah data geospasial, serta menguji dan menyempurnakan sistem bersama tim sesuai standar instansi pemerintah.',
		tags: ['Laravel', 'Leaflet', 'WebGIS', 'PostGIS', 'Git'],
	},
	{
		role: 'Asisten Laboratorium',
		company: 'Informatics Laboratory, Universitas Bengkulu',
		period: '2024 – 2026',
		description:
			'Mendampingi praktikum Pemrograman Berbasis Web (2026), Rekayasa Perangkat Lunak (2025), dan Pemrograman Berorientasi Objek (2024). Membimbing mahasiswa dalam memahami konsep dan implementasi kode.',
		tags: ['Web Dev', 'OOP', 'Software Engineering', 'Mentoring'],
	},
	{
		role: 'Sekretaris Dept. Komunikasi & Informasi',
		company: 'Himpunan Mahasiswa Teknik Informatika',
		period: 'Jan 2025 – Mei 2026',
		description:
			'Menjalin kolaborasi eksternal dengan organisasi dan komunitas teknologi; menyusun press release, mengelola dokumentasi, publikasi digital, editing video, dan unggahan ke media sosial.',
		tags: ['Communication', 'Content Creation', 'Video Editing'],
	},
];

export const socials: Social[] = [
	{ name: 'GitHub',   url: 'https://github.com/auliadwirahmadani',                              icon: 'github' },
	{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/aulia-dwi-rahmadani-3260b03a9',          icon: 'linkedin' },
	{ name: 'Email',    url: 'mailto:auliadwirahmadani81@gmail.com',                               icon: 'email' },
];
