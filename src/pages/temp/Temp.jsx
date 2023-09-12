import React from 'react';
import { Tab } from '@headlessui/react'
const Temp = () => {





  return (
    <div>
      <h1>Temp </h1>
      <Tab.Group vertical>
        <Tab.List>
          <Tab as='button' className={({ selected }) => `${selected ? 'text-primary' : ''} outline-none`}>Tab 1</Tab>
          <Tab as='button' className={({ selected }) => `${selected ? 'text-primary' : ''} outline-none`}>Tab 2</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Tab 1</Tab.Panel>
          <Tab.Panel>Tab 2</Tab.Panel>

        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Temp;