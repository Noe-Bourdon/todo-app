'use client';

import React, { useEffect } from 'react'

//リダイレクト
import { redirect } from "next/navigation";

//リンク
import Link from 'next/link';

import { useState } from 'react';

function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      if (!res.ok) throw new Error("ログイン失敗");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className=''>
      <div className="flex items-center justify-center min-h-screen ">
        <div className='p-8 border border-gray-300 rounded-lg'>
          <h1 className='text-3xl mb-4'>Todo App</h1>
          <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <label className='font-bold'>name</label>
            <input
              type='text'
              className='p-2 border border-gray-300 rounded-lg'
              placeholder='name'
              onChange={(e) => setName(e.target.value)}
            />
            <label className='font-bold'>email</label>
            <input
              type='text'
              className='p-2 border border-gray-300 rounded-lg'
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className='font-bold'>password</label>
            <input
              type='password'
              className='p-2 border border-gray-300 rounded-lg'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
            <button type='submit' className='text-base bg-black text-white p-2 mb-2 mt-2 rounded-lg font-bold'>アカウント登録</button>
            <p className='text-xs font-bold'>アカウントをお持ちの方</p>
            <div className='p-2 border border-gray-300 text-center rounded-lg'>
              <Link href={"/login"} className='font-bold'>ログインへ</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page