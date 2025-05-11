"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Selamat Datang di Aplikasi Kami
              </h1>
              <p className="text-xl mb-8">
                Platform modern untuk memenuhi kebutuhan digital Anda
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
              >
                Mulai Sekarang
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/hero-image.png"
                  alt="Hero Image"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fitur Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Fitur Unggulan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-blue-600 text-4xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Untuk Memulai?</h2>
          <p className="text-xl mb-8">
            Bergabunglah dengan ribuan pengguna yang telah merasakan manfaatnya
          </p>
          <Link
            href="/register"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: "🚀",
    title: "Performa Tinggi",
    description: "Optimalkan kinerja aplikasi Anda dengan teknologi terbaru",
  },
  {
    icon: "🔒",
    title: "Keamanan Terjamin",
    description: "Sistem keamanan tingkat tinggi untuk melindungi data Anda",
  },
  {
    icon: "💡",
    title: "Mudah Digunakan",
    description:
      "Antarmuka yang intuitif dan mudah dipahami oleh semua pengguna",
  },
];
