'use client';
import { useEffect, useState } from 'react';

const asset = 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/';
const nav = [['Home','home'],['Stats','stats'],['Clients','clients'],['Accredian Edge','edge'],['CAT','cat'],['How It Works','how'],['FAQs','faqs'],['Testimonials','testimonials']];
const domains = ['Product & Innovation Hub','Gen-AI Mastery','Leadership Elevation','Tech & Data Insights','Operations Excellence','Digital Enterprise','Fintech Innovation Lab'];
const audiences = [['Tech Professionals','Enhance expertise, embrace tech, drive innovation.'],['Non-Tech Professionals','Adapt digitally, collaborate in tech environments.'],['Emerging Professionals','Develop powerful skills for rapid career growth.'],['Senior Professionals','Strengthen leadership, enhance strategic decisions.']];
const questions = [
 ['What types of corporate training programs does Accredian offer?','We offer tailored certificate, executive and postgraduate programs across technology, leadership, data, AI and business domains.'],
 ['What domain specializations are available?','Our portfolio spans product, generative AI, leadership, technology and data, operations, digital enterprise and fintech.'],
 ['How are programs tailored for an organisation?','We begin with a skill-gap analysis and align the curriculum, format and outcomes to your team’s goals.'],
 ['What delivery formats are available?','Programs can be delivered online, in person or in a flexible blended format for teams across locations.']
];

