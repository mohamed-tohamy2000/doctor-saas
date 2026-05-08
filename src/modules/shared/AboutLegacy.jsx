import { motion } from 'framer-motion';

export default function AboutLegacy({ title, description, image }) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-base-100">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={image}
          alt="Doctor"
          className="rounded-3xl shadow-2xl w-full h-100 object-cover"
        />
      </motion.div>
    </section>

  );
}
