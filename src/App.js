import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FiSettings } from "react-icons/fi"
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Footer, Sidebar, ThemeSetting } from "./components"
import {Ecommerce, Area, Bar, ColorMapping, Financial, Line, Pie, Pyramid, Stacked, Calendar, ColorPicker, Customer, Editor, Employees, Kanban, Orders } from "./pages"

import {useStateContext} from "./contexts/ContextProvider"

import './App.css'

const App = () => {
  const {activeMenu} = useStateContext()
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
            <TooltipComponent content="Setting" position="Top">
              <button
                type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{background: "blue", borderRadius: "50%"}}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
              <div className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar/>
              </div>
          )}
          <div className={
            activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          </div>

          {/* Div for Routing */}
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element={<Ecommerce/>}/>
              <Route path='/ecommerce' element={<Ecommerce/>} />
              
              {/* Pages */}
              <Route path='/orders' element={<Orders/>} />
              <Route path='/employees' element={<Employees/>} />
              <Route path='/customers' element={<Customer/>} />

              {/* Apps */}
              <Route path='/calendar' element={<Calendar/>} />
              <Route path='/kanban' element={<Kanban/>} />
              <Route path='/editor' element={<Editor/>} />
              <Route path='/color-picker' element={<ColorPicker/>} />
              
              {/* Charts */}
              <Route path='/line' element={<Line/>} />
              <Route path='/area' element={<Area/>} />
              <Route path='/bar' element={<Bar/>} />
              <Route path='/pie' element={<Pie/>} />
              <Route path='/financial' element={<Financial/>} />
              <Route path='/color-mapping' element={<ColorMapping/>} />
              <Route path='/pyramid' element={<Pyramid/>} />
              <Route path='/stack' element={<Stacked/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
