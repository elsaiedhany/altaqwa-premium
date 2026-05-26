
"use client"
import {motion} from "framer-motion"

export default function Hero(){
 return(
  <section id="home" className="min-h-screen flex items-center">
   <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

    <motion.div
      initial={{opacity:0,y:40}}
      animate={{opacity:1,y:0}}
      transition={{duration:.8}}
    >
      <span className="text-gold">Luxury Aluminum Design</span>

      <h1 className="text-6xl font-black leading-tight mt-6">
        التقوى
        <br />
        للألوميتال
        <br />
        والمطابخ
      </h1>

      <p className="text-zinc-400 mt-6 leading-8 text-lg">
        مطابخ ألوميتال وتشطيبات Premium بخبرة أكتر من 20 سنة.
      </p>

      <div className="flex gap-4 mt-8">
        <a href="#projects"
         className="bg-gold text-black px-8 py-4 rounded-2xl font-black">
         شوف الأعمال
        </a>

        <a href="https://wa.me/201003515207"
         className="glass px-8 py-4 rounded-2xl">
         واتساب
        </a>
      </div>
    </motion.div>

    <motion.img
      initial={{opacity:0,scale:.9}}
      animate={{opacity:1,scale:1}}
      transition={{duration:1}}
      src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop"
      className="rounded-[40px]"
    />

   </div>
  </section>
 )
}