function Button({ children = 'Enquire Now', onClick, light = false }) { return <button onClick={onClick} className={`button ${light ? 'light' : ''}`}>{children} <span>→</span></button>; }
function SectionTitle({ eyebrow, title }) { return <div className="section-title">{eyebrow && <p>{eyebrow}</p>}<h2>{title}</h2></div>; }
function LeadForm({ close }) {
 const [form,setForm]=useState({name:'',email:'',company:'',phone:''}); const [status,setStatus]=useState('');
 async function submit(e){e.preventDefault();setStatus('Sending…');const r=await fetch('/api/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});const d=await r.json();setStatus(d.message||d.error);if(r.ok)setForm({name:'',email:'',company:'',phone:''});}
 return <div className="modal-backdrop" onClick={close}><form className="lead-form" onSubmit={submit} onClick={e=>e.stopPropagation()}><button type="button" className="close" onClick={close}>×</button><p className="kicker">LET’S TALK</p><h2>Build your team’s edge</h2><p>Tell us about your learning needs and an advisor will get in touch.</p>{[['name','Full name'],['email','Work email'],['company','Company name'],['phone','Phone number (optional)']].map(([key,label])=><label key={key}>{label}<input required={key!=='phone'} type={key==='email'?'email':'text'} value={form[key]} onChange={e=>setForm({...form,[key]:e.target.value})}/></label>)}<Button>Submit enquiry</Button>{status&&<small>{status}</small>}</form></div>;
}
function Header({ open }) { const [menu,setMenu]=useState(false); return <header><a href="#home"><img src={asset+'logo.webp'} alt="Accredian"/></a><nav className={menu?'open':''}>{nav.map(([n,id])=><a onClick={()=>setMenu(false)} href={`#${id}`} key={id}>{n}</a>)}</nav><Button onClick={open}/><button className="menu" onClick={()=>setMenu(!menu)}>☰</button></header>; }
function ReferenceHeader() {
 const [menu,setMenu]=useState(false);
 return <header><a href="#home"><img src={asset+'logo.webp'} alt="Accredian"/></a><nav className={menu?'open':''}>{nav.map(([n,id])=><a onClick={()=>setMenu(false)} href={`#${id}`} key={id}>{n}</a>)}</nav><button className="menu" aria-label="Toggle navigation" onClick={()=>setMenu(!menu)}>☰</button></header>;
}

export default function Home(){
 const [showForm,setShowForm]=useState(false); const [open,setOpen]=useState(null);
 useEffect(() => {
   const sections = document.querySelectorAll('main > section:not(.hero)');
   const observer = new IntersectionObserver((entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         entry.target.classList.add('is-visible');
         observer.unobserve(entry.target);
       }
     });
   }, { threshold: 0.12 });
   sections.forEach((section) => { section.classList.add('reveal'); observer.observe(section); });
   return () => observer.disconnect();
 }, []);
 return <main>
 <ReferenceHeader />
 <section id="home" className="hero"><div className="hero-copy"><h1>Next-Gen <em>Expertise</em><br/>For Your <em>Enterprise</em></h1><p className="hero-text">Cultivate high-performance<br/> teams through expert learning.</p><ul>{['Tailored Solutions','Industry Insights','Expert Guidance'].map(x=><li key={x}>✓ {x}</li>)}</ul><Button onClick={()=>setShowForm(true)}/></div><div className="hero-photo"><img src={asset+'corporate-big-hero-v4.webp'} alt="Corporate learning session"/></div></section>
 <section id="stats" className="stats"><SectionTitle eyebrow="THE NUMBERS BEHIND OUR SUCCESS" title="Our Track Record"/><div className="stat-grid">{[['10K+','Professionals trained for exceptional career success'],['200+','Sessions delivered with unmatched learning excellence'],['5K+','Active learners engaged in dynamic courses']].map(([n,t])=><div key={n}><h2>{n}</h2><p>{t}</p></div>)}</div></section>
 <section id="clients" className="clients"><SectionTitle eyebrow="SUCCESSFUL COLLABORATIONS WITH THE INDUSTRY’S BEST" title="Our Proven Partnerships"/><div className="logo-row">{['rel.png','hcl.png','ibm.png','crif.png','adp.svg','bayer.svg'].map(x=><img key={x} src={asset+x} alt="Client partner"/>)}</div></section>
 <section id="edge" className="edge"><SectionTitle eyebrow="KEY ASPECTS OF OUR STRATEGIC TRAINING" title="The Accredian Edge"/><img src={asset+'accredian-edge-usp-v3.svg'} alt="The Accredian Edge"/></section>
 <section className="domains"><SectionTitle eyebrow="SPECIALIZED PROGRAMS DESIGNED TO FUEL INNOVATION" title="Our Domain Expertise"/><div className="domain-grid">{domains.map((d,i)=><article key={d}><span>0{i+1}</span><h3>{d}</h3><p>Future-ready learning experiences designed for today’s enterprise.</p><b>Explore →</b></article>)}</div></section>
 <section className="segmentation"><SectionTitle eyebrow="EXPLORE CUSTOM-FIT COURSES DESIGNED TO ADDRESS EVERY PROFESSIONAL FOCUS" title="Tailored Course Segmentation"/><div className="cards">{[['project-management-v2.webp','Program Specific','Certificate, Executive, Post Graduate Certificate'],['digital-transformation-v2.webp','Industry Specific','IT, Healthcare, Retail, Finance, Education, Manufacturing'],['data-science-v2.webp','Topic Specific','Machine Learning, Design, Analytics, Cybersecurity, Cloud'],['senior-management-v2.webp','Level Specific','Senior Leadership, Mid-Career Professionals, Freshers']].map(([img,title,text])=><article key={title}><img src={asset+img} alt=""/><div><h4>{title}</h4><p>{text}</p></div></article>)}</div></section>
 <section className="who"><div className="who-image"><img src={asset+'imagehuman.png'} alt="Professional"/></div><div><p className="kicker">WHO SHOULD JOIN?</p><h2>Strategic Skill Enhancement</h2><div className="audience-grid">{audiences.map(([t,p])=><article key={t}><i>✦</i><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
 <section id="cat" className="cat"><SectionTitle eyebrow="OUR PROVEN APPROACH TO LEARNING EXCELLENCE" title="The CAT Framework"/><img src={asset+'catV2.svg'} alt="CAT framework"/></section>
 <section id="how" className="how"><SectionTitle eyebrow="A STRUCTURED THREE-STEP APPROACH TO SKILL DEVELOPMENT" title="How We Deliver Results That Matter?"/><div className="steps">{[['01','Skill Gap Analysis','Assess team skill gaps and developmental needs.'],['02','Customized Training Plan','Create a tailored roadmap addressing organizational goals.'],['03','Flexible Program Delivery','Deliver adaptable programs aligned with industry and organisational needs.']].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></section>
 <section id="faqs" className="faqs"><SectionTitle title="Frequently Asked Questions"/><div className="faq-list">{questions.map(([q,a],i)=><article key={q}><button onClick={()=>setOpen(open===i?null:i)}>{q}<b>{open===i?'−':'+'}</b></button>{open===i&&<p>{a}</p>}</article>)}</div></section>
 <section id="testimonials" className="testimonials"><SectionTitle eyebrow="WHAT OUR CLIENTS ARE SAYING" title="Testimonials from Our Partners"/><div className="test-grid">{[['adp.svg','“We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise.”'],['bayer.svg','“Accredian’s commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded.”'],['rel.png','“Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense.”']].map(([logo,quote])=><article key={quote}><img src={asset+logo} alt="Partner logo"/><p>{quote}</p></article>)}</div></section>
 <section className="cta"><p className="kicker">UNLOCK YOUR TEAM’S POTENTIAL</p><h2>Want to Learn More About Our Training Solutions?</h2><h4>Get Expert Guidance for Your Team’s Success!</h4><Button light onClick={()=>setShowForm(true)}>Contact Us</Button></section>
 <footer><div><img src={asset+'logo.webp'} alt="Accredian"/><p>Enterprise learning solutions that help teams stay ahead.</p></div><div><h3>Accredian</h3><a href="https://accredian.com/About">About</a><a href="https://blog.accredian.com/">Blog</a><a href="https://accredian.com/whyaccredian">Why Accredian</a></div><div><h3>Contact Us</h3><p>Email us: <a href="mailto:enterprise@accredian.com">enterprise@accredian.com</a></p><p>4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana</p></div></footer><div className="copyright">© 2026 Accredian — A Brand of FullStack Education Pvt Ltd. All Rights Reserved</div>
 {showForm&&<LeadForm close={()=>setShowForm(false)}/>}</main> }
