import { motion } from 'framer-motion';

export default function AboutHero({ title, description, image }) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-base-100">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                    {title}
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                    {description}
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
            >
                <img
                    src={image}
                    alt="Clinic"
                    className="rounded-3xl shadow-2xl w-full h-100 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
        </section>
    );
}
