import React from 'react';
import { Layout } from '../layouts';
import { Timeline } from '../components';

const About = () => {
  return (
    <Layout>
      <main className="container mx-auto max-width pt-10 pb-20 mt-10">
        <section>
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            tentang saya
          </h1>
          <p className="text-content py-8 lg:max-w-3xl">
            saya lahir di jiung
          </p>
        </section>
        <section>
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            Pengalaman Organisasi
          </h1>
          <Timeline
            position="KETUA MPK"
            company="Smp 228"
            location="Jakarta Pusat"
            type="Menjabat"
            duration="2022 - 2023"
          />
        </section>
        <section className="mt-6">
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            Pendidikan
          </h1>
          <Timeline
            position="Rekayasa Perangkat Lunak"
            company="SMK Negeri 21 Jakarta"
            location="Jakarta Pusat"
          />
        </section>
      </main>
    </Layout>
  );
};

export default About;
