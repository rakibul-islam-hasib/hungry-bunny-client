import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function AllFoods() {
  return (
    <div>
      <div className="relative mb-14">
        <img
          style={{ height: 700 }}
          className=" rounded-xl"
          src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/INNER_header_02.jpg"
          alt=""
        />
          <div>
          <h3 className="text-white absolute -mb-80 md:ml-96 text-6xl font-extrabold">
            ALL FOODS HERE
          </h3>
          </div>
        <div className="absolute inset-0 bg-blue-500 opacity-30 shadow-lg">
        </div>
      </div>
      <div>
      <Tabs>
    <TabList>
      <Tab>Pizza</Tab>
      <Tab>Sushi</Tab>
      <Tab>Hamburger</Tab>
      <Tab>Chicken Curry</Tab>
      <Tab>Salad</Tab>
      <Tab>French Fries</Tab>
      <Tab>Fried Chicken</Tab>
      <Tab>Sushi</Tab>
      <Tab>Caesar Salad</Tab>
      <Tab>Miso Soup</Tab>
      <Tab>Pad Thai</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
      </div>
    </div>
  );
}

export default AllFoods;
