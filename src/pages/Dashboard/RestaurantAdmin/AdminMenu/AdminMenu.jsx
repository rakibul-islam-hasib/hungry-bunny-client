import React, { useEffect, useState } from "react";
import { setLoading } from "../../../../redux/slices/authSlice";
import SingleAdminMenu from "./SingleAdminMenu";
import useMenuByRestaurant from "../../../../hooks/useMenuByRestaurant";
import MenuSkeleton from "../../../../components/Skeletons/MenuSkeleton";
import { useAuth } from "../../../../hooks/useAuth";

const AdminMenu = () => {
  // const [menus, setMenu] = useState([]);
  // const [isLoading, setIsLoading] = useState([true]);

  // const { user } = useAuth();
  // useEffect(() => {
  //   fetch(`https://hungry-bunny.vercel.app/food/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setIsLoading(false);
  //     });
  // }, []);

  const [menus, isLoading] = useMenuByRestaurant()
  console.log(menus);
  if (isLoading) return <MenuSkeleton />;

  return (

    <div>

      <div>
        <h1>Total Menu: {menus.length}</h1>
      </div>



      <div className="grid gap-4 grid-cols-3 mt-10">
        {menus.map((menu) => (
          isLoading ? setLoading :
            <SingleAdminMenu key={menu._id} menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default AdminMenu;
