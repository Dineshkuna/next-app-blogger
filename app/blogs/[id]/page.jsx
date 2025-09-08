'use client'

import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, use } from 'react';

const Page = ({ params }) => {
  // ✅ unwrap the promise with React.use()
  const { id } = use(params);

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBlogData = () => {
      const found = blog_data.find((item) => item.id === Number(id));
      if (found) {
        setData(found);
        console.log(found);
      }
    };
    fetchBlogData();
  }, [id]);

  if (!data) return null;

  return (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href={'/'}>
            <Image
              src={assets.logo}
              width={180}
              alt=""
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get started
            <Image src={assets.arrow} width={20} height={20} alt="arrow" />
          </button>
        </div>

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.author_img}
            width={60}
            height={60}
            alt=""
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>

      <div className="mx-5 max w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={720}
          alt=""
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
          reiciendis libero culpa suscipit dicta, minus nam cumque distinctio?
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step 2: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
          reiciendis libero culpa suscipit dicta, minus nam cumque distinctio?
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step 3: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
          reiciendis libero culpa suscipit dicta, minus nam cumque distinctio?
        </p>

        <h3 className="my-5 text-[18px] font-semibold">Conclusion</h3>
        <p className="my-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          velit facilis quidem voluptate tempore veniam? Sint error asperiores,
          accusantium autem impedit, sapiente in quas ab rerum similique nobis
          enim at.
        </p>

        <div className="my-24">
          <p className="text-black font semibold my-4 ">
            Share this article on social media
          </p>
          <div className="flex ">
            <Image src={assets.facebook_icon} width={50} alt="" />
            <Image src={assets.twitter_icon} width={50} alt="" />
            <Image src={assets.googleplus_icon} width={50} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
