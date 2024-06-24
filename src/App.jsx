import Header from './components/newsHeader/newsHeader'
import './App.css'
import Article from './components/articles/articles'
import Categories from './components/categories/categories'
import { useState } from 'react'

function App() {

  return (
    <div className='main_box'>
      <Header/>
      <Article />
    </div>
  )
}

export default App
