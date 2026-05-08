import { motion } from 'framer-motion';
import { Heart, Sliders, Lightbulb } from 'lucide-react';

const icons = {
  Heart: Heart,
  Sliders: Sliders,
  Lightbulb: Lightbulb
};

export default function AboutValues({ title, items }) {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <h2 className="text-3xl font-bold text-primary text-center mb-16">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card bg-base-100 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="card-body p-8 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
