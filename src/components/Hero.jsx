'use client'
import React, { useState, useEffect } from 'react';
import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'



export function Hero() {

  return (
    <div className="relative sm:pb-24 sm:pt-8">
      <BackgroundImage className="-bottom-14 -top-36" />
    
      <Container className="relative">
           <main class=" pb-8">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
     
      <div class="grid grid-cols-1 gap-4 items-center lg:grid-cols-3 lg:gap-8">
       
        <div class="grid grid-cols-1 gap-4 lg:col-span-2 ">
          <section aria-labelledby="section-1-title">
            <div class="rounded-lg bg-white overflow-hidden shadow">
              <div class="p-6 flex items-center justify-center">
              <video controls poster="/images/w3html5.gif" class="min-h-[180px] w-[700px]">
                      <source src="movie.mp4" type="video/mp4"/>
                      <source src="movie.ogg" type="video/ogg"/>
                      Your browser does not support the video tag.
                    </video>
              </div>
            </div>
          </section>
        </div>

      
        <div class="grid grid-cols-1 gap-4 min-w-[500px]">
          <section aria-labelledby="section-2-title">
           
            <div class=" rounded-lg bg-white overflow-hidden shadow w-full h-[90vh] ml-5  ">
              
          <div class="flex items-center justify-between">
                <p class="pl-[20px] py-[16px] uppercase">Student Name</p>
                 <div class=" flex lg:mt-0 lg:flex-shrink-0">
      <div class="inline-flex rounded-md shadow">
        <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Share </a>
      </div>
      <div class="ml-3 inline-flex rounded-md shadow">
        <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"> X </a>
      </div>
    </div>
              </div>
          
          <div class="">
  <div class=" mx-auto lg:flex lg:items-center lg:justify-between pl-[10px] mb-6">
  
      <div class="flex items-center justify-between">

  <div class="mt-1 relative">


 <select id="location" name="location" class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"> 
    <option>small</option>
    <option selected>Normal</option>
    <option>Huge</option>
  </select>
  </div>
  <div class="flex pl-6 justify-between">
  <button class="font-bold mr-2 text-lg">B</button>
  <button class="font-bold mr-2 text-lg">I
</button>
<button class="font-bold mr-2 text-lg underline">U
</button>
  <button class="font-bold mr-2 text-lg underline">A</button>
  </div>
</div>
    

  </div>
</div>
        <div class="pl-[10px]">
         <div class="tabbed round">
            <ul id="tab-view-nav-list">
              <li id="tab-view-new-tab">New Tab</li>
              <li id="tab-0" class="active">Tab 1</li>
            </ul>
          </div>
        </div>

        <div class="px-[10px]">
           <div id="tab-view-content" class="h-[75vh]"><div class="tab-view-editor"><div id="editor_63" class="ql-container ql-snow"><div class="ql-editor ql-blank" data-gramm="false" contenteditable="true"><p><br/></p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div></div></div></div>
        </div>
        
              
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
 
      </Container>
    </div>
  )
}
