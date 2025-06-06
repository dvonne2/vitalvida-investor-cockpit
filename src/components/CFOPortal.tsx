
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TomiDaviesTab } from './tabs/TomiDaviesTab';
import { RonConwayTab } from './tabs/RonConwayTab';
import { PeterThielTab } from './tabs/PeterThielTab';
import { AndyBechtolsheimTab } from './tabs/AndyBechtolsheimTab';
import { OtunbaShoyomboTab } from './tabs/OtunbaShoyomboTab';
import { UniversalHeader } from './UniversalHeader';

export const CFOPortal = () => {
  const [selectedTab, setSelectedTab] = useState('tomi-davies');

  return (
    <div className="min-h-screen bg-gray-50">
      <UniversalHeader />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CFO Portal - Investor Dashboard</h1>
          <p className="text-gray-600">Comprehensive financial oversight for world-class investors</p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger 
              value="tomi-davies" 
              className="text-xs md:text-sm px-2 py-3 data-[state=active]:bg-blue-900 data-[state=active]:text-white"
            >
              Tomi Davies
              <span className="block text-xs opacity-75">Governance & Control</span>
            </TabsTrigger>
            <TabsTrigger 
              value="ron-conway"
              className="text-xs md:text-sm px-2 py-3 data-[state=active]:bg-green-600 data-[state=active]:text-white"
            >
              Ron Conway
              <span className="block text-xs opacity-75">Scale Engine</span>
            </TabsTrigger>
            <TabsTrigger 
              value="peter-thiel"
              className="text-xs md:text-sm px-2 py-3 data-[state=active]:bg-slate-800 data-[state=active]:text-white"
            >
              Peter Thiel
              <span className="block text-xs opacity-75">Strategic Advantage</span>
            </TabsTrigger>
            <TabsTrigger 
              value="andy-bechtolsheim"
              className="text-xs md:text-sm px-2 py-3 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              Andy Bechtolsheim
              <span className="block text-xs opacity-75">Tech & Precision</span>
            </TabsTrigger>
            <TabsTrigger 
              value="otunba-shoyombo"
              className="text-xs md:text-sm px-2 py-3 data-[state=active]:bg-green-800 data-[state=active]:text-white"
            >
              Otunba Shoyombo
              <span className="block text-xs opacity-75">Owner's Dashboard</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tomi-davies">
            <TomiDaviesTab />
          </TabsContent>
          
          <TabsContent value="ron-conway">
            <RonConwayTab />
          </TabsContent>
          
          <TabsContent value="peter-thiel">
            <PeterThielTab />
          </TabsContent>
          
          <TabsContent value="andy-bechtolsheim">
            <AndyBechtolsheimTab />
          </TabsContent>
          
          <TabsContent value="otunba-shoyombo">
            <OtunbaShoyomboTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
