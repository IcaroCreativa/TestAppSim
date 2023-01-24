import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { app, database } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const dbInstance = collection(database, 'notes');

export default function Home() {
  const [noteTitle, setNoteTitle] = useState('')

  const saveNote = () => {
    addDoc(dbInstance, {
      noteTitle: noteTitle
  })
  }



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <main className={styles.main}>
        <div className='flex'>
          
        <input 
        type='text' 
        className='rounded border border-gray-300 w-62'
        onChange={(e) => setNoteTitle(e.target.value)}
        />
        <button 
        className='ml-4 rounded bg-blue-600 text-white px-2'
        onClick={saveNote}
        
        >Send</button>
       
        <p className='block'>{noteTitle}</p>
         </div>      
      </main>
    </>
  )
}
