
export default function Navbar(){
 return(
  <header className="fixed top-0 w-full z-50 glass">
   <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <h1 className="text-2xl font-black text-gold">التقوى</h1>

    <div className="hidden md:flex gap-8">
      <a href="#home">الرئيسية</a>
      <a href="#services">الخدمات</a>
      <a href="#projects">الأعمال</a>
      <a href="#contact">تواصل</a>
    </div>

    <a href="https://wa.me/201003515207"
      className="bg-gold text-black px-5 py-3 rounded-2xl font-black">
      واتساب
    </a>
   </div>
  </header>
 )
}
